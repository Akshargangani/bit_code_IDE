export const toggleClass = (el,className) => {
    let elem = document.querySelector(el);
    elem.classList.toggle(className);
  };

  export const removeclass = (el,className) => {
    let elem = document.querySelector(el);
    elem.classList.remove   (className);
  };

  