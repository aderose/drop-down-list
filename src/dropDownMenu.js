import menuItem from './menuItem';

export default (function dropDownMenu() {
  function create(options) {
    const container = document.createElement('ul');
    container.setAttribute('class', 'menu-container');
    options.forEach(({ text, href }) => {
      container.appendChild(menuItem.create(text, href).container);
    });
    return { container };
  }

  return { create };
})();
