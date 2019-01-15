import * as firebase from 'firebase'; 

let db;

export default class DatabaseApi {
    static iniDatabase() {
    var config = {
            apiKey: "AIzaSyAU9zY1346qqGP4kLpuEDYgXOcNDLYqOwA",
            authDomain: "final-project-be258.firebaseapp.com",
            databaseURL: "https://final-project-be258.firebaseio.com",
            projectId: "final-project-be258",
            storageBucket: "final-project-be258.appspot.com",
            messagingSenderId: "529536568622"
        };
        firebase.initializeApp(config);

      db = firebase.firestore();

      db.settings({
          timestampsInSnapshots: true
      });
    }
 static async getContent(){
    
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        }); 
    });
 }
 

}