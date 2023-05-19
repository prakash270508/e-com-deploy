import { writable } from "svelte/store";

export const cartItems = writable([]);
export const grossTotal = writable(0);
export const grossItem = writable(0);

export function addCart(product) {
  cartItems.update((cart) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
      existingProduct.totalPrice += existingProduct.price;
      grossTotal.update((data) => {
        return data + existingProduct.price;
      });
    } else {
      cart.push({
        id: product.id,
        name: product.title,
        price: product.price,
        totalPrice: product.price,
        image: product.thumbnail,
        quantity: 1,
      });
      grossTotal.update((data) => {
        return data + product.price;
      });
      grossItem.update((data) => {
        return data + 1;
      });
    }
    return cart;
  });
}

// Reduce cart
export function subCart(product) {
  cartItems.update((cart) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    existingProduct.quantity--;
    existingProduct.totalPrice -= existingProduct.price;
    grossTotal.update((data) => {
      return data - product.price;
    });

    return cart;
  });
}

// Remove cart item

export function removeCart(product) {
  cartItems.update((cart) => {
    cart =  cart.filter((item) => item.id !== product.id);

    grossItem.update((data)=>{
      return data - 1
    })
    grossTotal.update((data)=>{
      return data - product.totalPrice
    })

    return cart;
  });
}
