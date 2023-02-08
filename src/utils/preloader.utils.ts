import { Layout } from "types/layout.types";

interface Image {
  src: string;
  size: string;
}
const arrayImage: Image[] = [
  { src: "../assets/img/404.jpg", size: "215 kB" },
  { src: "../assets/img/team/ilya.jpeg", size: "18.6 kB" },
  { src: "../assets/img/team/kostya.png", size: "317 kB" },
  { src: "../assets/img/team/nataliya.jpeg", size: "39.1 kB" },
  { src: "../assets/svg/color-scheme/dark.svg", size: "0.172 kB" },
  { src: "../assets/svg/color-scheme/light.svg", size: "0.620 kB" },
  // { src: "../assets/svg/github/gh.svg", size: "2.15 kB" },
  // { src: "../assets/svg/github/github-face.svg", size: "1.65 kB" },
  { src: "../assets/svg/github/github.svg", size: "2.16 kB" },
  { src: "../assets/svg/logo/logo.svg", size: "13.7 kB" },
  { src: "../assets/svg/promo/promo.svg", size: "26.8 kB" },
  { src: "../assets/svg/promo/promo2.svg", size: "14.3 kB" },
  { src: "../assets/svg/promo/promo3.svg", size: "12.1 kB" },
  { src: "../assets/svg/promo/promo4.svg", size: "10.8 kB" },
  { src: "../assets/svg/promo/promo5.svg", size: "17.9 kB" },
  // { src: "../assets/svg/promo/promo6.svg", size: "17.9 kB" },
  { src: "../assets/svg/rs/logo_rs.svg", size: "14.9 kB" },
  { src: "../assets/svg/trainings/training1.svg", size: "23.5 kB" },
  { src: "../assets/svg/trainings/training2.svg", size: "20.5 kB" },
  { src: "../assets/svg/trainings/training3.svg", size: "22.3 kB" },
  { src: "../assets/svg/trainings/training4.svg", size: "14.9 kB" },
  { src: "../assets/svg/trainings/training5.svg", size: "16.8 kB" },
  { src: "../assets/svg/trainings/training6.svg", size: "17.4 kB" }
];

class Preloader {
  layout = {} as Layout;

  init(root: HTMLElement) {
    this.render(root);
    this.loadPreloader();
    this.renderImgContainer();
  }

  render(root: HTMLElement) {
    this.layout.preloader = document.createElement("div");
    this.layout.preloader.id = "preloader";
    this.layout.preloader.classList.add("preloader");

    this.layout.loader = document.createElement("div");
    this.layout.loader.classList.add("preloader__loader");

    this.layout.preloaderPercents = document.createElement("span");
    this.layout.preloaderPercents.classList.add("preloader__percents");

    this.layout.percentsNumber = document.createElement("span");
    this.layout.percentsNumber.classList.add("percents__number");
    this.layout.percentsNumber.textContent = "0";

    this.layout.percents = document.createElement("span");
    this.layout.percents.textContent = "%";

    this.layout.preloaderPercents.append(
      this.layout.percentsNumber,
      this.layout.percents
    );
    this.layout.preloader.append(
      this.layout.loader,
      this.layout.preloaderPercents
    );
    root.append(this.layout.preloader);
  }

  renderImgContainer() {
    this.layout.imgContainer = document.createElement("div");
    this.layout.imgContainer.classList.add("img__container");

    arrayImage.forEach((value) => {
      const img = document.createElement("img");
      img.classList.add("img");
      img.src = value.src;

      this.layout.imgContainer.append(img);
    });
    document.body.append(this.layout.imgContainer);
  }

  loadPreloader() {
    document.body.classList.add("non-scroll");

    document.addEventListener("DOMContentLoaded", () => {
      let totalSize = 0;
      let percent = 0;
      const percentAll: number[] = [];
      let loaded = 0;

      arrayImage.forEach((value) => {
        totalSize += parseFloat(value.size);
      });

      arrayImage.forEach((value) => {
        percent = (parseFloat(value.size) * 100) / totalSize;
        percentAll.push(percent);
      });

      const imageFiles = document.querySelectorAll(".img");

      imageFiles.forEach((file, index) => {
        file.addEventListener("load", () => {
          loaded += +percentAll[index];

          this.layout.percentsNumber.innerHTML = loaded.toFixed(0);

          if (loaded >= 100) {
            const preloader = document.getElementById("preloader");
            if (!preloader) {
              return console.log("error");
            }

            preloader.classList.add("hide-preloader");
            this.layout.percentsNumber.innerHTML = "100";
            setInterval(function () {
              preloader.classList.add("preloader-hidden");
            }, 990);

            document.body.classList.remove("non-scroll");
          }
        });
      });
    });
  }
}

