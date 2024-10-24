
import giovanniImage from "./giovannis.jpg";

const loadContent = () => {

    const contentDiv = document.getElementById("content");

    const heroImage = document.createElement("img");
    heroImage.classList.add("heroImage");
    heroImage.src = giovanniImage;

    const heroHeader = document.createElement("h1");
    heroHeader.classList.add("heroHeader");
    heroHeader.textContent = "Welcome to Giovanni's Deli";

    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "The one place you cannot not visit when in Cape Town";

    contentDiv.appendChild(heroImage);
    contentDiv.appendChild(heroHeader);
    contentDiv.appendChild(subtitle);
}

export { loadContent };