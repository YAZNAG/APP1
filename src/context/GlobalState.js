import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

// creating `context`
const StateContext = React.createContext();

function StateProvider({ children }) {
  // defining `state` for our product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MAC BOOK 2020",
      price: 990.99,
      image: "./images/mac.png",
      description: "MAC BOOC PRO 2020 I7 16 GB RAM 1TB SSD",
    },
    {
      id: 2,
      name: "DELL ",
      price: 500.99,
      image: "./images/dell1.png",
      description: "DELL I5 10 EME GENERATION 16 GB RAM 528SSD",
    },
    {
        id: 3,
        name: "HP ",
        price: 340.99,
        image: "/images/HP.png",
        description: "HP EliteBook 745 G6 14'' AMD Ryzen 7 Pro 16GB 256GB SSD",
      },
      {
        id: 4,
        name: "VIVO ",
        price: 700.99,
        image: "/images/vivo1.png",
        description: "Asus Vivobook 17X 17.3 Full HD Intel i5-12500H 8GB 512GB SSD Win11 K1703ZA-SB54 ",
      },
      {
        id: 5,
        name: "LENOVO ",
        price: 500.99,
        image: "/images/lenovo1.png",
        description: "LENOVO I7 8EME GENERATION 8GB RAM 256SSD",
      },

      {
        id: 6,
        name: "ASUS ",
        price: 800.99,
        image: "/images/lon.png",
        description: "ASUS 15.6FHD ROG Strix G15 AMD Ryzen 7 4800H 16GB RAM 512GB PCIe SSD RTX 3060",
      },
      {
        id: 7,
        name: "ASUS ",
        price: 240.99,
        image: "/images/as3.png",
        description: "Laptop Asus Vivobook 15 15.6 Intel i3-1220P 4GB 256GB SSD Win 11",
      },
      {
        id: 8,
        name: "LENOVO X1 ",
        price: 300.99,
        image: "/images/X1.png",
        description: "Description du produit 2",
      },
      {
        id: 9,
        name: "DELL ",
        price: 500.99,
        image: "/images/dell.png",
        description: "Description du produit 2",
      },
      {
        id: 10,
        name: "MACBOOK AIR 13 ",
        price: 140.99,
        image: "/images/mac1.png",
        description: "Apple MacBook Air 13 A1369 2013 | 1.8GHz Intel Core i7 | 4GB RAM | 256GB SSD",
      },
      {
        id: 11,
        name: "DELL  ",
        price: 267.99,
        image: "/images/DELL2.png",
        description: "Dell laptop Latitude 7480 14FHD i7 2.60GHz 16GB NEW 512GB SSD Win 11 Pro WIFI Cam",
      },
      {
        id: 12,
        name: "LENOVO THINKBOOK",
        price: 920.99,
        image: "/images/asus2.png",
        description: "Lenovo ThinkBook Plus G3 17.3 Laptop - i7-12700H, 16GB Ram, 512GB SSD, W11H",
      },
      {
        id: 13,
        name: "DELL ",
        price: 500.99,
        image: "/images/dell.png",
        description: "Description du produit 2",
      },
      {
        id: 2,
        name: "DELL ",
        price: 500.99,
        image: "/images/dell.png",
        description: "Description du produit 2",
      },
      
  ]);

  // defining `state` for our cart data
  const [cartItems, setCartItems] = useState([]);
  // defining `state` for calculating the total amount
  const [total, setTotal] = useState(0);
  // defining `state` for counting total items in cart
  const [totalItems, setTotalItems] = useState(0);
  // defining `state` for favorite product data
  const [favoriteItems, setFavoriteItems] = useState([]);

  // calculate cart quantity
  function calcQuantity() {
    const totalQty = cartItems.reduce((total, product) => total + product.quantity, 0);
    setTotalItems(totalQty);
  }

  // addToCart button functionality
  function addToCart(product) {
    // check if the newly added product is already in the cart by getting its index
    const index = cartItems.findIndex(item => item.id === product.id);
    // if the index is not found, push it to the cart and set quantity to 1, else update the quantity only
    if (index === -1) {
      cartItems.push({ ...product, quantity: 1 });
    } else {
      cartItems[index].quantity += 1;
    }
    // update cart quantity
    calcQuantity();
  }

  // removeFromCart button functionality
  function removeFromCart(product) {
    // remove product from cart
    cartItems.pop(product);
    // update cart quantity
    calcQuantity();
  }

  // counter increase button functionality
  function increaseCount(id) {
    // check if the newly added product is already in the cart by getting its index
    const index = cartItems.findIndex(item => item.id === id);
    // increase the quantity by 1
    cartItems[index].quantity += 1;
    // update cart quantity
    calcQuantity();
  }

  // counter decrease button functionality
  function decreaseCount(id) {
    // check if the newly added product is already in the cart by getting its index
    const index = cartItems.findIndex(item => item.id === id);
    // decrease the quantity by 1
    cartItems[index].quantity -= 1;
    // update cart quantity
    calcQuantity();
  }

  // addToFavorite button functionality
  function addToFavorite(newItem) {
    setFavoriteItems(prevItems => [...prevItems, newItem]);
  }

  // removeFromFavorite button functionality
  function removeFromFavorite(id) {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  function resetCart() {
    setCartItems([]);
    setTotalItems(0);
  }

  function checkOutCart() {
    resetCart();
    Swal.fire(
      'Congrats!',
      'You successfully placed an order!',
      'success'
    );
  }

  useEffect(() => {
    // calculate total bill
    const totalPrices = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    setTotal(totalPrices);
  }, [totalItems, cartItems]);

  return (
    <StateContext.Provider value={{ products, total, totalItems, cartItems, addToCart, removeFromCart, favoriteItems, addToFavorite, removeFromFavorite, increaseCount, decreaseCount, resetCart, checkOutCart }}>
      {children}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
