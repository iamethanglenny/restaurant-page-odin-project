import { loadContent } from './loadContent.js';
import { loadMenuContent } from './menu-content.js';
import { loadAboutContent } from './about-content.js';
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    loadContent();
});


const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
    loadContent();
});

menuBtn.addEventListener("click", () => {
    loadMenuContent();
});

aboutBtn.addEventListener("click", () => {
    loadAboutContent();
});