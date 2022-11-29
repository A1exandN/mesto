let popupBg = document.querySelector('.popup'); //фон
let popupForm = document.querySelector('.popup__form'); //форма

let openPopup = document.querySelector('.profile__button');
let closePopup = document.querySelector('.popup__close');

let addOpenPopup = document.querySelector('.popup_opened');

let popupTitle = document.querySelector('#formName'); //из формы 1
let popupSubtitle = document.querySelector('#formSpecial'); //из формы 2

let profileTitle = document.querySelector('.profile__title'); //со транички 1
let profileSubtitle = document.querySelector('.profile__subtitle'); //со транички 2

let popupBottomSave = document.querySelector('.popup__button'); //Кнопка сохранить

function formSubmitHandler(evt) {
   evt.preventDefault();

   profileTitle.textContent = popupTitle.value;
   profileSubtitle.textContent = popupSubtitle.value;
   close();
}
function close() {
   popupBg.classList.remove('popup_opened');
}
function open() {
   popupTitle.value = profileTitle.textContent;
   popupSubtitle.value = profileSubtitle.textContent;
   popupBg.classList.add('popup_opened');
}

function save() {
   popupBg.classList.remove('popup_opened');
}

//popupBottomSave.addEventListener('click', save);
openPopup.addEventListener('click', open);
closePopup.addEventListener('click', close);
popupForm.addEventListener('submit', formSubmitHandler);

console.log(popupTitle.value)
console.log(popupSubtitle.value)
console.log(profileTitle.textContent)
console.log(profileSubtitle.textContent)