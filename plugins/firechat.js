import firebase from 'firebase'

let chatRef = null;

if (firebase.apps.length === 0) {
    var firebaseConfig = {
        apiKey: 'AIzaSyBJgvkJ2eOxy9bUQPY1hGjfrLv-L5HmoiE',
        authDomain: 'murmeltier-ec59c.firebaseapp.com',
        databaseURL: 'https://murmeltier-ec59c.firebaseio.com',
        projectId: 'murmeltier-ec59c',
        storageBucket: 'murmeltier-ec59c.appspot.com',
        messagingSenderId: '902400849362',
        appId: '1:902400849362:web:0ee68e0efb1a68ded5040b'
    }
    firebase.initializeApp(firebaseConfig);
}

chatRef = firebase.database().ref('chat')

export { firebase, chatRef };