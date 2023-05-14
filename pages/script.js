

/* Функция открытия попапа */

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

/* Функция закрытия попапа */

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/* Обрабатываем все кнопки закрыть попап */

const buttonsPopupClose = document.querySelectorAll('.button_type_popup-close');

buttonsPopupClose.forEach(function (item) {
  const popupClose = item.closest('.popup');
  item.addEventListener('click', function () {
  closePopup(popupClose);
  })
});

/* Форма добавления места */
/* Объявляем переменные, необходимые для работы */

const buttonPlaceAdd = document.querySelector('.button_type_place-add');
const formSubmitPlaceAdd = document.querySelector('.form-place');
const popupPlaceAdd = document.querySelector('.popup-place');

/* Обрабатываем нажатие на кнопку "Добавить место" */

buttonPlaceAdd.addEventListener('click', function () {
  openPopup(popupPlaceAdd);
});

/* Обрабатываем нажатие на кнопку "Закрыть" */
/* Обрабатываем нажатие на кнопку "Создать" с проверкой на заполнение полей формы */

formSubmitPlaceAdd.addEventListener('submit', function (evt) {
  evt.preventDefault();
  closePopup(popupPlaceAdd);
  if (new_place.value && new_image.value) {
    places.prepend(addNewPlace(new_place.value, new_image.value));
  }
  evt.target.reset();
});

/* Функционал добавления новых мест */
/* Объявляем переменные, необходимые для работы */

const places = document.querySelector('.places');

/* Объявляем функцию */

function addNewPlace(placeTitle, placeImage) {

  // Создаем новую карточку внутри функции

  const placeTemplate = document.querySelector('#place_template').content;
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

  placeElement.querySelector('.place__image').src = placeImage;
  placeElement.querySelector('.place__title').textContent = placeTitle;
  placeElement.querySelector('.place__image').alt = `Фотография места ${placeTitle}`;

  // Обработка кнопки "Лайк" для карточки внутри функции

  const buttonLike = placeElement.querySelector('div.place__content .button');

  buttonLike.addEventListener('click', function () {
    buttonLike.classList.toggle('button_type_like-active');
    buttonLike.classList.toggle('button_type_like');
  });

  // Обработка кнопки "Удалить" для карточки внутри функции

  const buttonPlaceDelete = placeElement.querySelector('.button_type_delete');

  buttonPlaceDelete.addEventListener('click', function () {
    buttonPlaceDelete.closest('.place').remove();
  });

  // Попап с картинкой для карточки внутри функции

  const placeImagePopup = placeElement.querySelector('.place__image');
  const popupImage = document.querySelector('.popup-image');
  const imagePopupImage = document.querySelector('.popup-image__image');
  const captionPopupImage = document.querySelector('.popup-image__caption');

  placeImagePopup.addEventListener('click', function () {
    openPopup(popupImage);
    imagePopupImage.src = placeImagePopup.src;
    imagePopupImage.alt = placeImagePopup.alt;
    captionPopupImage.textContent = placeImagePopup.closest('.place').textContent;
  });

  // Возвращаем карточку

   return placeElement;
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
  places.prepend(addNewPlace(item.name, item.link));
});

/* Форма редактирования профиля */
/* Объявляем переменные, необходимые для работы */

const buttonOpenPopupProfileEdit = document.querySelector('.button_type_profile-edit');
const formSubmitProfileEdit = document.querySelector('.form');
const popupProfileEdit = document.querySelector('.popup');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formNameProfileEdit = document.querySelector('#name');
const formDescriptionProfileEdit = document.querySelector('#description');

/* Обрабатываем нажатие на кнопку "Редактировать" */

buttonOpenPopupProfileEdit.addEventListener('click', function () {
  openPopup(popupProfileEdit);
  formNameProfileEdit.setAttribute('value', profileTitle.textContent);
  formDescriptionProfileEdit.setAttribute('value', profileDescription.textContent);
});

/* Обрабатываем событие "Отправить" внутри формы" с проверкой на заполнение полей формы */

formSubmitProfileEdit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  closePopup(popupProfileEdit);
  if (formNameProfileEdit.value && formDescriptionProfileEdit.value) {
    profileTitle.textContent = formNameProfileEdit.value;
    profileDescription.textContent = formDescriptionProfileEdit.value;
  }
});

