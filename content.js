(function() {
  const DEFAULT_BODY_BG = 'https://picsum.photos/700';

  function applyBackgrounds(mainSurfaceBg) {
    // Apply body background
    document.body.style.backgroundImage = `url('${DEFAULT_BODY_BG}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Apply main surface background if provided
    const mainSurface = document.querySelector(".MainSurface");
    if (mainSurface && mainSurfaceBg) {
      mainSurface.style.backgroundImage = `url('${mainSurfaceBg}')`;
      mainSurface.style.backgroundSize = "cover";
      mainSurface.style.backgroundPosition = "center";
      mainSurface.style.backgroundRepeat = "no-repeat";
    }
  }

  function resetBackgrounds() {
    document.body.style.backgroundImage = "";
    const mainSurface = document.querySelector(".MainSurface");
    if (mainSurface) {
      mainSurface.style.backgroundImage = "";
    }
  }

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "applyBackgrounds") {
      applyBackgrounds(message.mainSurfaceBg);
    } else if (message.type === "resetBackgrounds") {
      resetBackgrounds();
    }
  });

  applyBackgrounds();
})();