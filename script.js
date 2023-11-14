const cardContainer = document.querySelector(".card-container");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((newData) => {
    for (let data in newData) {
      cardContainer.insertAdjacentHTML(
        "beforeend",
        ` <div class="card shadow p-2" style="width: 18rem">
                    <img src=${newData[data].image} class="card-img-top img-fluid " alt="..." />
                    <div class="card-body">
                      <h6 class="card-title">${newData[data].title}</h6>
                      <h6 class="price ">${newData[data].price} S.R </h6>
                    <button class="btn btn-outline-black">View ></button>
                    </div>
                  </div>`
      );
    }
  });
