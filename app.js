
const apiKey = 'a6979fffd9374c7c808b9c4fec33e741';
// const keyword = document.querySelectorAll("nav ul li a");
const main = document.querySelector('main');
const keyword = 'top-headlines';

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('sw.js');
// }

// document.querySelector('#show').addEventListener('click', () => {
//   const iconUrl = document.querySelector('select').selectedOptions[0].value;
//   let imgElement = document.createElement('img');
//   imgElement.src = iconUrl;
//   document.querySelector('#container').appendChild(imgElement);
// });


window.addEventListener('load', e => {
    updateNews();
});

async function updateNews(){
  const response = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&sortBy=top&apiKey=${apiKey}`);
  const json = await response.json();

  main.innerHTML = json.articles.map(createArticle).join('\n');
}

function createArticle(article){
  return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
  `;
}
