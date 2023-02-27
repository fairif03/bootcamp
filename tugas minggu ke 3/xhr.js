// function reqListener() {
//   console.log(this.responseText);
// }

// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", "https://dummyjson.com/products/1");
// req.send();

//cbhell
// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     first.style.color = "red";
//     setTimeout(() => {
//       second.style.color = "blue";
//       setTimeout(() => {
//         third.style.color = "green";
//       }, 4000);
//     }, 4000);
//   }, 4000);
// });

// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     (first.style.color = "red"), 4000;
//   });
//   setTimeout(() => {
//     (first.style.color = "red"), 4000;
//   });
//   setTimeout(() => {
//     (first.style.color = "red"), 4000;
//   });
// });

// btn.addEventListener("click", () => {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve((first.style.color = "red"));
//     }, 4000);
//     setTimeout(() => {
//       resolve((second.style.color = "blue"));
//     }, 4000);
//     setTimeout(() => {
//       resolve((third.style.color = "green"));
//     }, 4000);
//   });
// });

// const data = fetch("https://dummyjson.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
// console.log(data);

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "green";
      }, 4000);
    }, 4000);
  }, 4000);
});

btn.addEventListener("click", () => {
  setTimeout(() => {
    (first.style.color = "red"), 4000;
  });
  setTimeout(() => {
    (first.style.color = "red"), 4000;
  });
  setTimeout(() => {
    (first.style.color = "red"), 4000;
  });
});

btn.addEventListener("click", () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve((first.style.color = "red"));
    }, 4000);
    setTimeout(() => {
      resolve((second.style.color = "blue"));
    }, 4000);
    setTimeout(() => {
      resolve((third.style.color = "green"));
    }, 4000);
  });
});
