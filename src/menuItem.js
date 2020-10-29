export default (function menuItem() {
  function create({ text, href }) {
    // create the link tag
    const link = document.createElement('a');
    link.setAttribute('href', href);
    link.setAttribute('class', 'menu-link');
    link.textContent = text;

    // create the item container and append the link
    const container = document.createElement('li');
    container.setAttribute('class', 'link-container');
    container.appendChild(link);

    return {
      container,
      link,
    };
  }

  return { create };
})();
