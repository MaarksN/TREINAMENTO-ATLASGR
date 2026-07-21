import { useEffect, useRef } from "react";

type KeyHandler = (e: KeyboardEvent) => void;

interface HotkeyMap {
  [key: string]: KeyHandler;
}

/**
 * Hook para gerenciar atalhos de teclado (Hotkeys).
 * Facilita a navegação sem mouse para operadores de Torre de Controle.
 *
 * @param hotkeys Objeto mapeando atalhos para funções.
 *                Ex: { "ctrl+k": () => openSearch(), "1": () => selectOption(1) }
 */
export function useHotkeys(hotkeys: HotkeyMap) {
  // Guardado em ref para aceitar um objeto literal inline em cada render sem
  // precisar remontar o listener global a cada renderização do componente.
  const hotkeysRef = useRef(hotkeys);
  useEffect(() => {
    hotkeysRef.current = hotkeys;
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore plain-key shortcuts (ex.: "1", "2") enquanto o usuário digita em um
      // campo — mas atalhos com Ctrl/Cmd (ex.: "ctrl+k") continuam valendo em
      // qualquer lugar, como em qualquer app de produtividade real.
      const isTypingTarget =
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA" ||
        (document.activeElement as HTMLElement)?.isContentEditable;
      if (isTypingTarget && !event.ctrlKey && !event.metaKey) {
        return;
      }

      const keyCombo = [
        event.ctrlKey ? "ctrl" : "",
        event.altKey ? "alt" : "",
        event.shiftKey ? "shift" : "",
        event.metaKey ? "meta" : "",
        event.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join("+");

      const handler = hotkeysRef.current[keyCombo];
      if (handler) {
        event.preventDefault();
        handler(event);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
