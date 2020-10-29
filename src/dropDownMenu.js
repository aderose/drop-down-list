import menuItem from './menuItem';

export default (function dropDownMenu() {
  function create(options) {
    const container = document.createElement('ul');
    container.setAttribute('class', 'menu-container');
    options.forEach((option) => {
      container.appendChild(menuItem.create(option).container);
    });
    return { container };
  }

  return { create };
})();
