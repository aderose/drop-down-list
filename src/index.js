import dropDownMenu from './dropDownMenu';

const myMenu = dropDownMenu.create([
  { text: 'Computers', href: '#' },
  { text: 'Laptops', href: '#' },
  { text: 'Tablets', href: '#' },
  { text: 'Mobile Phones', href: '#' },
  { text: 'Software', href: '#' },
]);

document.body.appendChild(myMenu.container);

console.log('hello world');
