function like(elem) {
    elem.classList.toggle("elements__like-button_active");
}

// Получил элементы
const popupOpenButton = document.querySelector(".profile__avatar-image-button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");

const popupToggle = function (event) {
  popup.classList.toggle("popup__active");
  console.log("нажали на кнопку");
};

// Навесить слушатель на клик по кнопке 'О проекте'
popupOpenButton.addEventListener("click", popupToggle);

// Навесил слушатель на клик по крестику
popupCloseButton.addEventListener("click", popupToggle);

// // Бонусики
// const header = document.querySelector(".header");
// header.addEventListener("click", function (event) {
//   console.log("нажали на хедер");
//   console.log(event.target);
//   console.log(event.currentTarget);
// });

// // Применение всплытия
// const closePopupByClickingOnOverlay = function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);

//   if (event.target == event.currentTarget) {
//     popupToggle();
//   }
// };

// popup.addEventListener("click", closePopupByClickingOnOverlay);
