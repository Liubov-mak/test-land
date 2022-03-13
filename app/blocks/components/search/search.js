function doSearchResult() {
    var input, filter, ul, li, a, i;
    var searchResult = document.querySelector('.search-result-header'),
        searchResultClose = document.querySelector('.search-result-close-header'),
        searchInputBtn = document.querySelector('.search-input-btn');
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.search-result__list-header');
    li = ul.querySelectorAll('li');

    if (input.value.length > 1) {
        searchResult.classList.add('active');
        searchResultClose.classList.add('active');
        searchInputBtn.classList.add('active');
    }

    searchResultClose.addEventListener('click', function () {
        input.value = '';
        searchResult.classList.remove('active');
        searchResultClose.classList.remove('active');
        searchInputBtn.classList.remove('active');
    });
    window.addEventListener('click', function () {
        input.value = '';
        searchResult.classList.remove('active');
        searchResultClose.classList.remove('active');
        searchInputBtn.classList.remove('active');
    });
}