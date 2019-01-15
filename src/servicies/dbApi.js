import * as firebase from 'firebase'; 

let db;

export default class DatabaseApi {
    static iniDatabase() {
    var config = {
        apiKey: "AIzaSyCQMAkqI-AADdLNjsnLtYXReeY0TI-vY2Y",
        authDomain: "my-first-test-bc9e5.firebaseapp.com",
        databaseURL: "https://my-first-test-bc9e5.firebaseio.com",
        projectId: "my-first-test-bc9e5",
        storageBucket: "my-first-test-bc9e5.appspot.com",
        messagingSenderId: "41493582080"
      };
      firebase.initializeApp(config);

      db = firebase.firestore();

      db.settings({
          timestampsInSnapshots: true
      });
    }
 static async getContent(){
    
    db.collection("content").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        }); 
    });
 }
 

}