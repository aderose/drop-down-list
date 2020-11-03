import menuItem from './menuItem';

export default (function dropDownMenu() {
  function create({ parent, options }) {
    const container = document.createElement('ul');
    container.setAttribute('class', 'menu-container');

    // create menu item and add the the menu
    options.forEach((option) => {
      container.appendChild(menuItem.create(option).container);
    });
    parent.appendChild(container);

    // animate menu open controlled by css classes
    function show() {
      if (container.classList.contains('active')) return;
      container.classList.add('visible');
      setTimeout(() => {
        container.classList.remove('visible');
        container.classList.add('active');
      }, 300);
    }

    // animate menu close using css classes
    function hide() {
      if (!container.classList.contains('active')) return;
      container.classList.add('hide');
      setTimeout(() => {
        container.classList.remove('hide');
        container.classList.remove('active');
      }, 300);
    }

    return { container, show, hide };
  }

  return { create };
})();
