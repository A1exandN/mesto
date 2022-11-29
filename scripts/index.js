let popupBg = document.querySelector('.popup'); //фон
let popupForm = document.querySelector('.popup__form'); //форма

let openPopup = document.querySelector('.profile__button');
let closePopup = document.querySelector('.popup__close');

let addOpenPopup = document.querySelector('.popup_opened');

let popupTitle = document.querySelector('#formName').value; //из формы 1
let popupSubtitle = document.querySelector('#formSpecial').value; //из формы 2

let profileTitle = document.querySelector('.profile__title'); //со транички 1
let profileSubtitle = document.querySelector('.profile__subtitle'); //со транички 2

let popupBottomSave = document.querySelector('.popup__button'); //Кнопка сохранить

popupBottomSave.addEventListener('click', save);
openPopup.addEventListener('click', open);
closePopup.addEventListener('click', close);

function open() {
   popupBg.classList.add('popup_opened');
}
function close() {
   popupBg.classList.remove('popup_opened');
}
function save() {
   popupBg.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
   evt.preventDefault();

   profileTitle.textContent = popupTitle
   profileSubtitle.textContent = popupSubtitle
   save();
}

popupForm.addEventListener('submit', formSubmitHandler);
