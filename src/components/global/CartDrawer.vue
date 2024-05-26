<template>
    <div class="cart-drawer">
        <v-navigation-drawer location="right" temporary v-model="drawer">

            <h3><router-link to="/">الكل</router-link></h3>
            <h3> <router-link to="/">العناية بالشعر </router-link> </h3>
            <h3> <router-link to="/">العناية بالبشرة </router-link> </h3>
            <h3> <router-link to="/">العناية بالرجل </router-link> </h3>
            <h3> <router-link to="/">العناية بالمرأة </router-link> </h3>
            <h3> <router-link to="/">العناية بالطفل</router-link> </h3>
            <h3> <router-link to="/">الصيدلية الحيوانية</router-link> </h3>
            <h3> <router-link to="/">الماركات</router-link> </h3>
            <h3> <router-link to="/">العروض</router-link> </h3>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    inject: ["Emitter"],
    data: () => ({
        drawer: false,
    }),
    mounted() {
        this.Emitter.on("openCart", () => {
            this.drawer = true;
        });
    },
};
</script>
<style lang="scss">
.cart-drawer {
    line-height: 60px;
    margin-top: 30px;
    margin-bottom: 30px;

    a {
        text-decoration: none;
        color: #036C46;
    }

    a:hover {
        color: #FFBD1F;
    }

}
</style>