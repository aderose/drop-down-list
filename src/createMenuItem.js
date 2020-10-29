export default function createMenuItem(text, href) {
  // create the link tag
  const link = document.createElement('a');
  link.setAttribute('href', this.href);
  link.setAttribute('class', 'menu-link');
  link.textContent = this.text;

  // create the item container and append the link
  const container = document.createElement('li');
  container.setAttribute('class', 'link-container');
  container.appendChild(link);

  return {
    text,
    href,
    container,
    link,
  };
}
