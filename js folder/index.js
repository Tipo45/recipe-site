const openSearchButton = document.getElementById("openSearchButton");
const searchPopups = document.getElementById("searchPopups");
const closePopupButtons = document.getElementById("closePopupButtons");

// Open the search popup
openSearchButtons.addEventListener("click", () => {
    searchPopup.style.display = "block";
});

// Close the search popup
closePopupButtons.addEventListener("click", () => {
    searchPopup.style.display = "none";
});
