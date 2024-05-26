import { defineStore } from "pinia";

import axios from "axios";



export const productsModule = defineStore("productsModule", {
    state: () => ({
        flashDeals: [],
        newProducts: [],
        cartItems: [],
    }),
    actions: {
        async getProducts() {
            await axios.get("https://dummyjson.com/products")
                .then((res) => {
                    this.newProducts = res.data.products.filter(
                        (el) => el.category === "laptops");
                    this.flashDeals = res.data.products.slice(0, 8);
                })
                .catch((err) => console.log(err));
        },
        addItemToStore(item) {
            // Mutate the state to add the item
            // this.newProducts.push(item);
            this.cartItems.push(item);
            console.log(this.cartItems);
        },
    },
}); 