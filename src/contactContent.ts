const contactPageUpload = () => {
  const content = document.querySelector("#content");
  const contentContainer = document.createElement("div");

  contentContainer.classList.add("contact-center");
  contentContainer.innerHTML = `
  <div id = 'contact-container'>
  <p>Email: boulderpaella@gmail.com</p>
  <p>Phone Number: 720/527/0512 </p>
  <p>Mailing Address: 2214 Holyoke Dr, Boulder, CO 80305</p>
  </div>`;

  content.append(contentContainer);
};

export default contactPageUpload;
