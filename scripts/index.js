const popupOpenButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const changeInfoForm = document.querySelector(".popup__container");
const popupName = document.querySelector(".popup__input_type_name");
const popupJob = document.querySelector(".popup__input_type_description");
const items = document.querySelector(".elements");

const popupToggle = function () {
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
  popup.classList.toggle("popup_opened");
};

const popupChangeInfo = function (event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  popup.classList.toggle("popup_opened");
};

const toggleLikeButton = function (event) {
  if (event.target.classList.contains("elements__like-button")) {
    event.target.classList.toggle("elements__like-button_active");
  }
}

popupOpenButton.addEventListener('click', popupToggle);

popupCloseButton.addEventListener('click', popupToggle);

changeInfoForm.addEventListener('submit', popupChangeInfo);

items.addEventListener("click", toggleLikeButton);

