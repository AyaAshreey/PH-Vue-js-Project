<template>
    <div class="container mb-3 text-start" style="width: 90%">
        <div class="allTabs" :style="allTabsStyling">
            <button class="mybtn" :class="{ 'active-btn': activeIndex === 0 }" @click="toggleTab(0)">{{
            $t('infoPart.title1')
        }}</button>
            <button class="mybtn" :class="{ 'active-btn': activeIndex === 1 }" @click="toggleTab(1)">{{
            $t('infoPart.title2')
        }}</button>
            <button class="mybtn" :class="{ 'active-btn': activeIndex === 2 }" @click="toggleTab(2)">{{
            $t('infoPart.title3')
        }}</button>
            <hr class="bottom-border">
        </div>

        <div class="parent-all-article" style="margin-right: 15px;">
            <article class="fun-facts " v-for="(fact, index) in facts" :key="index"
                :class="{ 'active-article': activeIndex === index }">
                <h4 style=" color: #939393; font-weight: 700; margin-bottom: 20px;">{{ fact.title }}</h4>
                <ul style="line-height: 25px;">
                    <li style="color: #939393; font-size: 13px;" v-for="item in fact.items" :key="item">{{ item }}</li>
                </ul>
                <h4 v-if="activeIndex === 0"
                    style="color: #939393;font-weight: 700;margin-top: 20px;margin-bottom: 20px;">{{ fact.secTitle
                    }}</h4>


                <!-- <p class="wide-parg" v-if="activeIndex === 0" style="color: #939393; font-size: 14px;">{{ fact.secItem }}</p> -->
                <div class="contain-wide-paragraph">
                    <p class="wide-parg" v-if="activeIndex === 0"
                        :style="{ color: '#939393', fontSize: '13px', lineHeight: '25px', width: screenWidth <= 834 ? '70%' : 'auto' }">
                        {{
            fact.secItem }}</p>
                </div>





                <!-- ========section 2======= -->
                <v-container>
                    <v-row>
                        <v-col cols="2">
                            <p v-if="activeIndex === 1" style="color: #939393; font-size: 20px; line-height: 3;"> {{
            fact.Section }} </p>
                            <p v-if="activeIndex === 1" style="color: #939393;font-size: 20px;
  line-height: 3;"> {{ fact.size }} </p>
                            <p v-if="activeIndex === 1" style="color: #939393;font-size: 20px;
  line-height: 3;"> {{ fact.modelNo }} </p>
                        </v-col>
                        <v-col cols="2">
                            <p v-if="activeIndex === 1" style="color: black; font-size: 20px; line-height: 3;"> {{
            fact.Sectionval }} </p>
                            <p v-if="activeIndex === 1" style="color: black;font-size: 20px;
  line-height: 3;"> {{ fact.sizeval }} </p>
                            <p v-if="activeIndex === 1" style="color: black;font-size: 20px;
  line-height: 3;"> {{ fact.modelNoval }} </p>
                        </v-col>
                        <v-col cols="8"></v-col>
                    </v-row>
                </v-container>

                <!-- ========section 3======= -->
                <div class="rate-section mb-8">
                    <v-container>
                        <v-row>
                            <v-col cols="1">
                                <ul v-if="activeIndex === 2"
                                    style=" line-height: 1.8;color: #000000; font-weight: 700;font-size: 24px;">
                                    <li>5</li>
                                    <li>4</li>
                                    <li>3</li>
                                    <li>2</li>
                                    <li>1</li>
                                </ul>
                            </v-col>

                            <v-col class="star-rating" cols="3" style="line-height: 2.1;">

                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large" :show-rating="trye" :value="3"></v-rating>

                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large" :show-rating="true" :value="3"></v-rating>
                            </v-col>
                            <v-col cols="1">
                                <ul v-if="activeIndex === 2"
                                    style=" line-height: 1.8; font-weight: 700;font-size: 24px;color: #000000;">
                                    <li>20</li>
                                    <li>10</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>3</li>
                                </ul>
                            </v-col>
                            <v-col cols="4">
                                <p v-if="activeIndex === 2" style=" font-weight: 700;font-size: 24px;color: #000000;">
                                    التقييم العام
                                </p>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="x-large"></v-rating>
                                <p v-if="activeIndex === 2" style=" font-weight: 700;font-size: 24px;color: #000000;">
                                    4.5 </p>
                            </v-col>
                            <v-col cols="3"></v-col>
                        </v-row>
                    </v-container>
                    <a href="#" v-if="activeIndex === 2" style="color: #939393;font-size: 20px; "> يوجد 5343 تقييمات و
                        239127 مراجعات
                    </a>
                    <div class="d-flex">
                        <span v-if="activeIndex === 2" style="color: black;font-weight: 600;margin-left: 5px;"> Aya98
                        </span>
                        <p v-if="activeIndex === 2" style="color: #939393; ">21/3/2022
                        </p>
                        <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="compact"
                            size="small" :value="3"></v-rating>

                    </div>

                    <p v-if="activeIndex === 2" style="color: #939393;"> حلووو ممتاز </p>
                </div>

                <!-- ========rate-section-phon-screen======= -->
                <div class="rate-section-phon-screen mb-8">
                    <v-container>
                        <v-row>
                            <v-col cols="1">
                                <ul v-if="activeIndex === 2"
                                    style=" line-height: 1.8;color: #000000; font-weight: 700;font-size: 24px;">
                                    <li>5</li>
                                    <li>4</li>
                                    <li>3</li>
                                    <li>2</li>
                                    <li>1</li>
                                </ul>
                            </v-col>

                            <v-col class="star-rating" cols="3" style="line-height: 2.1;">

                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small" :show-rating="trye" :value="3"></v-rating>

                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small" :show-rating="true" :value="3"></v-rating>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small" :show-rating="true" :value="3"></v-rating>
                            </v-col>
                            <v-col class="sec-ul-num" cols="1">
                                <ul v-if="activeIndex === 2"
                                    style=" line-height: 1.8; font-weight: 700;font-size: 24px;color: #000000;">
                                    <li>20</li>
                                    <li>10</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>3</li>
                                </ul>
                            </v-col>
                            <v-col class="third-col-rate" cols="4">
                                <p v-if="activeIndex === 2" style=" font-weight: 700;font-size: 24px;color: #000000;">
                                    التقييم العام
                                </p>
                                <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="dense"
                                    size="small"></v-rating>
                                <p v-if="activeIndex === 2" style=" font-weight: 700;font-size: 24px;color: #000000;">
                                    4.5 </p>
                            </v-col>
                            <v-col cols="3"></v-col>
                        </v-row>
                    </v-container>
                    <a href="#" v-if="activeIndex === 2" style="color: #939393;font-size: 20px; "> يوجد 5343 تقييمات و
                        239127 مراجعات
                    </a>
                    <div class="d-flex">
                        <span v-if="activeIndex === 2" style="color: black;font-weight: 600;margin-left: 5px;"> Aya98
                        </span>
                        <p v-if="activeIndex === 2" style="color: #939393; ">21/3/2022
                        </p>
                        <v-rating v-if="activeIndex === 2" readonly color="yellow-darken-2" density="compact"
                            size="small" :value="3"></v-rating>

                    </div>

                    <p v-if="activeIndex === 2" style="color: #939393;"> حلووو ممتاز </p>
                </div>


            </article>

        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            activeIndex: 0,
            facts: [
                {
                    title: "الميزات الاساسية ",
                    items: [
                        "مستحضر يترك بشرتك هادئة ومعطرة برائحة خفيفة طوال اليوم",
                        "تركيبة غير دهنية تذوب بسرعة في البشرة",
                        "ينعش ويرطب البشرة بفضل زيت الجوجوبا وفيتامين E",
                        "فعال للغاية على الوجه واليدين والجسم",
                        "دع بشرتك تختبر العجائب الاستوائية مع كريم الترطيب هذا"
                    ],
                    secTitle: "نظرة عامة",
                    secItem: "Revive your skin and enjoy the delicate moisturizing cream with a joyful zesty scent of tropical fruits. NIVEA Soft Freshies absorbs quickly into the skin, making the skin feel refreshingly moist. Caring formula with Vitamine E and Jojoba Oil makes your skin feel noticeably relaxed, refreshed and smoother. For your handbag or at home: NIVEA Soft. Ingredients:- Aqua, Glycerin, Paraffinum Liquidum, Myristyl Alcohol, Butylene Glycol, Alcohol Denat., Stearic Acid, Myristyl Myristate, Cera Microcristallina, Glyceryl Stearate, Hydrogenated Coco-Glycerides, Simmondsia Chinensis Seed Oil, Tocopheryl Acetate, Lanolin Alcohol (Eucerit), Polyglyceryl-2 Caprate, Dimethicone, Sodium Hydroxide, Carbomer, Phenoxyethanol, Limonene, Coumarin, Citronellol, Parfum.",

                },
                {
                    Section: "القسم :",
                    size: "الحجم :",
                    modelNo: "رقم الموديل :",
                    Sectionval: "للجنسين",
                    sizeval: " 30 وحدة ",
                    modelNoval: " 119269 ",
                },
                {
                    title: "",
                    items: ""
                },
            ],
        };
    },
    computed: {
        screenWidth() {
            return window.innerWidth;
        },
        allTabsStyling() {
            return {
                'margin-right': this.$i18n.locale === 'ar' ? '80px' : '0',
                'margin-left': this.$i18n.locale === 'en' ? '80px' : '0',
                marginTop: '30px'
            };

        }
    },
    methods: {
        toggleTab(index) {
            this.activeIndex = index;
        },
    },
};
</script>

