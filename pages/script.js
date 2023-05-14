
/* Форма добавления места */
/* Объявляем переменные, необходимые для работы */

const buttonPlaceAdd = document.querySelector('.button_type_place-add');
const formSubmitPlaceAdd = document.querySelector('.form-place');
const buttonClosePopupPlaceAdd = document.querySelector('.button_type_form-close-place');

let popupPlaceAdd = document.querySelector('.popup-place');

/* Обрабатываем нажатие на кнопку "Добавить место" */

buttonPlaceAdd.addEventListener('click', function () {
  popupPlaceAdd.classList.add('popup-place_opened');
});

/* Обрабатываем нажатие на кнопку "Закрыть" */

buttonClosePopupPlaceAdd.addEventListener('click', function () {
  popupPlaceAdd.classList.remove('popup-place_opened');
});

/* Обрабатываем нажатие на кнопку "Создать" с проверкой на заполнение полей формы */

formSubmitPlaceAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  popupPlaceAdd.classList.remove('popup-place_opened');
  if (new_place.value && new_image.value) {
    addNewPlace(new_place.value, new_image.value);
  }
});

/* Функционал добавления новых мест */
/* Объявляем переменные, необходимые для работы */

let places = document.querySelector('.places');

/* Объявляем функцию */

function addNewPlace(placeTitle, placeImage) {

  // Создаем новую карточку внутри функции

  const placeTemplate = document.querySelector('#place_template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__image').src = placeImage;
  placeElement.querySelector('.place__title').textContent = placeTitle;
  placeElement.querySelector('.place__image').alt = `Фотография места ${placeTitle}`;

  // Обработка кнопки "Лайк" для карточки внутри функции

  let buttonLike = placeElement.querySelector('div.place__content .button');

  buttonLike.addEventListener('click', function () {
    buttonLike.classList.toggle('button_type_like-active');
    buttonLike.classList.toggle('button_type_like');
  });

  // Обработка кнопки "Удалить" для карточки внутри функции

  let buttonPlaceDelete = placeElement.querySelector('.button_type_delete');

  buttonPlaceDelete.addEventListener('click', function () {
    buttonPlaceDelete.closest('.place').remove();
  });

  // Попап с картинкой для карточки внутри функции

  const placeImagePopup = placeElement.querySelector('.place__image');

  let popupImage = document.querySelector('.popup-image');
  let ImagePopupImage = document.querySelector('.popup-image__image');
  let CaptionPopupImage = document.querySelector('.popup-image__caption');

  placeImagePopup.addEventListener('click', function () {
    popupImage.classList.add('popup-image_opened');
    ImagePopupImage.src = placeImagePopup.src;
    ImagePopupImage.alt = placeImagePopup.alt;
    CaptionPopupImage.textContent = placeImagePopup.closest('.place').textContent;
  });

  const buttonClosePopupImage = document.querySelector('.button_type_popup-close-image');

  buttonClosePopupImage.addEventListener('click', function () {
    popupImage.classList.remove('popup-image_opened');
  });

  // Добавляем карточку в начало внутри функции

  places.prepend(placeElement);
  }

  /* Добавление новых мест при загрузке */

const initialCards = [
  {
    name: 'Остров Крит',
    link: './images/crite.jpg'
  },
  {
    name: 'Деревня Флом',
    link: './images/flom.jpg'
  },
  {
    name: 'Стокгольм',
    link: './images/Stockholm.jpg'
  },
  {
    name: 'Где-то в Норвегии',
    link: './images/norway.jpg'
  },
  {
    name: 'Питер - закат с видом на Лахта Башню',
    link: './images/piter.jpg'
  },
  {
    name: 'Поля Поволжья',
    link: './images/povolzhe.jpg'
  }
];

initialCards.forEach(function (item) {
  addNewPlace(item.name, item.link);
});

/* Форма редактирования профиля */
/* Объявляем переменные, необходимые для работы */

const buttonOpenPopupProfileEdit = document.querySelector('.button_type_profile-edit');
const buttonClosePopupProfileEdit = document.querySelector('.button_type_form-close');
const formSubmitProfileEdit = document.querySelector('.form');

let popupProfileEdit = document.querySelector('.popup');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');
let formNameProfileEdit = document.querySelector('#name');
let formDescriptionProfileEdit = document.querySelector('#description');

/* Обрабатываем нажатие на кнопку "Редактировать" */

buttonOpenPopupProfileEdit.addEventListener('click', function () {
  popupProfileEdit.classList.add('popup_opened');
  formNameProfileEdit.setAttribute('value', profileTitle.textContent);
  formDescriptionProfileEdit.setAttribute('value', profileDescription.textContent);
});

/* Обрабатываем нажатие на кнопку "Закрыть внутри формы" */

buttonClosePopupProfileEdit.addEventListener('click', function () {
  popupProfileEdit.classList.remove('popup_opened');
});

/* Обрабатываем событие "Отправить" внутри формы" с проверкой на заполнение полей формы */

formSubmitProfileEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  popupProfileEdit.classList.remove('popup_opened');
  if (formNameProfileEdit.value && formDescriptionProfileEdit.value) {
    profileTitle.textContent = formNameProfileEdit.value;
    profileDescription.textContent = formDescriptionProfileEdit.value;
  }
});

