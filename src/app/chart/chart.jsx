"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ChartPage() {
  const searchParams = useSearchParams();
  const symbol = searchParams.get("symbol") || "AAPL";

  useEffect(() => {
    const widgetContainer = document.getElementById(
      "tradingview-widget-container"
    );

    // Clear old widget if present
    if (widgetContainer) {
      widgetContainer.innerHTML = '<div id="tradingview-widget"></div>';
    }

    const scriptId = "tradingview-widget-script";

    // Avoid injecting script again if already present
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;

      script.onload = () => createWidget(symbol);
      document.body.appendChild(script);
    } else {
      // Script already loaded
      createWidget(symbol);
    }

    function createWidget(sym) {
      if (document.getElementById("tradingview-widget") && window.TradingView) {
        new window.TradingView.widget({
          container_id: "tradingview-widget",
          symbol: sym,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: false,
          hide_legend: false,
          width: "100%",
          height: window.screen.height,
        });
      }
    }
  }, [symbol]);

  return (
    <div className="bg-black">
      <div id="tradingview-widget-container" className="h-full">
        <div id="tradingview-widget" className="h-full" />
      </div>
    </div>
  );
}
