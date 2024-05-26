// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        flashDeals: [],
        newProducts: [],
        cartItems: [],
    },
    mutations: {
        SET_PRODUCTS(state, { newProducts, flashDeals }) {
            state.newProducts = newProducts;
            state.flashDeals = flashDeals;
        },
        ADD_ITEM_TO_CART(state, item) {
            state.cartItems.push(item);
        },
    },
    actions: {
        async getProducts({ commit }) {
            try {
                const res = await axios.get("https://dummyjson.com/products");
                const { products } = res.data;
                const newProducts = products.filter((el) => el.category === "laptops");
                const flashDeals = products.slice(0, 8);
                commit('SET_PRODUCTS', { newProducts, flashDeals });
            } catch (err) {
                console.error(err);
            }
        },
        addItemToStore({ commit }, item) {
            commit('ADD_ITEM_TO_CART', item);
        },
    },
    getters: {
        cartItemCount: state => state.cartItems.length,
    }
});
