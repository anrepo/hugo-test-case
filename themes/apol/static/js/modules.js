import { anchorSlider } from "./modules/goto-anchor.js";
import { navMenu } from "./modules/menu-activity.js";

/**
 * Определение глобальных переменных для внешнего использования
 */
anchorLinks = anchorSlider;
navLinks = navMenu;

/**
 * Инициализация плавной прокрутки по якорным ссылкам
 */
anchorLinks.init();

/**
 * Инициализация навигационных ссылок
 */
navLinks.init();
