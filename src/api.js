export default class PixabayFetch {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    fetchPixabay() {
        console.log(this)
        const key = '19520072-2a079db9835241cceccf8dd5b';
         return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&language=en&page=${this.page}&per_page=12&key=${key}`)
            .then(r => r.json())
             .then(data => {
                 this.incrementPage();

             return data.images});
          }
    //увеличиваем страницу на 1-цу
    incrementPage() {
    this.page += 1;
    }
    //сброс страницы до 1 для нового поискового запроса
    resetPage() { this.page = 1;}
        
      // Добавим методы что бы можно было что то записать из внешнего кода  
    get query() {
        return this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    }


