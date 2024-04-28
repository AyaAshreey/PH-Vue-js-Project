<template>
    <div class="cart-drawer">
        <v-navigation-drawer location="right" temporary v-model="drawer">

            <h3><a href=""> الكل </a></h3>
            <h3><a href=""> العناية بالشعر </a></h3>
            <h3> <a href=""> العناية بالبشرة </a></h3>
            <h3><a href=""> العناية بالرجل </a></h3>
            <h3><a href=""> العناية بالمرأة </a></h3>
            <h3><a href=""> العناية بالطفل </a></h3>
            <h3><a href=""> الصيدلية الحيوانية </a></h3>
            <h3><a href=""> الماركات </a></h3>
            <h3><a href=""> العروض </a></h3>
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