<template>
    <div class="layout">
        <v-layout class="position-relative">
            <CartDrawer />
            <v-main style="padding-top: 150px">
                <slot></slot>
            </v-main>
            <AppNav />
            <ResponsiveNav v-show="windowWidth <= 990" />
            <FixedNavVue />
            <AppFooter />
        </v-layout>
    </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
import FixedNavVue from './FixedNav.vue';
import ResponsiveNav from "./ResponsiveNav.vue";



export default {
    data: () => ({
        drawer: true,
        windowWidth: 0,
    }),
    components: {
        AppNav,
        FixedNavVue,
        AppFooter,
        CartDrawer,
        ResponsiveNav,
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        window.onresize = () => {
            this.windowWidth = window.innerWidth;
            console.log(this.windowWidth);
        };
    },
};
</script>
<style>
* {
    direction: rtl !important;
    font-family: 'Montserrat Arabic', sans-serif;
}
</style>