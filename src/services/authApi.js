import firebase from 'firebase';

export default class AuthApi {

    static async signUp(email, password) {
        let error = '';
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password)
        } catch (err) {
          console.log("AuthApi -> signUp -> error", err)
          error = err.code;
        }
        return error;
    }
      
    static async login(email, password) {
        let error = '';
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch (err) {
          //console.log("AuthApi -> login -> error", err)
          error = err.code;
        }
        return error;
    }

    static async logout() {
        let error = '';
        try {
            await firebase.auth().signOut()
        } catch (err) {
            //console.log("AuthApi -> signUp -> error", err)
            error = err.code;
        }
        return error;
    }
  
    static registerAuthObserver(callback){
      firebase.auth().onAuthStateChanged((user) => {
        callback(user);
      });
    }

    static async getID(idToken) {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        // Send token to your backend via HTTPS
        // ...
      }).catch(function(error) {
        // Handle error
      });
    }
    /*1.Cuando el usuario se registre, completa el flujo de acceso para el proveedor de autenticación del usuario hasta el paso anterior a llamar a uno de los métodos Auth.signInWith. Por ejemplo, obtén el token del ID de Google, el token de acceso a Facebook o la dirección de correo electrónico y la contraseña del usuario.
    2.Obtén una AuthCredential para el proveedor de autenticación nuevo:
      var credential = firebase.auth.EmailAuthProvider.credential(email, password);
    3.Pasa el objeto AuthCredential al método link del usuario que accedió:
    Si la llamada a link se hace correctamente, la nueva cuenta del usuario puede acceder a los datos de Firebase de la cuenta anónima.
  static async AuthCredential(callback){
    firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then(function(usercred) {
    var user = usercred.user;
    console.log("Anonymous account successfully upgraded", user);
    }, function(error) {
    console.log("Error upgrading anonymous account", error);
    });
  }*/
}