import { actualYear } from "./modules/actual-year.js";
import { anchorSlider } from "./modules/goto-anchor.js";
import { navMenu } from "./modules/menu-activity.js";

/**
 * Определение глобальных переменных для внешнего использования
 */
currentYear = actualYear;
anchorLinks = anchorSlider;
navLinks    = navMenu;

/**
 * Актуализация года копирайта
 */
currentYear.init();

/**
 * Инициализация плавной прокрутки по якорным ссылкам
 */
anchorLinks.init();

/**
 * Инициализация навигационных ссылок
 */
navLinks.init();
