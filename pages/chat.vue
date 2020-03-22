<template>
  <v-container fluid>
    <!-- TODO: Show current Murmel -->

    <span id="placeholder">Keine Reaktionen auf dein Murmel</span>
    <div id="firechat-wrapper"></div>

    <v-col class="text-center" cols="12" sm="4" id="buttons">
      <div class="my-2">
        <v-btn width="130px" light color="primary" outlined>Chat beenden</v-btn>
      </div>

      <div class="my-2">
        <v-btn width="130px" light color="primary">Senden</v-btn>
      </div>
    </v-col>
  </v-container>
</template>

<style>
#placeholder {
  display: none;
}

#firechat .chat {
  border: 0;
}

#firechat .message {
  padding: 16px;
}

#firechat .message.message-self {
  color: #000000;
  background: none;
}

#firechat textarea {
  border-radius: 4px;
}

#buttons {
  margin: auto;
}
</style>

<script>
import { firebase, chatRef } from '~/plugins/firechat'

export default {
  components: {},
  data() {
    return {}
  },

  mounted() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        console.error(error)
      })

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const chat = new FirechatUI(
          chatRef,
          document.getElementById('firechat-wrapper')
        )

        chat.setUser(user.uid, 'Anonym')
        chat._chat.enterRoom('-M31T7pmqvpcroauRsk2')
      }
    });
  },
  methods: {}
}

async function startChat(chat) {
  chat._chat.createRoom('Chat', 'private', roomId => {
    // TODO: Set room ID on server
    let success = true
    if (success) {
      // Navigate to chat page with room ID
    } else {
      // User is already in chat
    }
  })
}

async function getCurrentChat(chat) {
  // TODO: Get chat room ID from server
  let roomId = null
  if (roomId === null) {
    // No chats active. Show placeholder, hide chat
  } else {
    chat._chat.enterRoom(roomId)
  }
}

async function leaveChat(chat) {
  // TODO: Send leave request to server
  // TODO: Naviagate back
}
</script>

