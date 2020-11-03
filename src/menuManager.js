import dropDownMenu from './dropDownMenu';

export default (function menuManager() {
  function createMenu({ parentSelector, initialiserSelector, options }) {
    const parent = document.querySelector(parentSelector);
    const button = document.querySelector(initialiserSelector);
    const menu = dropDownMenu.create({ parent, options });

    // show the menu when the initialiser button is selected
    button.addEventListener('click', () => menu.show());

    // hide the menu if anything else is selected
    window.addEventListener('click', (e) => {
      if (!e.target.matches(initialiserSelector)) menu.hide();
    });

    return menu;
  }

  return { createMenu };
})();
