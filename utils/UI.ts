import smoothscroll from 'smoothscroll-polyfill';

/** Scrolls the element into view
 * Manually created since Safari does not support the smooth behaviour from scrollIntoView
 */
export const scrollElementIntoView = (element: HTMLElement, behavior: any = 'smooth') => {
  smoothscroll.polyfill();
  element.scrollIntoView({ behavior });
};

export const convertArrayToObject = (array: any, key: any) => {
  const initialValue = {};
  return array.reduce((obj: any, item: any) => {
    return {
      ...obj,
      [item[key]]: item.value,
    };
  }, initialValue);
};
