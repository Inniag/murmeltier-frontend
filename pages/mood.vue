<template>
    <v-container fluid>

    <!-- <img id="murmel-bubble" max-height="200px" max-width="200px" :src="require('../assets/mood-1.svg')" /> -->

        <div class="box sb2">Wie geht's dir?</div>


        <img id="murmel-bubble" src="~/assets/murmel_portrait.svg" />

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
        :clearable="true"
    ></v-text-field>
<!--
    <div class="text-center">
        <v-btn width="60%" outlined color="indigo" dark>Abbrechen</v-btn>

        <v-btn width="60%"  color="success">Teilen</v-btn>
    </div> -->

    <v-col class="text-center" cols="12" sm="4" id="buttons">

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
import getUserOrRequestFromServer from "~/imports/getUserOrRequestFromServer"

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
            murmelLocalData: {},
            hashtag: "",
            mood: 2,
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 60 || 'Maximal 60 Zeichen',
                // value => {
                // // const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // // return pattern.test(value) || 'Invalid e-mail.'
                // const pattern = /[A-Za-z0-9\-\.\_]/
                // return pattern.test(value) || 'Invalid e-mail.'
                // },
            ],
        }
  },

  async asyncData ({ $axios }) {

    // seems we must get this from localstore as "this" is not supported here
    // TODO: improve this
       try {

            const user = await getUserOrRequestFromServer()

            const myAuth =  {
                "username": user.userId,
                "password": user.accessKey
                // "username": "bc15b072-244b-4258-8c05-e612f7f720ab",
                // "password": "e3be321d-984d-49a6-9b3e-3163e9f09be0"
            }

            const { data } = await $axios.get(`/murmel/me/current`, {
                // crossdomain: true,
                headers: { 'Access-Control-Allow-Origin': '*' },
                auth: myAuth
            });

            console.log("data (murmel)")
            console.log(data)

            // return { title: data.title }
            return {
                hashtag: data.hashtag,
                mood: data.mood_value
            }

      } catch(e) {
          return {}
      }

  },

  methods: {
    async submitMurmel() {
        // alert("Submitted!")
        console.log("Murmel submitted")

        const data = {
            mood_value: this.mood,
            hashtag: this.hashtag
        }

        const user = await getUserOrRequestFromServer()

        console.log("user")
        console.log(user)

        const id = await this.$axios.post(`/murmel`, data, {
        // crossdomain: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            auth: {
                "username": user.userId,
                "password": user.accessKey
                // "username": "bc15b072-244b-4258-8c05-e612f7f720ab",
                // "password": "e3be321d-984d-49a6-9b3e-3163e9f09be0"
            }
        });

        console.log("id")
        console.log(id)

    }
  }


}
</script>

<style scoped>
#murmel-bubble {
    position: absolute;
    left: 0;
    top: -30px;
    height: 200px;
    width: 200px;
    display: block;
    /* display: none; */
    z-index: 99;
}


* {
  margin: 0px;
  padding: 0px;
}

.box {
  width: 300px;
  left: 120px;
  top: 40px;
  margin: 50px auto;
  background: #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position: fixed;
  z-index: 200;
}



.sb2:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid #00bfb6;
  border-top: 10px solid #00bfb6;
  border-bottom: 10px solid transparent;
  left: -19px;
  top: 6px;
}

#buttons {
  margin: auto;
}

</style>

