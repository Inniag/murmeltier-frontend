<template>
    <v-container fluid>

    <!-- <div class="radar-container"> -->
          <div class='radar'>
            <div id="test-mood-2" class="murmel">
              <v-img  max-height="70px" max-width="70px" :src="require('../assets/mood-4.svg')" />
            </div>
            <div id="test-mood-3" class="murmel">
              <v-img  max-height="70px" max-width="70px" :src="require('../assets/mood-2.svg')" />
            </div>
            <div id="test-mood-4" class="murmel">
              <v-img  max-height="70px" max-width="70px" :src="require('../assets/mood-3.svg')" />
            </div>
            <div id="test-mood-5" class="murmel">
              <v-img  max-height="70px" max-width="70px" :src="require('../assets/mood-5.svg')" />
            </div>
            <div id="test-mood-6" class="murmel">
              <v-img  max-height="70px" max-width="70px" :src="require('../assets/mood-1.svg')" />
            </div>
            
            <!-- <div class='sweep'></div> -->
          </div>
    <!-- </div> -->
      
   </v-container>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {

  }
}
</script>

<style scoped lang="scss">
 $green: rgb(175, 205, 134);
 
$black: #000000;
$gray:  #eee;

$grid-opacity: 0.15;

* {
    box-sizing: border-box;
}



html {
    height: 100%;
    background-color: #111;
    font-size: 10px;
}

body {
    background-image:
        linear-gradient(0deg, transparent 24%, rgba($green, $grid-opacity) 25%, rgba($green, $grid-opacity) 26%, transparent 27%, transparent 74%, rgba($green, $grid-opacity) 75%, rgba($green, $grid-opacity) 76%, transparent 77%, transparent),
        linear-gradient(90deg, transparent 24%, rgba($green, $grid-opacity) 25%, rgba($green, $grid-opacity) 26%, transparent 27%, transparent 74%, rgba($green, $grid-opacity) 75%, rgba($green, $grid-opacity) 76%, transparent 77%, transparent);
    background-size: 7rem 7rem;
    background-position: -5.2rem -5.2rem;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
}

// .radar-container {
//   height: 50%;
//   max-height: 200px;
// }


.radar {

// TODO: https://alligator.io/vuejs/dynamic-styles/
    .murmel {
      transform-origin: center;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 100px;
      display: flex;
      flex: 1 0 auto;
      place-content: center;
      align-items: center;

    }

    #test-mood-2 {
      // transform: container: put it in the middle of the radar, rotate, move outside (percent of full radius), rotate back (all aligned)
      transform: translate3d(-50%, -50%, 0) rotate(360deg) translateX(80%) rotate(-360deg);
    }
    #test-mood-4 {
      // transform: container: put it in the middle of the radar, rotate, move outside (percent of full radius), rotate back (all aligned)
      transform: translate3d(-50%, -50%, 0) rotate(270deg) translateX(20%) rotate(-270deg);
    }

    #test-mood-5 {
      // transform: container: put it in the middle of the radar, rotate, move outside (percent of full radius), rotate back (all aligned)
      transform: translate3d(-50%, -50%, 0) rotate(90deg) translateX(40%) rotate(-90deg);
    }

    #test-mood-3 {
      // transform: container: put it in the middle of the radar, rotate, move outside (percent of full radius), rotate back (all aligned)
      transform: translate3d(-50%, -50%, 0) rotate(180deg) translateX(70%) rotate(-180deg);
    }

    #test-mood-6 {
      // transform: container: put it in the middle of the radar, rotate, move outside (percent of full radius), rotate back (all aligned)
      transform: translate3d(-50%, -50%, 0) rotate(320deg) translateX(85%) rotate(-320deg);
    }

    

    background:
        -webkit-radial-gradient(center, rgba($green, 0.3) 0%, rgba($green, 0) 75%), // background glow
        -webkit-repeating-radial-gradient(rgba($green, 0) 5.8%, rgba($green, 0) 18%, rgba($green, 1) 18.6%, rgba($green, 0) 18.9%), // concentric circles
        -webkit-linear-gradient(90deg, rgba($green, 0) 49.5%, rgba($green, 1) 50%, rgba($green, 1) 50%, rgba($green, 0) 50.2%), // center line - vertical
        -webkit-linear-gradient(0deg, rgba($green, 0) 49.5%, rgba($green, 1) 50%, rgba($green, 1) 50%, rgba($green, 0) 50.2%);
    
    // background:
    //     radial-gradient(center, rgba($green, 0.3) 0%, rgba($green, 0) 75%), // background glow
    //     repeating-radial-gradient(rgba($green, 0) 5.8%, rgba($green, 0) 18%, rgba($green, 1) 18.6%, rgba($green, 0) 18.9%), // concentric circles
    //     linear-gradient(90deg, rgba($green, 0) 49.5%, rgba($green, 1) 50%, rgba($green, 1) 50%, rgba($green, 0) 50.2%), // center line - vertical
    //     linear-gradient(0deg, rgba($green, 0) 49.5%, rgba($green, 1) 50%, rgba($green, 1) 50%, rgba($green, 0) 50.2%); // center line - horizontal
    width: 90vw;
    height: 90vw;
    max-height: 100%;
    max-width: 100%;
    position: relative;
    // left: 50%;
    // top: 50%;
    // margin-top: 33%;
    // transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.2rem solid $green;
    overflow: hidden;

    &:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        animation: blips 5s infinite;
        animation-timing-function: linear;
        animation-delay: 1.4s;
    }

    &:after {
        content: ' ';
        display: block;
        // background-image: linear-gradient( 44deg, rgba(0, 255, 51, 0) 50%, rgba(0, 255, 51, 1) 100%);
        background-image: linear-gradient( 44deg, rgba(0, 255, 51, 0) 50%, rgb(175, 205, 134) 100%);
        width: 50%;
        height: 50%;
        position: absolute;
        top: 0;
        left: 0;
        animation: radar-beam 5s infinite;
        animation-timing-function: linear;
        transform-origin: bottom right;
        border-radius: 100% 0 0 0;
    }
}

@keyframes radar-beam {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}

// @keyframes blips {
//     14% {
//         background:
//             radial-gradient(2vmin circle at 75% 70%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%);
//     }
//     14.0002% {
//         background:
//             radial-gradient(2vmin circle at 75% 70%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 0% 50%, rgba(#fff, 1) 10%, rgba(255,0,0, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 63% 72%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%);
//     }
//     25% {
//         background:
//             radial-gradient(2vmin circle at 75% 70%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 63% 72%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 56% 86%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%);
//     }
//     26% {
//         background:
//             radial-gradient(2vmin circle at 75% 70%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 63% 72%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 56% 86%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%);
//         opacity: 1;
//     }
//     100% {
//         background:
//             radial-gradient(2vmin circle at 75% 70%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 63% 72%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%),
//             radial-gradient(2vmin circle at 56% 86%, rgba(#fff, 1) 10%, rgba($green, 1) 30%, rgba(#fff, 0) 100%);
//         opacity: 0;
//     }
// }
</style>