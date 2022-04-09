// API
const URL = 'https://platzi-avo.vercel.app'
const app = document.querySelector('#app');

//Web API usando ASYNC / AWAIT
//Conectarnos al server
//Procesar la respuesta, y convertirla en JSON
//JSON -> Data -> Renderizar informacion

const fetchData = async () => {
  const response = await fetch(`${URL}/api/avo`);
  const data = await response.json();
  const allItems = [];

  data.data.forEach((item) => {
    //Create Image
    const image =
    document.createElement('img');
    image.src = `${URL}${item.image}`;
    //Create Title
    const title =
    document.createElement('h1');
    title.textContent = item.name;
    //Create Price
    const price =
    document.createElement('span');
    price.textContent = item.price;

    const container = document.createElement('div');
    container.append(image, title, price);

    allItems.push(container)

  })
  
  app.append(...allItems)
}

fetchData();