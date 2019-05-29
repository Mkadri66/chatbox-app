import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAs-Q0xINpcM64ZGSP1QMugCil-se-hJsE",
    authDomain: "chatbox-app-80e58.firebaseapp.com",
    databaseURL: "https://chatbox-app-80e58.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base