window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.background = "#8b1a1a"; 
    nav.style.transition = "0.3s";
  } else {
    nav.style.background = "#b22222"; 
  }
});


window.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero-img img");
  setTimeout(() => {
    heroImg.style.opacity = 1;
    heroImg.style.transform = "translateY(0)";
    heroImg.style.transition = "all 0.8s ease";
  }, 300);
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    card.style.transition = "all 0.3s ease";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
  });
});


const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#b22222";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "99";
document.body.appendChild(scrollBtn);


window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



window.addEventListener("scroll", () => {
  const titles = document.querySelectorAll(".fade-title");

  titles.forEach(title => {
    const rect = title.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (inView) {
      title.classList.add("visible"); 
    }
  });
});


window.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("typing-header");
  const text = "Halo, Saya Nazwa";
  let i = 0;
  header.textContent = ""; 
  function typing() {
    if (i < text.length) {
      header.textContent += text.charAt(i);
      i++;
      setTimeout(typing, 120); 
    }
  }
  typing();
});


  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

