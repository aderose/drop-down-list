import dropDownMenu from './dropDownMenu';

export default (function menuManager() {
  function createMenu({ parentSelector, initialiserSelector, options }) {
    const parent = document.querySelector(parentSelector);
    const menu = dropDownMenu.create({ parent, options });

    parent.addEventListener('click', () => menu.show());

    window.addEventListener('click', (e) => {
      if (!e.target.matches(initialiserSelector)) menu.hide();
    });

    return menu;
  }

  return { createMenu };
})();
