// OPEN/CLOSE POPUP
let popupBg = document.querySelector('.popup'); //фон
let popupForm = document.querySelector('.popup__container'); //форма

let openPopup = document.querySelector('.profile__button');
let closePopup = document.querySelector('.popup__close');

let addOpenPopup = document.querySelector('.popup_opened');


openPopup.addEventListener('click', function () {
   popupBg.classList.add('popup_opened');
});

closePopup.addEventListener('click', function () {
   popupBg.classList.remove('popup_opened');
});

// SAVE=CLOSE POPUP
let popupBottomSave = document.querySelector('.popup__button'); //Кнопка сохранить

popupBottomSave.addEventListener('click', function () {
   popupBg.classList.remove('popup_opened');
});

// REPLESMENT FORM
function formSubmitHandler(evt) {
   evt.preventDefault();


   let popupTitle = document.querySelector('#formName').value; //из формы 1
   let popupSubtitle = document.querySelector('#formSpecial').value; //из формы 2

   let profileTitle = document.querySelector('.profile__title'); //со транички 1
   let profileSubtitle = document.querySelector('.profile__subtitle'); //со транички 2

   profileTitle.textContent = popupTitle
   profileSubtitle.textContent = popupSubtitle
}

popupForm.addEventListener('submit', formSubmitHandler);
