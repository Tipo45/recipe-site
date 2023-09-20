const openSearchButtons = document.getElementById("openSearchButtons");
const searchPopup = document.getElementById("searchPopup");
const closePopupButton = document.getElementById("closePopupButton");

// Open the search popup
openSearchButton.addEventListener("click", () => {
    searchPopup.style.display = "block";
});

// Close the search popup
closePopupButton.addEventListener("click", () => {
    searchPopup.style.display = "none";
});
