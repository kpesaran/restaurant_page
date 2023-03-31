const cateringUpload = (parent: Element) => {
  const cateringContainer = document.createElement("div");
  cateringContainer.innerHTML = `<h3>Make your next event one your guests won't forget and serve Paella</h3>
    <p>Catering Menu Choices</p>`;
  parent.append(cateringContainer);
};

export default cateringUpload;
