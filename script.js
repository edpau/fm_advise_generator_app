// Constants and DOM element selections
const URL = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector(".advice__id");
const adviceText = document.querySelector(".advice__text-content");
const adviceButton = document.querySelector(".advice_button");
const loadingDiv = document.querySelector(".advice__loading");


// Helper function definitions
function updateAdviceUI(id, text) {
  adviceId.textContent = id;
  adviceText.textContent = text;
}

function validateApiResponse(resObj) {
  if (
    !resObj ||
    typeof resObj !== "object" ||
    !resObj.slip ||
    typeof resObj.slip !== "object" ||
    typeof resObj.slip.id !== "number" ||
    typeof resObj.slip.advice !== "string"
  ) {
    throw new Error("Invalid response format");
  }
}

function showErrorMessage() {
  adviceText.textContent =
    "Sorry, something went wrong. Please try again later.";
}

// Function to toggle the loading state of the advice button and display a loading indicator
function toggleLoadingState(isLoading, isError = false) {
  if (isLoading) {
    loadingDiv.classList.add("advice__loading--show");
    adviceButton.disabled = true;
    adviceButton.setAttribute("aria-busy", true);
  } else {
    loadingDiv.classList.remove("advice__loading--show");
    adviceButton.disabled = false;
    adviceButton.setAttribute("aria-busy", false);
  }

  if (isError) {
    adviceText.classList.add("advice__text--error");
  } else {
    adviceText.classList.remove("advice__text--error");
  }
}

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Main function definitions
async function getNewAdvice() {
  try {
    toggleLoadingState(true);
    const res = await fetch(URL);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const resObj = await res.json();

    validateApiResponse(resObj);

    updateAdviceUI(resObj.slip.id, resObj.slip.advice);
  } catch (error) {
    toggleLoadingState(false, true);
    console.log(error);
    showErrorMessage();
    return;
  }
  toggleLoadingState(false);
}

// Initialization function
function init() {
  if (!adviceId || !adviceText || !adviceButton || !loadingDiv) {
    console.error("Required DOM elements are missing");
    return;
  }

  adviceButton.addEventListener("click", debounce(getNewAdvice, 300));
  getNewAdvice();
}

// Initialization call
// init();
