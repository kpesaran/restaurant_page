const galleryUpload = (parent: Element) => {
  
  const galleryContainer = document.createElement("div");
  galleryContainer.innerHTML = "<p>This will be where pictures of farmers market stand, nicely garnished paella, drinks, and catering set ups</p>";
  parent.append(galleryContainer);
};

export default galleryUpload;
