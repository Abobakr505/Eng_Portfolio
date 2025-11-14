/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu"),
  navToggle = document.querySelector("#nav-toggle"),
  navClose = document.querySelector("#nav-close");

/*========= MENU SHOW =========*/
//Validar se a constante existe
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*========= MENU HIDDEN =========*/
//Validar se a constante existe
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //quando clicado em cada 'nav__link', será removida a classe 'show-menu'
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowlHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowlHeader);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add("active-link");
      } else {
        sectionsClass.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
});

sr.reveal(`.home__perfil, .about__image, .contact__mail , .journey__card.right`, { origin: `right` });
sr.reveal(
  `.home__name, .home__info, 
            .about__container, .section__title-1, .about__info,
            .contact__social, .contact__data , .journey__card.left  `,
  { origin: `left` }
);
sr.reveal(`.services__card, .projects__card , .skills__item ,  .journey__line`, {
  interval: `100`,
});

function handleScrollClick(buttonId, targetId) {
  document.getElementById(buttonId).addEventListener("click", (e) => {
    e.preventDefault();

    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offset = targetSection.offsetTop - 100;

      if (typeof butter !== "undefined" && butter.scrollTo) {
        butter.scrollTo(offset);
      } else {
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    } else {
      console.error(`عنصر ${targetId} غير موجود!`);
    }
  });
}

// ربط الأزرار بالأقسام
handleScrollClick("one", "home");
handleScrollClick("two", "about");
handleScrollClick("three", "projects");
handleScrollClick("four", "contact");
handleScrollClick("ghost", "contact");
handleScrollClick("five", "home");
handleScrollClick("six", "about");
handleScrollClick("siven", "projects");
handleScrollClick("scroll-up", "home");
handleScrollClick("scroll-down", "about");

handleScrollClick("logo", "about");

// تعطيل النقر بزر الماوس الأيمن
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// تعطيل تحديد النص والسحب
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// تعطيل الاختصارات الخاصة بالنسخ (مثل Ctrl+C, Ctrl+V, Ctrl+U, ...)
// يُنصح بإضافة المزيد من الاختصارات حسب الحاجة
document.addEventListener("keydown", function (e) {
  // منع (Ctrl+C), (Ctrl+V), (Ctrl+U) و (F12)
  if (e.ctrlKey && (e.key === "c" || e.key === "v" || e.key === "u")) {
    e.preventDefault();
  }
  // منع F12 (فتح أدوات المطور)
  if (e.keyCode === 123) {
    e.preventDefault();
  }
});

let pageTitle = document.title;
window.addEventListener("blur", () => {
  document.title = " Return to Portfolio ❤️ ";
});

window.addEventListener("focus", () => {
  document.title = pageTitle;
});

function sendMail() {
  (function () {
    emailjs.init("_W26j8svP3J84k40v"); // Account Public Key
  })();

  var params = {
    sendername: document.querySelector("#sendername").value,
    replyto: document.querySelector("#replyto").value,
    message: document.querySelector("#message").value,
  };

  var serviceID = "service_jz0itsj"; // Email Service ID
  var templateID = "template_fce1byj"; // Email Template ID

  Swal.fire({
    title: "Sending...",
    text: "Please wait while your message is being sent.",
    icon: "info",
    allowOutsideClick: false,
    showConfirmButton: false,
    color: "#fff",
    background: "var(--black-color)",
    confirmButtonColor: "#fc3d03",
    didOpen: () => {
      Swal.showLoading();
    },
  });

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      Swal.fire({
        title: "Email Sent!",
        text: "Your message has been sent successfully ✅",
        icon: "success",
        confirmButtonText: "OK",
        color: "#fff",
        background: "var(--black-color)",
        confirmButtonColor: "#fc3d03",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message ❌",
        icon: "error",
        confirmButtonText: "OK",
        color: "#fff",
        background: "var(--black-color)",
        confirmButtonColor: "#fc3d03",
      });
      console.error(err);
    });
}

// طريقة بديلة لإرسال البريد الإلكتروني باستخدام Fetch API { Backend Server  GO Lang }
// document.getElementById("button").addEventListener("click", async function () {
//     const sendername = document.getElementById("sendername").value;
//     const replyto = document.getElementById("replyto").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;

//     const data = {
//       sendername,
//       replyto,
//       subject,
//       message
//     };

//     Swal.fire({
//       title: 'Sending...',
//       text: 'Please wait while your message is being sent.',
//       icon: 'info',
//       allowOutsideClick: false,
//       showConfirmButton: false,
//       color: "#fff",
//       background: "var(--black-color)",
//       confirmButtonColor: "#fc3d03",
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     try {
//       const response = await fetch("http://localhost:8080/send", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) throw new Error("Network error");

//       Swal.fire({
//         title: 'Email Sent!',
//         text: 'Your message has been sent successfully ✅',
//         icon: 'success',
//         confirmButtonText: 'OK',
//         color: "#fff",
//         background: "var(--black-color)",
//         confirmButtonColor: "#fc3d03",
//       });

//       // إعادة تعيين الحقول يدويًا
//       document.getElementById("sendername").value = "";
//       document.getElementById("replyto").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";

//     } catch (error) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Failed to send your message ❌',
//         icon: 'error',
//         confirmButtonText: 'OK',
//         color: "#fff",
//         background: "var(--black-color)",
//         confirmButtonColor: "#fc3d03",
//       });
//     }
//   });
<<<<<<< HEAD

=======
>>>>>>> e3653eb7fcfb9f8b09d111fab88d4536bb34986e
