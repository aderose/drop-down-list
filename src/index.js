import menuManager from './menuManager';

// create the categories menu
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

// create the products menu
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

// create the hamburger menu
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
