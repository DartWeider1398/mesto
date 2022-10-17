// popup profile
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('#popupInfoForm');
const popupProfileCloseButton = popupProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const popupProfileInfoForm = popupProfile.querySelector('.popup__container');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileJob = popupProfile.querySelector('.popup__input_type_description');
const itemsContainer = document.querySelector('.elements');
//   popup__card
const popupCard = document.querySelector('#addCard');
const сardContainer = popupCard.querySelector('.popup__container');
const popupCloseCard = popupCard.querySelector('.popup__close');

const cardName = popupCard.querySelector('.popup__input_type_title');
const cardLink = popupCard.querySelector('.popup__input_type_link');

const itemAdditionButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
// img popup
const imgPopup = document.querySelector('#imgPopup')
const imgPopupImg = imgPopup.querySelector('.popup__image')
const imgPopupCloseButton = imgPopup.querySelector('.popup__close')
const imgPopupText = imgPopup.querySelector('.popup__image-name')


const itemTemplate = document.querySelector('#elements__list-item')
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

const createNewItemFromTemplate = function (cardLink, cardName) {
  const item = itemTemplate.content.cloneNode(true);
  const img = item.querySelector('.elements__picture')
  const imgName = item.querySelector('.elements__text')

  img.src = cardLink;
  img.alt = cardName;
  imgName.textContent = cardName;

  return item;
}

const addNewItem = function (event) {
  event.preventDefault()

  item = createNewItemFromTemplate(cardLink.value, cardName.value)

  elementsList.prepend(item)

  cardLink.value = ""
  cardName.value = ""
  togglePopup(popupCard);
};

const renderItems = function () {
  initialCards.forEach((card) => {

    item = createNewItemFromTemplate(card.link, card.name)

    elementsList.appendChild(item)
  });
}

const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened');
}


// popup__card__end
const openProfilePopup = function () {
  popupProfileName.value = profileName.textContent;
  popupProfileJob.value = profileJob.textContent;
  togglePopup(popupProfile);
};

const changeProfileInfo = function (event) {
  event.preventDefault();
  profileName.textContent = popupProfileName.value;
  profileJob.textContent = popupProfileJob.value;
  togglePopup(popupProfile);
};

const toggleLikeDeleteButton = function (event) {
  if (event.target.classList.contains('elements__like-button')) {
    event.target.classList.toggle('elements__like-button_active');
  }
  if (event.target.classList.contains('elements__delete-button')) {
    event.target.closest('.elements__list-item').remove();
  }
  if (event.target.classList.contains('elements__picture')) {
    imgPopupImg.src = event.target.src
    imgPopupImg.alt = event.target.closest('.elements__list-item').querySelector('.elements__text').textContent
    imgPopupText.textContent = event.target.closest('.elements__list-item').querySelector('.elements__text').textContent
    imgPopup.classList.toggle('popup_opened')
  }
}

itemAdditionButton.addEventListener('click', () => {
  togglePopup(popupCard);
});

popupCloseCard.addEventListener('click', () => {
  togglePopup(popupCard);
});

imgPopupCloseButton.addEventListener('click', () => {
  togglePopup(imgPopup);
});

popupProfileCloseButton.addEventListener('click', () => {
  togglePopup(popupProfile);
});

popupProfileOpenButton.addEventListener('click', openProfilePopup);

popupProfileInfoForm.addEventListener('submit', changeProfileInfo);

itemsContainer.addEventListener('click', toggleLikeDeleteButton);

popupCard.addEventListener('submit', addNewItem);

window.addEventListener('load', () => {
  renderItems();
});
