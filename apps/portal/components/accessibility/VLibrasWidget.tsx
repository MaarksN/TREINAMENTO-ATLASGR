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

const widgetMarkup = `
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
`;

export function VLibrasWidget() {
  const [loaded, setLoaded] = useState(false);

  const initialize = useCallback(() => {
    if (loaded || !window.VLibras) return;
    try {
      new window.VLibras.Widget("https://vlibras.gov.br/app");
      setLoaded(true);
    } catch {
      // A indisponibilidade do serviço externo de LIBRAS não deve impedir
      // o uso do restante da Academia.
    }
  }, [loaded]);

  return (
    <>
      <div
        id="vlibras-widget-container"
        aria-label="Intérprete virtual de LIBRAS"
        dangerouslySetInnerHTML={{ __html: widgetMarkup }}
      />
      <Script
        id="vlibras-script"
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initialize}
      />
    </>
  );
}
