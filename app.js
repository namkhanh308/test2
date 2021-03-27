let c = [
  {
    id: "body1",
    ten: "Anh 1",
    idanh: "anh1",
    anh:
      "https://lh3.googleusercontent.com/proxy/PFVh4f0vqpDeIJp3mHrtZtF5k07mhiq2MzGoaD41fuls8uL9yx3a8JPtIRTMiMJ3_SbwMRkFUP6MAkzPy4DXLruwUZTOHQRgZ8srHoXyVmISw7NQtWK0X2g69Jc",
    idchuthich: "chuthich1",
    chuthich:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed maxime ut eveniet dolorem minima, qui aut autem ad earum minus repellendus laudantium quasi. Officia error eveniet perferendis itaque accusamus.",
  },
  {
    id: "body2",
    ten: "Anh 2",
    idanh: "anh2",
    anh:
      "https://lh3.googleusercontent.com/proxy/QACeNjYocG6pViaXCT-YzKV53rltJ8qOra4fCCAk_ZIvNT18kGmPAXqv6f9wpaZ6_BLCCt-NnAipglsj6SibLXZwRX8eXu8yYqhs39zRmrQa7lDjN_kWXEB15zgQVfl7I9bN0Ri-Ab_0JYDlsqrIHiqE",
    idchuthich: "chuthich2",
    chuthich:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed maxime ut eveniet dolorem minima, qui aut autem ad earum minus repellendus laudantium quasi. Officia error eveniet perferendis itaque accusamus.",
  },
  {
    id: "body3",
    ten: "Anh 3",
    idanh: "anh3",
    anh:
      "https://lh3.googleusercontent.com/proxy/4myTIzaKsg0o8AgjLMk3XycZlqXrvFbsgFcj8QvxOJm_HTwg0YIMEOHw9aewG75EEx4UE6lD4EsLcZJLGs_zZiWQPbi3aze9rNnBx4MBIzYpx0MG6ZPfSX7XYbuGzg",
    idchuthich: "chuthich3",
    chuthich:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed maxime ut eveniet dolorem minima, qui aut autem ad earum minus repellendus laudantium quasi. Officia error eveniet perferendis itaque accusamus.",
  },
  {
    id: "body3",
    ten: "Anh 3",
    idanh: "anh3",
    anh:
      "https://lh3.googleusercontent.com/proxy/4myTIzaKsg0o8AgjLMk3XycZlqXrvFbsgFcj8QvxOJm_HTwg0YIMEOHw9aewG75EEx4UE6lD4EsLcZJLGs_zZiWQPbi3aze9rNnBx4MBIzYpx0MG6ZPfSX7XYbuGzg",
    idchuthich: "chuthich3",
    chuthich:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed maxime ut eveniet dolorem minima, qui aut autem ad earum minus repellendus laudantium quasi. Officia error eveniet perferendis itaque accusamus.",
  },
  {
    id: "body3",
    ten: "Anh 3",
    idanh: "anh3",
    anh:
      "https://lh3.googleusercontent.com/proxy/4myTIzaKsg0o8AgjLMk3XycZlqXrvFbsgFcj8QvxOJm_HTwg0YIMEOHw9aewG75EEx4UE6lD4EsLcZJLGs_zZiWQPbi3aze9rNnBx4MBIzYpx0MG6ZPfSX7XYbuGzg",
    idchuthich: "chuthich3",
    chuthich:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sed maxime ut eveniet dolorem minima, qui aut autem ad earum minus repellendus laudantium quasi. Officia error eveniet perferendis itaque accusamus.",
  },
];
html = ``;
for (let i = 0; i < c.length; i++) {
  html =
    html +
    `<a href="#" id="${c[i].id}">
    <p class="chu">${c[i].ten}</p>
    <div id=${c[i].idanh}>
        <img src=${c[i].anh} alt="">
    </div>
    <p class= "bold" id= ${c[i].idchuthich}>
    ${c[i].chuthich}
    </p>
</a>`;
}
let muaxuan = document.getElementById("muaxuan");
muaxuan.innerHTML = html;

let anh1 = document.getElementById("anh1");
let chuthich1 = document.getElementById("chuthich1");

anh1.addEventListener("click", function () {
  chuthich1.style.display = "block";
});
