import * as _ from "lodash";
import "./style.css";
import headerUpload from "./headerUpload";
import mainPageUpload from "./mainContent";
import marketMenuPageUpload from "./marketMenu";
import contactPageUpload from "./contactContent";
import cateringUpload from "./cateringUpload";
import galleryUpload from "./galleryUpload";

headerUpload();
mainPageUpload();

function removeAllChildNodes(parent: Element) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
const content = document.querySelector("#content");

(function changeContent() {
  const homePageTab = document.querySelector("#homePage");
  const marketMenuTab = document.querySelector("#marketMenuPage");
  const contactPageTab = document.querySelector("#contactPage");
  // const galleryPageTab = document.querySelector("#galleryPage");
  // const cateringPageTab = document.querySelector("#cateringPage");

  homePageTab.addEventListener("click", () => {
    // when you click homePageTab, if alreay their do nothing, if not display it
    removeAllChildNodes(content);
    mainPageUpload();
  });
  // galleryPageTab.addEventListener("click", () => {
  //   // when you click homePageTab, if alreay their do nothing, if not display it
  //   removeAllChildNodes(content);
  //   galleryUpload(content);
  // });
  // cateringPageTab.addEventListener("click", () => {
  //   // when you click homePageTab, if alreay their do nothing, if not display it
  //   removeAllChildNodes(content);
  //   cateringUpload(content);
  // });

  marketMenuTab.addEventListener("click", () => {
    // when you click homePageTab, if alreay their do nothing, if not display it
    removeAllChildNodes(content);
    marketMenuPageUpload();
  });
  contactPageTab.addEventListener("click", () => {
    // when you click homePageTab, if alreay present do nothing, if not display it
    removeAllChildNodes(content);

    contactPageUpload();
  });
}());
/*
main page automatically uploaded

event listeners for three buttons that runs imported modules based on button

*/
