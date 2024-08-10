<template>
  <div class="home" style="margin-top: 30px;">
    <UpperSection />
    <InfoPart />
    <swiperSimilarproducts :products="flashDeals" />
    <MoreProducts :products="flashDeals" />

  </div>
</template>

<script>
// @ is an alias to /src
import UpperSection from "@/components/home-page/UpperSection.vue";
import InfoPart from "@/components/home-page/InfoPart.vue";
import swiperSimilarproducts from "@/components/home-page/swiperSimilarproducts.vue";
import MoreProducts from '@/components/home-page/MoreProducts.vue';
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";


export default {
  name: 'HomeView',
  components: {
    UpperSection,
    InfoPart,
    swiperSimilarproducts,
    MoreProducts,
  },
  computed: {
    ...mapState(productsModule, ["flashDeals", "newProducts"])
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),

  },
  async mounted() {
    await this.getProducts();
  }

};
</script>
