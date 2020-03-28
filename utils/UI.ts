import smoothscroll from 'smoothscroll-polyfill';

/** Scrolls the element into view
 * Manually created since Safari does not support the smooth behaviour from scrollIntoView
 */
export const scrollElementIntoView = (element: HTMLElement, behavior: any = 'smooth') => {
  smoothscroll.polyfill();
  element.scrollIntoView({ behavior });
};
