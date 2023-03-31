const mainPageUpload = () => {
  const content = document.querySelector("#content");
  const image = document.createElement("img");
  const text = document.createElement("p");
  text.textContent = "Come visit us on Saturday's at Boulder's Farmer Market from 8AM to 2PM & Wednesday's from 4PM to 8PM. We are located in the food next to the Dushanbe Tea House.";
  image.classList.add("main");
  image.src = "/Users/keyan/Desktop/coding/the_odin_project/repos/restaurant_page/img/paella.jpeg";
  image.alt = "picture of paella";
  image.classList.add("paellaPic");
  text.classList.add("text");
  content.append(image);
  content.append(text);
};

export default mainPageUpload;
