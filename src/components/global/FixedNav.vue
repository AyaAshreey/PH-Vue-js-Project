<template>
    <div class="fixed-nav">
        <v-app-bar color="#036C46">
            <v-container fluid>
                <v-row>
                    <v-col cols="1" class="d-flex justify-end align-center" style="gap: 20px;">


                        <div class="wishlists d-flex flex-column align-center" style="cursor: pointer"
                            @click="openCart">

                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512"
                                style="fill: #FFFFFF; cursor: pointer; enable-background:new 0 0 512 512;"
                                xml:space="preserve" width="30px">

                                <g>
                                    <path
                                        d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
                                    <path
                                        d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z" />
                                    <path
                                        d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z" />
                                </g>
                            </svg>
                        </div>
                    </v-col>
                    <!-- ========================================================= -->
                    <!-- ========================================================= -->

                    <v-col cols="9">
                        <ul class="links d-flex text-white justify-space-between" style="list-style: none">

                            <li><a href=""> الكل </a> </li>
                            <li><a href=""> العناية بالشعر </a> </li>
                            <li><a href=""> العناية بالبشرة </a> </li>
                            <li><a href=""> العناية بالرجل </a> </li>
                            <li><a href=""> العناية بالمرأة </a> </li>
                            <li><a href=""> العناية بالطفل </a> </li>
                            <li><a href=""> الصيدلية الحيوانية </a> </li>
                            <li><a href=""> الماركات </a> </li>
                            <li><a href=""> العروض </a> </li>




                        </ul>
                    </v-col>
                    <!-- ========================================================= -->
                    <!-- ========================================================= -->



                    <v-col cols="2">

                        <img src="../../assets/images/logo 1.png" alt="" class="w-50" />
                    </v-col>


                </v-row>
            </v-container>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    inject: ["Emitter"],
    methods: {
        openCart() {
            this.Emitter.emit("openCart");
        },
    }
};
</script>