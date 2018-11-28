document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const handleFavoriteSubmit = (e) => {
    e.preventDefault();
    const favoriteInput = document.querySelector('.favorite-input');
    const favorite = favoriteInput.value;
    favoriteInput.value = "";

    const newListEl = document.createElement("li");
    newListEl.textContent = favorite;

    const places = document.getElementById('sf-places');
    places.appendChild(newListEl);
  };

  const listSubmitButton = document.querySelector('.favorite-submit');
  listSubmitButton.addEventListener("click", handleFavoriteSubmit);



  // adding new photos

  const showPhotoForm = (e) => {
    const photoFormDiv = document.querySelector(".photo-form-container");
    if (photoFormDiv.className === "photo-form-container") {
      photoFormDiv.className = "photo-form-container hidden";
    } else {
      photoFormDiv.className = "photo-form-container";
    }
  };

  const photoFormShowButton = document.querySelector(".photo-show-button");
  photoFormShowButton.addEventListener("click", showPhotoForm);


  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const photoInput = document.querySelector(".photo-url-input");
    const imageUrl = photoInput.value;
    photoInput.value = "";

    const newImg = document.createElement("img");
    newImg.src = imageUrl;

    const newPhotoEl = document.createElement("li");
    newPhotoEl.appendChild(newImg);

    const photos = document.querySelector('.dog-photos');
    photos.appendChild(newPhotoEl);
  };

  const photoSubmitButton = document.querySelector('.photo-url-submit');
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});