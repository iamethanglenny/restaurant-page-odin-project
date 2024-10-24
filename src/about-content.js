
import giovanniImage from "./giovannis.jpg";

const loadAboutContent = () => {

    const contentDiv = document.getElementById("content");

    const heroImage = document.createElement("img");
    heroImage.classList.add("heroImage");
    heroImage.src = giovanniImage;

    const heroHeader = document.createElement("h1");
    heroHeader.classList.add("heroHeader");
    heroHeader.textContent = "Who We Are";

    const subtitle = document.createElement("p");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "Pure-bred Italians here to colonize Africa from the south";

    contentDiv.appendChild(heroImage);
    contentDiv.appendChild(heroHeader);
    contentDiv.appendChild(subtitle);
}

export { loadAboutContent };