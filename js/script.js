const shareIcon = document.querySelector("#share-img");
const shareBoxButton = document.querySelector("#share-detail-box");

shareIcon.addEventListener("click", function () {
    shareBoxButton.classList.toggle("hidden");
});
