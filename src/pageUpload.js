var pageUpload = function () {
    var addContent = document.querySelector('#content');
    var heading = document.createElement('h1');
    heading.textContent = 'Paella Catering Business';
    var topBanner = document.createElement('div');
    topBanner.innerHTML = "<ul>\n                                <li>Home</li>\n                                <li>Offerings</li>\n                                <li>Contact</li>\n                            </ul>";
    addContent.append(topBanner);
    addContent.append(heading);
    console.log('hi');
    console.log(addContent);
};
export default pageUpload;
//# sourceMappingURL=pageUpload.js.map