// ВТОРОЙ СПОСОБ

// const sources: string[] = [
//   "../assets/img/404.jpg",
//   "../assets/img/team/ilya.jpeg",
//   "../assets/img/team/kostya.png",
//   "../assets/img/team/nataliya.jpeg",
//   "../assets/svg/color-scheme/dark.svg",
//   "../assets/svg/color-scheme/light.svg",
//   "../assets/svg/github/gh.svg",
// // "../assets/svg/github/github-face.svg",
// // "../assets/svg/github/github.svg",
//   "../assets/svg/logo/logo.svg",
//   "../assets/svg/promo/promo.svg",
//   "../assets/svg/promo/promo2.svg",
//   "../assets/svg/promo/promo3.svg",
//   "../assets/svg/promo/promo4.svg",
//   "../assets/svg/promo/promo5.svg",
// //   "../assets/svg/promo/promo6.svg",
//   "../assets/svg/rs/logo_rs.svg",
//   "../assets/svg/trainings/training1.svg",
//   "../assets/svg/trainings/training2.svg",
//   "../assets/svg/trainings/training3.svg",
//   "../assets/svg/trainings/training4.svg",
//   "../assets/svg/trainings/training5.svg",
//   "../assets/svg/trainings/training6.svg"
// ];

// class Preloader {
//   layout = {} as Layout;

//   init(root: HTMLElement) {
//     this.render(root);
//     this.renderImgContainer();
//     this.preloadImages(sources);
//     this.loadPreloader();
//   }

//   render(root: HTMLElement) {
//     this.layout.preloader = document.createElement("div");
//     this.layout.preloader.id = "preloader";
//     this.layout.preloader.classList.add("preloader");

//     this.layout.loader = document.createElement("div");
//     this.layout.loader.classList.add("preloader__loader");

//     this.layout.preloaderPercents = document.createElement("span");
//     this.layout.preloaderPercents.classList.add("preloader__percents");

//     this.layout.percentsNumber = document.createElement("span");
//     this.layout.percentsNumber.classList.add("percents__number");
//     this.layout.percentsNumber.textContent = "0";

//     this.layout.percents = document.createElement("span");
//     this.layout.percents.textContent = "%";

//     this.layout.preloaderPercents.append(
//       this.layout.percentsNumber,
//       this.layout.percents
//     );
//     this.layout.preloader.append(
//       this.layout.loader,
//       this.layout.preloaderPercents
//     );
//     root.append(this.layout.preloader);
//   }

//   renderImgContainer() {
//     this.layout.imgContainer = document.createElement("div");
//     this.layout.imgContainer.classList.add("img__container");

//     sources.forEach((value) => {
//       const img = document.createElement("img");
//       img.classList.add("img");
//       img.src = value;

//       this.layout.imgContainer.append(img);
//     });
//     document.body.append(this.layout.imgContainer);
//   }

//   preloadImages(so: string[]) {
//     for (const source of so) {
//       const img = document.createElement("img");
//       img.onload = img.onerror;
//       img.src = source;
//     }
//   }

//   loadPreloader() {
//     document.body.classList.add("non-scroll");

//     document.addEventListener("DOMContentLoaded", () => {
//       const imageFiles = document.querySelectorAll(".img");
//       let i = 0;
//       console.log(imageFiles);

//       Array.from(imageFiles).forEach((file) => {
//         file.addEventListener("load", () => {
//           i++;

//           const preloader = document.getElementById("preloader");
//           const percentsNumber = document.querySelector(".percents__number");
//           if (!preloader || !percentsNumber) {
//             return console.log("error");
//           }

//           percentsNumber.innerHTML = ((i * 100) / imageFiles.length).toFixed(0);

//           if (i === imageFiles.length) {
//             preloader.classList.add("hide-preloader");
//             percentsNumber.innerHTML = "100";
//           }

//           setInterval(function () {
//             preloader.classList.add("preloader-hidden");
//           }, 990);

//           document.body.classList.remove("non-scroll");
//         });
//       });
//     });
//   }
// }

export default new Preloader();
