function like(elem) {
  elem.classList.toggle("elements__like-button_active");
}

// Получил элементы
const popupOpenButton = document.querySelector(".profile__avatar-image-button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupSaveButton = document.querySelector(".popup__save-button");
const popupName = document.querySelector(".popup__name");
const popupJob = document.querySelector(".popup__description");

const popupToggle = function (event) {
  popup.classList.toggle("popup__active");
  popupName.value = profileName.innerHTML;
  popupJob.value = profileJob.innerHTML;
};

const popupChangeInfo = function (event) {
  profileName.innerHTML = popupName.value;
  profileJob.innerHTML = popupJob.value;
  popup.classList.toggle("popup__active");
};

// Навесить слушатель на клик по кнопке 'О проекте'
popupOpenButton.addEventListener("click", popupToggle);

// Навесил слушатель на клик по крестику
popupCloseButton.addEventListener("click", popupToggle);

popupSaveButton.addEventListener("click", popupChangeInfo);

