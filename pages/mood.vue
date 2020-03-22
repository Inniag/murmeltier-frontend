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

        <div class="my-2">
            <v-btn  width="130px" light color="primary" outlined>Abbrechen</v-btn>
        </div>

        <div class="my-2">
            <v-btn width="130px" color="primary" @click="submitMurmel">Eintragen</v-btn>
        </div>
    </v-col>
   </v-container>
</template>

<script>
// import axios from 'axios';

export default {
    // http://ec2-18-184-6-227.eu-central-1.compute.amazonaws.com:5000/user

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
  },

  async asyncData ({ $axios }) {
//   async asyncData ({ params }) {
    // const { data } = await axios.get(`/${params.id}`)
    // const { data } = await axios.get(`/user`)
    const { data } = await $axios.get(`/murmel/me/current`, {
        // crossdomain: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        auth: {
            "username": "bc15b072-244b-4258-8c05-e612f7f720ab",
            "password": "e3be321d-984d-49a6-9b3e-3163e9f09be0"
        }
    });

    console.log(data)
    // return { title: data.title }
    return data
  },

  methods: {
    async submitMurmel() {
        // alert("Submitted!")
        console.log("Murmel submitted")

        const data = {
            mood_value: 2,
            hashtag: "hallomeinhashtag"
        }
        
        const id = await this.$axios.post(`/murmel`, data, {
        // crossdomain: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            auth: {
                "username": "bc15b072-244b-4258-8c05-e612f7f720ab",
                "password": "e3be321d-984d-49a6-9b3e-3163e9f09be0"
            }
        });

        console.log("id")
        console.log(id)
        
    }
  }


}
</script>

