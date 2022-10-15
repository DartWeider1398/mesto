// popup profile
const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const changeInfoForm = popup.querySelector('.popup__container');
const popupName = popup.querySelector('.popup__input_type_name');
const popupJob = popup.querySelector('.popup__input_type_description');
const items = document.querySelector('.elements');
//   popup__card
const popupCard = document.querySelector('#addCard');
const сardContainer = popupCard.querySelector('.popup__container');
const popupCloseCard = popupCard.querySelector('.popup__close');
const popupTitle = popupCard.querySelector('.popup__title');
const popupForm = popupCard.querySelector('.popup__form');
const сardName = popupCard.querySelector('.popup__input_type_title');
const cardLink = popupCard.querySelector('.popup__input_type_link');
const saveCardButton = popupCard.querySelector('.popup__save-button');
const profileButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
// img popup
const imgPopup = document.querySelector('#imgPopup')
const imgPopupImg = imgPopup.querySelector('.popup__image')
const imgPopupCloseButton = imgPopup.querySelector('.popup__close')
const imgPopupText = imgPopup.querySelector('.popup__image-name')

// Card
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const addNewItem = function (event) {
  event.preventDefault()
  let item = document.createElement('li')
  let container = document.createElement('div')
  let img = document.createElement('img')
  let text = document.createElement('h2')
  let likeButton = document.createElement('button')
  let deleteButton = document.createElement('button')

  deleteButton.classList.add('elements__delete-button')
  likeButton.classList.add('elements__like-button')
  text.classList.add('elements__text')
  container.classList.add('elements__container')
  item.classList.add('elements__list-item')
  img.classList.add('elements__picture')

  img.src = cardLink.value;
  text.textContent = сardName.value
  item.appendChild(img)
  item.appendChild(container)
  container.appendChild(text)
  container.appendChild(likeButton)
  container.appendChild(deleteButton)

  elementsList.insertBefore(item, elementsList.firstChild)

  popupCard.classList.toggle('popup_opened');
};

const renderItems = function () {
  initialCards.forEach((card) => {
    let item = document.createElement('li')
    let container = document.createElement('div')
    let img = document.createElement('img')
    let text = document.createElement('h2')
    let likeButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    deleteButton.classList.add('elements__delete-button')
    likeButton.classList.add('elements__like-button')
    text.classList.add('elements__text')
    container.classList.add('elements__container')
    item.classList.add('elements__list-item')
    img.classList.add('elements__picture')

    img.src = card.link;
    text.textContent = card.name;
    item.appendChild(img)
    item.appendChild(container)
    container.appendChild(text)
    container.appendChild(likeButton)
    container.appendChild(deleteButton)
    elementsList.appendChild(item)
  });
}

// popup__card__end
const popupOpen = function () {
  popupName.value = profileName.textContent;
  popupJob.value = profileJob.textContent;
  popupToggle();
};

const popupToggle = function () {
  popup.classList.toggle('popup_opened');
}

const popupChangeInfo = function (event) {
  event.preventDefault();
  profileName.textContent = popupName.value;
  profileJob.textContent = popupJob.value;
  popupToggle();
};

const toggleLikeDeleteButton = function (event) {
  if (event.target.classList.contains('elements__like-button')) {
    event.target.classList.toggle('elements__like-button_active');
  }
  if (event.target.classList.contains('elements__delete-button')) {
    event.target.parentElement.parentElement.remove();
  }
  if (event.target.classList.contains('elements__picture')) {
    imgPopupImg.src = event.target.src
    imgPopupText.textContent = event.target.parentElement.querySelector('.elements__text').textContent
    imgPopup.classList.toggle('popup_opened')
  }
}

window.addEventListener('load', () => {
  renderItems();
});


profileButton.addEventListener('click', () => {
  popupCard.classList.toggle('popup_opened');
});

popupCloseCard.addEventListener('click', () => {
  popupCard.classList.toggle('popup_opened');
});

imgPopupCloseButton.addEventListener('click', () => {
  imgPopup.classList.toggle('popup_opened');
});

popupOpenButton.addEventListener('click', popupOpen);

popupCloseButton.addEventListener('click', popupToggle);

changeInfoForm.addEventListener('submit', popupChangeInfo);

items.addEventListener('click', toggleLikeDeleteButton);

сardContainer.addEventListener('submit', addNewItem);
