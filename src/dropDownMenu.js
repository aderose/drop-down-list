import menuItem from './menuItem';

export default (function dropDownMenu() {
  function create({ parent, options }) {
    const container = document.createElement('ul');
    container.setAttribute('class', 'menu-container');
    options.forEach((option) => {
      container.appendChild(menuItem.create(option).container);
    });
    parent.appendChild(container);

    function show() {
      if (container.classList.contains('active')) return;
      container.classList.add('visible');
      setTimeout(() => {
        container.classList.remove('visible');
        container.classList.add('active');
      }, 300);
    }

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
