import menuManager from './menuManager';

menuManager.createMenu({
  parentSelector: '#categories',
  initialiserSelector: '#categories button',
  options: [
    { text: 'Computers', href: '#' },
    { text: 'Laptops', href: '#' },
    { text: 'Tablets', href: '#' },
    { text: 'Mobile Phones', href: '#' },
    { text: 'Software', href: '#' },
  ],
});

menuManager.createMenu({
  parentSelector: '#products',
  initialiserSelector: '#products button',
  options: [
    { text: 'SuperComputer', href: '#' },
    { text: 'PaperThin Laptop', href: '#' },
    { text: 'The Tab', href: '#' },
    { text: 'Magic Phone', href: '#' },
    { text: 'Auto-Programmer', href: '#' },
  ],
});

menuManager.createMenu({
  parentSelector: 'header nav',
  initialiserSelector: '#hamburger',
  options: [
    { text: 'Home', href: '#' },
    { text: 'Categories', href: '#' },
    { text: 'Products', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'Contact', href: '#' },
  ],
});
