document.querySelector(".burger").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden");
});

const currentUrl = window.location.href;
console.log(currentUrl);

// const fetchLayout = async () => {
//   const sidebar = await fetch("../sidebar.html");
//   const sidebarHTML = await sidebar.text();
//   document.querySelector(".sidebar").outerHTML = sidebarHTML;
//   const header = await fetch("../header.html");
//   const headerHTML = await header.text();
//   document.querySelector(".header").outerHTML = headerHTML;
//   document.querySelector(".burger").addEventListener("click", () => {
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.classList.toggle("hidden");
//   });
// };

// fetchLayout();
