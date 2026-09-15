    window.__RAINY_SKYLINE_READY__ = false;
    window.addEventListener("error", function(event) {
      if (window.__RAINY_SKYLINE_READY__) {
        console.error("Rainy Skyline runtime error:", event.error || event.message || event);
        return;
      }
      const message = String(event.message || "Unknown initialization error");
      const body = document.body;
      if (!body) return;
      body.replaceChildren();
      const panel = document.createElement("div");
      panel.style.cssText = "position:fixed;inset:0;background:#030712;color:white;padding:30px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;overflow:auto;z-index:999999";
      const title = document.createElement("h2");
      title.style.color = "#38bdf8";
      title.textContent = "Rainy Skyline — Initialization Error";
      const description = document.createElement("p");
      description.textContent = message;
      const line = document.createElement("p");
      line.style.cssText = "color:#94a3b8;font-size:13px";
      line.textContent = `Line: ${event.lineno || "unknown"}`;
      panel.append(title, description, line);
      body.appendChild(panel);
    });
    window.addEventListener("unhandledrejection", function(event) {
      console.error("Rainy Skyline unhandled promise rejection:", event.reason);
    });
    
