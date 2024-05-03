<template>
    <div class="products-swiper " style="margin-top: 150px;">
        <div class="titl d-flex justify-space-between align-center mb-5 ">
            <h3 style="font-weight: 700; color: #000000;  font-size: 30px; margin-right: 100px;">
                المنتجات المتشابهة </h3>
            <a href="#" style="  color: #939393;margin-left: 100px; font-size: 20px;"> شاهد المزيد </a>
        </div>



        <Swiper class="swp-class pb-9 px-5" :modules="modules" :slides-per-view="calculateSlidesPerView()"
            :space-between="26" :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
            :autoplay="{ delay: 2000, pauseOnMouseEnter: true, disableOnInteraction: false }" :loop="true"
            style=" width: 90%;">

            <swiper-slide v-for="   item    in   products  " :key="item.id">
                <v-card elevation="0" class="pb-5"
                    style="border: 1px solid #C5C5C5; padding: 16px, 0px, 32px, 0px; gap: 5px; border-radius: 10px ;">
                    <v-hover v-slot="{ isHovering, props }">
                        <div class="img-parent" style="height: 200px; overflow: hidden;">
                            <img :src="showenItem[item.title] ? showenItem[item.title] : item.thumbnail" alt=""
                                class="w-100"
                                :style="'height: 200px; transition: 0.5s all ease-in-out; scale:' + (isHovering ? 1.05 : 1) + ' ; cursor: pointer;'"
                                v-bind="props">
                        </div>
                    </v-hover>
                    <v-card-text class="pl-0 pb-1">
                        ({{ item.title }})
                        {{ item.description.split(" ").length <= 5 ? item.description : item.description.
            split(" ").slice(0, 5).join(" ") + " ..." }} </v-card-text>

                            <v-rating v-model="item.rating" half-increments readonly color="yellow-darken-2"
                                density="compact" size="x-small">

                            </v-rating>
                            <v-card-text class="pl-0 pt-0">
                                <del> ${{ item.price }}</del> From
                                <span class=" text-red" style="font-weight: 900; font-size: 16px;">
                                    ${{ Math.ceil(item.price - item.price * (item.discountPercentage / 100)) }}
                                </span>
                            </v-card-text>

                            <v-btn-toggle v-model="showenItem[item.title]" mandatory>
                                <v-btn v-for="(     pic, i     ) in      item.images     " :value="pic" :key="i"
                                    size="x-small" rounded="xl">
                                    <img :src="pic" width="30" height="30"
                                        style=" border-radius: 50%; border: 1px solid gray;" alt="">
                                </v-btn>
                            </v-btn-toggle>
                            <div class="mt-5">

                                <v-btn density="compact" class="py-2 px-12"
                                    style="letter-spacing: revert; text-transform: none;background-color: #FF9900; font-weight: 700;font-size: 16px; color: #ffffff;width: 40%;">

                                    <svg style="width: 20px; ; fill: #ffffff; margin-left: 5px;" viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="path1"
                                            d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                        </path>
                                        <path class="path2"
                                            d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z">
                                        </path>
                                        <path class="path3"
                                            d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z">
                                        </path>
                                    </svg>
                                    اضافة الي السلة
                                </v-btn>
                            </div>




                </v-card>
            </swiper-slide>
            <div class="swiper-prev"></div>
            <div class="swiper-next"></div>

            <div class="swiper-pagination"></div>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Navigation, Autoplay } from "swiper";

export default {
    props: {
        products: {
            type: Array,
        },
    },
    setup() {
        return {
            modules: [Navigation, Autoplay],
            screenWidth: 0,
        };
    },
    components: {
        Swiper,
        SwiperSlide
    },
    data: () => ({
        showenItem: {},
    }),
    mounted() {
        this.screenWidth = window.innerWidth;
        window.addEventListener('resize', this.updateScreenWidth);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.updateScreenWidth);
    },
    methods: {
        updateScreenWidth() {
            this.screenWidth = window.innerWidth;
        },
        calculateSlidesPerView() {
            if (this.screenWidth >= 1366) {
                return 4.2;
            } else if (this.screenWidth >= 834) {
                return 2.2;
            } else {
                return 1.2;
            }
        }
    }




};
</script>
<style scoped lang="scss">
.products-swiper {

    .swiper-button-prev {
        right: -3px;
    }

    .swiper-button-next {
        left: -3px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 23px;
        height: 46px;
        top: 55%;

        &::after {
            font-size: 30px;
            font-weight: bold;
            color: rgb(110, 128, 208);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}

@media (max-width:375px) {
    .titl {
        width: 370px !important;
    }

    .titl h3 {
        margin-right: 40px !important;
        font-size: 15px !important;
    }

    .titl a {
        font-size: 13px !important;
        margin-right: 40px !important;
        display: contents;
        text-decoration-line: underline;
    }

    .products-swiper {
        margin-top: 50px !important;
    }
}
</style>
