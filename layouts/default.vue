<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <!-- <v-list-item
          @click="startGame"
        >

          <v-list-item-action>
            <v-icon>mdi-google-controller</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Start new game</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      light 
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />

    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
  <v-bottom-navigation
    fixed
    grow
    backgroundColor="primary"
    light
  >
    <v-btn
      to="/mood"
      router
      exact
    >
      <span>Stimmung</span>
      <v-icon>mdi-thought-bubble-outline</v-icon>
    </v-btn>

    <v-btn
      to="/"
      router
      exact
    >
      <span>Sonar</span>
      <v-icon>mdi-radar</v-icon>
    </v-btn>
  </v-bottom-navigation>

    <!-- <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2020</span>
    </v-footer> -->
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      whisperLocalData: {
        userId: "",
        accessKey: "",
      },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        // {
        //   icon: 'mdi-apps',
        //   title: 'Home',
        //   to: '/'
        // },
        // {
        //   icon: 'mdi-history',
        //   title: 'My games',
        //   to: '/history'
        // },
        {
          icon: 'mdi-information-outline',
          title: 'Info',
          to: '/about'
        },
        {
          icon: 'mdi-lock',
          title: 'Datenschutz',
          to: '/privacy'
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Murmel'
    }
  },

  
  async mounted(context) {
    // this.gameId = this.$route.params.id

    // load persisted data from localstorage to state
    if (localStorage.getItem('murmelLocalData')) {
      console.log("we have localstorage data, get it from there")
      try {
        this.murmelLocalData = JSON.parse(localStorage.getItem('murmelLocalData'));
        console.log("murmelLocalData: ")
        console.log(this.murmelLocalData)
      } catch(e) {
        localStorage.removeItem('murmelLocalData');
      }
    
    // no local storage data yet, have to get userId and set localstorage:
    } else {
      console.log("no local storage data yet, have to get userId and set localstorage")
      
      const userData = await this.$axios.post(`/user`, {}, {
        // crossdomain: true,
            headers: { 'Access-Control-Allow-Origin': '*' }
        });

        console.log("userData")
        console.log(userData)

        this.murmelLocalData = {
          userId: userData.data.id,
          accessKey: userData.data.password
        }

      // const tempLocalData = this.whisperLocalData
      // tempLocalData.mostRecentGame = this.gameId
      // tempLocalData.myGames[this.gameId] = { 
      //   id: this.gameId, 
      //   myName: this.userNameField
      // }

      // this.whisperLocalData = tempLocalData

      // console.log("this.whisperLocalData");
      // console.log(this.whisperLocalData);
      

      const parsed = JSON.stringify(this.murmelLocalData);
      localStorage.setItem('murmelLocalData', parsed);
    }

    // // if current game id from URL exist in myGames from localstore
    // if (this.murmelLocalData && 
    //     this.murmelLocalData.userId) {
      
    //   // copy id 
    //   this.userNameField = this.whisperLocalData.myGames[this.gameId].myName
    //   this.hasAddedName = true
    // }
  },

  methods: {
    startGame() {
      startNewGame(this.$router)
    }
  }
}
</script>
