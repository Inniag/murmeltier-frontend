<template>
    <v-container fluid>

    <v-carousel
        :cycle="false"
        :continuous="false"
        height="300px"
        hide-delimiter-background
        show-arrows-on-hover
        v-model="mood"
    >
        <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        >
        <v-sheet
            light
            height="100%"
        >
            <v-row
            class="fill-height"
            justify="center"
            >
                <img width="200px" height="auto" :src="require('../assets/mood-'+(i+1)+'.svg')" />
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>

    <!-- <v-text-field :rules="rules"></v-text-field> -->
    <v-text-field
        :rules="rules"
        label="Hashtag"
        placeholder="Beschreibe deine Stimmung/Situation in einem Hashtag!"
        v-model="hashtag"
    ></v-text-field>
<!-- 
    <div class="text-center">
        <v-btn width="60%" outlined color="indigo" dark>Abbrechen</v-btn>

        <v-btn width="60%"  color="success">Teilen</v-btn>
    </div> -->

    <v-col class="text-center" cols="12" sm="4">
      <!-- <div class="my-2">
        <v-btn depressed small>Normal</v-btn>
      </div>
      <div class="my-2">
        <v-btn depressed small color="primary">Primary</v-btn>
      </div> -->
        <!-- <v-btn class="ma-2" outlined color="indigo" dark>Abbrechen</v-btn> -->
        <div class="my-2">
            <v-btn  width="130px" outlined color="indigo" dark>Abbrechen</v-btn>
        </div>
        <!-- <v-btn class="ma-2" color="success">Teilen</v-btn> -->
        <div class="my-2">
            <v-btn width="130px" color="success">Teilen</v-btn>
        </div>
    </v-col>
   </v-container>
</template>

<script>

export default {
    components: {
    },  
    data () {
        return {
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            hashtag: "",
            mood: 2,
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 60 || 'Maximal 60 Zeichen',
                // value => {
                // // const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // // return pattern.test(value) || 'Invalid e-mail.'
                // },
            ],
        }
  }
}
</script>

