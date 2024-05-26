import { defineStore } from "pinia";

export const cartStore = defineStore("cartStore", {
    state: () => ({
        cartItems: [],
    }),
    actions: {
        addItem(item) {
            this.cartItems.push(item);
            console.log(this.cartItems);
        }
    }
});