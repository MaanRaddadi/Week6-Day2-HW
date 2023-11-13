const cardContainer = document.querySelector(".card-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((newData) => {
    for (let data in newData) {
      cardContainer.insertAdjacentHTML(
        "beforeend",
        ` <div class="card shadow" style="width: 18rem">
                    <img src=${newData[data].image} class="card-img-top " alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">${newData[data].title}</h5>
                      <h6 class="price ">${newData[data].price} S.R </h6>
                    </div>
                  </div>`
      );
    }
  });
