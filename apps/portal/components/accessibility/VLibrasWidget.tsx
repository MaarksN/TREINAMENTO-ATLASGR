"use client";

import Script from "next/script";
import { useCallback, useState } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
  }
}

export function VLibrasWidget() {
  const [loaded, setLoaded] = useState(false);

  const initialize = useCallback(() => {
    if (loaded || !window.VLibras) return;
    try {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      setLoaded(true);
    } catch {
      // O botão oficial permanece no DOM; em caso de indisponibilidade externa,
      // o restante da Academia continua funcionando normalmente.
    }
  }, [loaded]);

  return (
    <>
      <div id="vlibras-widget-container" aria-label="Intérprete virtual de LIBRAS">
        <div vw="true" className="enabled">
          <div vw-access-button="true" className="active" />
          <div vw-plugin-wrapper="true">
            <div className="vw-plugin-top-wrapper" />
          </div>
        </div>
      </div>
      <Script
        id="vlibras-script"
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initialize}
      />
    </>
  );
}
