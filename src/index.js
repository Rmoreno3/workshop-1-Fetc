// API
const URL = 'https://platzi-avo.vercel.app/api/avo'

//Web API usando ASYNC / AWAIT
//Conectarnos al server
//Procesar la respuesta, y convertirla en JSON
//JSON -> Data -> Renderizar informacion

const fetchData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const allItems = [];

  data.data.forEach((item) => {
    //Create Title
    const title =
    document.createElement('h1');
    //Create Image
    const image =
    document.createElement('img');
    //Create Price
    const price =
    document.createElement('span');

    const container = document.createElement('div');
    container.append(title, image, price);

    allItems.push(container)

  })
  
  document.body.append(...allItems)
}

fetchData();