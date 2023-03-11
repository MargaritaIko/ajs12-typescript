import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('to check that new product is added into cart', () => {  
  const cart = new Cart();
  const book: Buyable = {
    id: 84,
    name: "Dog trainings",
    price: 850,
  };
  cart.add(book);
  const result: Buyable[] = [
    {
      id: 84,
      name: "Dog trainings",
      price: 850,
    },
  ];
  expect(cart.items).toEqual(result);
});

test('to check that method sum() reverts the total price', () => {
  const cart = new Cart();
  const book: Buyable = {
    id: 84,
    name: "Dog trainings",
    price: 850,
  };
  cart.add(book);
  const book2: Buyable = {
    id: 71,
    name: "Dog meals",
    price: 650,
  };
  const book3: Buyable = {
    id: 31,
    name: "guide-dog",
    price: 800,
  };
  cart.add(book2);
  cart.add(book3);
  expect(cart.sum()).toBe(2300);
});

test('to check that sum discount is applied via method totalSum()', () => {
  const cart = new Cart();
  const book: Buyable = {
    id: 84,
    name: "Dog trainings",
    price: 850,
  };
  cart.add(book);
  const book2: Buyable = {
    id: 71,
    name: "Dog meals",
    price: 650,
  };
  const book3: Buyable = {
    id: 31,
    name: "guide-dog",
    price: 800,
  };
  cart.add(book2);
  cart.add(book3);
  expect(cart.totalSum(10)).toBe(2070);
});

test('to check that method removeItem() deletes the product by id', () => {
  const cart = new Cart();
  const book: Buyable = {
    id: 84,
    name: "Dog trainings",
    price: 850,
  };
  cart.add(book);
  const book2: Buyable = {
    id: 71,
    name: "Dog meals",
    price: 650,
  };
  const book3: Buyable = {
    id: 31,
    name: "guide-dog",
    price: 800,
  };
  cart.add(book2);
  cart.add(book3);
  cart.removeItem(31);
  const result2: Buyable[] = [
    {
      id: 84,
      name: "Dog trainings",
      price: 850,
    },
    {
      id: 71,
      name: "Dog meals",
      price: 650,
    },
  ];    
  expect(cart.items).toEqual(result2);
});