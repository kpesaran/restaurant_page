/*
Change to nav-bar
three different modules for each page. can navigate to each from nav-bar which is constant

nav-bar module for one nav bar
index.ts 2 sections nav bar, and then reload part of page

https://ginnerzapata.github.io/restaurant/

*/

const headerUpload = () => {
  const contentHeader = document.querySelector("#contentHeader");

  const logo = document.createElement("img");
  logo.src = "/img/logo.png";
  logo.classList.add("logo");
  contentHeader.append(logo);

  const navBar = document.createElement("div");
  navBar.innerHTML = `<ul>
                                <li id = "homePage" class = "page">Home</li>
                                <li id = "marketMenuPage" class = "page hidden" >Farmer's Market Menu</li>
                                <li id = "contactPage" class = "page hidden">Contact</li>
                            </ul>`;
  contentHeader.append(navBar);
};

export default headerUpload;
