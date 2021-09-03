const photoGrids = document.querySelectorAll('.photo-grid');
const photoGridItems = document.querySelectorAll('.photo-grid__item');

const popups = document.querySelectorAll('.popup');
const popupWindowImage = document.querySelector('.popup_window_image');
const popupImage = popupWindowImage.querySelector('.popup__image');

const observerOptions = {
  threshold: 0,
  rootMargin: "0px 0px -25% 0px"
};

const observer = new IntersectionObserver(enteries => {
  enteries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('scroll');
      return;
    }
    else {
      entry.target.classList.remove('scroll');
    }
  })
}, observerOptions);

function imagePopUp(photo) {
  popupImage.src = photo.target.src;
  openPopUp(popupWindowImage);
}

function openPopUp(popup) {
  popup.classList.add('popup_open');
}

function closePopUp(popup) {
  popup.classList.remove('popup_open');
}

photoGridItems.forEach(item => {
  observer.observe(item);
})

photoGrids.forEach(photo => {
  photo.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('photo-grid__image')) {
      imagePopUp(evt);
    }
  })
})
popups.forEach(popup => {
  popup.addEventListener('click', function(evt) {
    if(evt.target.classList.contains('popup__close')){
      closePopUp(popup);
    }
    else if(evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__container')) {
      closePopUp(popup);
    }
  })
})