<style scoped>
.v-locale--is-ltr {
    direction: unset !important;
}

.rate-section-phon-screen {
    display: none;
}

.bottom-border {
    position: relative;
    z-index: -2;
    width: 1150px;
    border: 4px solid #F1F1F1;
    bottom: 14px;
    right: 7px;
}

.mybtn {
    all: unset;

    margin: .5rem;
    color: #3d4a59;
    display: inline-block;
    cursor: pointer;
    padding: .375rem .75rem;
    font-size: 1.5rem;
    line-height: 1.5;
    transition: all .5s;
    opacity: 0.5;
}

.active-btn {
    border-bottom: 6px solid #48B1A6;
    color: black;
    font-weight: 600;
    opacity: 1;
}



.mybtn:hover {
    color: black;
    /* font-size: 2.2rem; */
    opacity: 1;
}



.parent-all-article {
    position: relative;
    height: 250px;
    padding-right: 50px;
    padding-left: 50px;
}

.fun-facts {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 80px;
    margin-left: auto;
    transition: all 0.5s;
    width: 1000px;

}

.active-article {
    opacity: 1;
    z-index: 5;
}

.fun-facts h2 {
    color: #939393;
    margin-bottom: 10px;
}

.fun-facts ol {
    width: fit-content;
    margin: auto;
    line-height: 40px;
}

