const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ZENBOOK",
    price: 700,
    colors: [
      {
        code: "black",
        img: "./img/1.png",
      },
      {
        code: "darkblue",
        img: "./img/1.png",
      },
    ],
  },
  {
    id: 2,
    title: "PRO ART",
    price: 2000,
    colors: [
      {
        code: "lightgray",
        img: "./img/2.png",
      },
      {
        code: "green",
        img: "./img/2.png",
      },
    ],
  },
  {
    id: 3,
    title: "GAMING",
    price: 1500,
    colors: [
      {
        code: "lightgray",
        img: "./img/4.png",
      },
      {
        code: "green",
        img: "./img/4.png",
      },
    ],
  },
  {
    id: 4,
    title: "WORK",
    price: 1000,
    colors: [
      {
        code: "black",
        img: "./img/5.png",
      },
      {
        code: "lightgray",
        img: "./img/5.png",
      },
    ],
  },
  {
    id: 5,
    title: "WOW THE WORLD",
    price: 700,
    colors: [
      {
        code: "gray",
        img: "./img/7.png",
      },
      {
        code: "black",
        img: "./img/7.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
