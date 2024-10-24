

import giovanniImage from "./giovannis.jpg";

const loadMenuContent = () => {

    const contentDiv = document.getElementById("content");

    const heroImage = document.createElement("img");
    heroImage.classList.add("heroImage");
    heroImage.src = giovanniImage;

    const heroHeader = document.createElement("h1");
    heroHeader.classList.add("heroHeader");
    heroHeader.textContent = "Our Menu";

    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "Take a look at the most authentic Italian food you'll get outside of Italia";

    contentDiv.appendChild(heroImage);
    contentDiv.appendChild(heroHeader);
    contentDiv.appendChild(subtitle);
}

export { loadMenuContent };