.num-list li {
    font-size: 25px;
}

/* ========auto number list===== */
ul li {
    list-style: none;
}


/* .wide-parg {
    word-wrap: break-word;
} */

@media (max-width: 834px) {
    .rate-section-phon-screen {
        display: none !important;
    }

    .wide-parg {
        width: 70%;
    }


}

@media (max-width: 375px) {
    .rate-section-phon-screen {
        display: block !important;
    }

    .rate-section {
        display: none !important;
    }

    .container {
        width: 50%;
    }

    .mybtn {
        font-size: 15px
    }

    .allTabs[data-v-6f8fa183] {
        margin-right: 0 !important;
    }

    .fun-facts {
        position: absolute;
        left: 0;
        right: 10px;
        font-size: 11px !important;
    }

    .fun-facts ul {
        line-height: 20px !important;
    }

    .fun-facts li {
        font-size: 10px !important;
    }

    /* .contain-wide-paragraph {
        height: 200px
    } */

    .wide-parg {
        width: 34% !important;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 10px !important;
        line-height: 16px !important;
        height: 98px;
    }

    .rate-section-phon-screen {
        width: 370px !important;
    }

    .rate-section-phon-screen li,
    p,
    a {
        font-size: 12px !important;
    }



    .rate-section-phon-screen .v-rating {
        width: 100px !important;
        font-size: 10px !important;
    }

    .star-rating {
        line-height: 1.4 !important;

    }

    .sec-ul-num ul {
        margin-right: 20px;
    }

    .third-col-rate {
        margin-right: 20px;
    }



    /* .wide-parg::before {
        content: "";
        display: inline-block;
        width: 100%;
        max-width: calc(100% - 160px);
       
        margin-right: -100%;
        background: white;
        position: relative;
    }  */
}
</style>
