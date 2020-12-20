import './styles.css';
import cardTpL from './template/cardImage.hbs';
import PixabayFetch from './api';



const foundImage = new PixabayFetch;
console.log(foundImage);

const refs = {
    form: document.querySelector('.search-form'),
    button: document.querySelector('.load'),
    container: document.querySelector('.gallery')
}

refs.form.addEventListener('change', onSearch); // поиск по форме
refs.button.addEventListener('click', onLoad);  // кнопка добавить еще фото


function onSearch(e) {
    e.preventDefault();
   
    foundImage.query = e.currentTarget.elements.query.value;
    foundImage.resetPage()
    foundImage.fetchPixabay().then(renderImages)
}

function onLoad(e) {
    e.preventDefault();
    foundImage.fetchPixabay().then(renderImages);
}

function renderImages(hits) {
    refs.container.insertAdjacentHTML('beforeend', cardTpL(hits))
}







