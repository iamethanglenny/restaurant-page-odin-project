import { loadContent } from './loadContent.js';
import { loadMenuContent } from './menu-content.js';
import { loadAboutContent } from './about-content.js';
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});

const contentDiv = document.getElementById("content");

function clearContent() {
    contentDiv.innerHTML = "";
}

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
    clearContent();
    loadContent();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenuContent();
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    loadAboutContent();
});