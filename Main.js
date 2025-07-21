//  Icon Click Option
document.querySelector(".toggle .pull").onclick = function () {
  this.classList.toggle("fa-spin");
  document.querySelector(".setting-box").classList.toggle("open");
};
//
//
//
//
//
//
// Color Settings Option
// Select All Lis Item
let Lis = document.querySelectorAll(".box li");

let RunChangeBackGround = true;

let ControlBackGround;

// Loop On All Lis Items
//  When Click On lis Add Color For Main Color

let MainColor = localStorage.getItem("Option");

Lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("Option", e.target.dataset.color);
  });
});
//
//

//
//
//
//Condation If The LocalStorage To Remove && Add Class Active
if (MainColor !== null) {
  document.documentElement.style.setProperty("--main-color", MainColor);
  document.querySelectorAll(".box li").forEach((b) => {
    b.classList.remove("active");
    if (b.dataset.color === MainColor) {
      b.classList.add("active");
    }
  });
}
//
//

//
//
// Remove && Add Class Active For Lis
Lis.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleActiveClass(e);
  });
});
// Remove && Add Class Active For Span

let span = document.querySelectorAll(".box span");

span.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    handleActiveClass(e);

    if (e.target.dataset.background === "yes") {
      RunChangeBackGround = true;
      randomizeImgs();
      localStorage.setItem("ValueBack", true);
    } else {
      RunChangeBackGround = false;
      clearInterval(ControlBackGround);
      localStorage.setItem("ValueBack", false);
    }
  });
});
function handleActiveClass(ev) {
  // 1. نشيل الكلاس active من كل الأزرار
  ev.target.parentElement
    .querySelectorAll(".active")
    .forEach((b) => b.classList.remove("active"));

  // 2. نضيف active للزر اللي اتضغط عليه
  ev.target.classList.add("active");
}
let backgrolocal = localStorage.getItem("ValueBack");
if (backgrolocal !== null) {
  if (backgrolocal == "true") {
    RunChangeBackGround = true;
  } else {
    RunChangeBackGround = false;
  }
  document.querySelectorAll(".box span").forEach((ele) => {
    ele.classList.remove("active");
  });
  if (backgrolocal == "true") {
    document.querySelector(".box .yes").classList.add("active");
  } else {
    document.querySelector(".box .no").classList.add("active");
  }
}

// End Color Settings Option
//
///
//

// /
// /
// /
// /

// Landing page Option Background
let land = document.querySelector(".landing-page");
let Arr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randomizeImgs() {
  if (RunChangeBackGround === true) {
    ControlBackGround = setInterval(() => {
      // GET Random Number
      let RandomNumber = Math.floor(Math.random() * Arr.length);
      // Change Background Image Url
      land.style.backgroundImage = `url("../Imgs/${Arr[RandomNumber]}")`;
    }, 3000);
  }
}

randomizeImgs();

//  End Landing page Option Background

// Start Skills

let Skill = document.querySelector(".skills");

window.onscroll = function () {
  let SizeOfEleMenA3lLeMakano = Skill.offsetTop;

  let sizeOfHeightOfElement = Skill.offsetHeight;

  let UserShayef2dEhMenElPage = window.innerHeight;
  let HowManyPixelUserGoDown = window.pageYOffset;

  if (
    HowManyPixelUserGoDown >
    SizeOfEleMenA3lLeMakano + sizeOfHeightOfElement - UserShayef2dEhMenElPage
  ) {
    document.querySelectorAll(".skills .skill-progress span").forEach((ele) => {
      ele.style.width = ele.dataset.progress;
    });
  } else {
    document.querySelectorAll(".skills .skill-progress span").forEach((ele) => {
      ele.style.width = 0;
    });
  }
};

// End Skills

// Create Popup With The Image

let ourGallery_image = document.querySelectorAll(".our-gallery .box-image img");

ourGallery_image.forEach((ele) => {
  ele.addEventListener("click", () => {
    // Create Overlay
    let Overlay_Image = document.createElement("div");
    // Add Class To Overlay
    Overlay_Image.className = "overley-img";

    // Append Ovelay To Body
    document.body.appendChild(Overlay_Image);

    // Create Popup-box
    let pop_box = document.createElement("div");
    // add Class Name To Popup-box
    pop_box.className = "popup-box";
    // Append Popup To Body
    document.body.appendChild(pop_box);

    // if Image Contain Altrante Text Do This
    if (ele.alt !== null) {
      // Creat Heading To Image
      let h2img = document.createElement("h2");

      // Create Text To Heading
      let texth2 = document.createTextNode(ele.alt);
      // append Text To Heading
      h2img.appendChild(texth2);
      // Append heading To Popup-box
      pop_box.appendChild(h2img);
    }

    // Create Img && Append To pop-box
    let Images = document.createElement("img");

    // Add Src old Image To New Image
    Images.src = ele.src;
    // Append Image To popup-box
    pop_box.appendChild(Images);

    // Create Colse Butn

    let ColseBut = document.createElement("span");

    // Add Class To Span
    ColseBut.className = "colse-but";

    // Create Text To Span
    let textsp = document.createTextNode("X");

    // Append text To Span
    ColseBut.appendChild(textsp);
    // Append Close But To pop-box
    pop_box.appendChild(ColseBut);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.className == "colse-but") {
    document.querySelector(".overley-img").remove();
    document.querySelector(".popup-box").remove();
  }
});
///

//Select Bults
let Bults = document.querySelectorAll(".bulttes .bull");

//Select Links
let Links = document.querySelectorAll(".links li a");

function gotolaceClicked(ele) {
  ele.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

gotolaceClicked(Bults);
gotolaceClicked(Links);
///

// Show && hidden Bults

let bultspan = document.querySelectorAll(".option-bulltes span");

let bults = document.querySelector(".bulttes ");

let bultsLocal = localStorage.getItem("option-bults");

if (bultsLocal !== "null") {
  bultspan.forEach((span) => {
    span.classList.remove("active");
  });
  if (bultsLocal === "block") {
    bults.style.display = "block";
    document.querySelector(".option-bulltes .yes").classList.add("active");
  } else {
    bults.style.display = "none";
    document.querySelector(".option-bulltes .no").classList.add("active");
  }
}

bultspan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (span.dataset.display === "show") {
      bults.style.display = "block";
      localStorage.setItem("option-bults", "block");
    } else {
      bults.style.display = "none";
      localStorage.setItem("option-bults", "none");
    }
    handleActiveClass(e);
  });
});

////but Reset All Value
document.querySelector(".reset").onclick = function () {
  localStorage.clear();
  window.location.reload();
};

// Select Eht Buton  Tooglemenu

let butoogle = document.querySelector(".toggle-menu");
let Linkstoogle = document.querySelector(".landing-page .header-area .links");

let sptoogle = document.querySelectorAll(".toggle-menu span");

butoogle.onclick = function (e) {
  e.stopPropagation();
  Linkstoogle.classList.toggle("opens");
  butoogle.classList.toggle("menu-active");
};

document.addEventListener("click", (e) => {
  if (e.target !== butoogle && e.target !== Linkstoogle) {
    if (Linkstoogle.classList.contains("opens")) {
      Linkstoogle.classList.toggle("opens");

      butoogle.classList.toggle("menu-active");
    }
  }
});

Linkstoogle.onclick = function (e) {
  e.stopPropagation();
};
