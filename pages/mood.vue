<template>
    <v-container fluid>

  <h1>Hallo! mood.</h1>
    <v-carousel
        :cycle="false"
        :continuous="false"
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
    >
        <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
            <!-- <div class="display-3">{{ slide }} Slide</div> -->
            <img width="200px" height="auto" :src="require('../assets/mood-'+(i+1)+'.svg')" />
            <!-- <v-img :src="require('../assets/sample_image.jpg')"/> -->
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
   </v-container>
</template>

<script>

export default {
    components: {
    },  
    data () {
        return {
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
  }
}
</script>

