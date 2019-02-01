import * as firebase from 'firebase';

export default class StorageApi {
  static uploadFile(folder, file, callback) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${folder}/${+(new Date())}-${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
      (snapshot) => {
      //explicación de texto
      },(error) => {
      //explicación de los errores
      }, () => {
        console.log("Upload completed successfully");
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          callback(downloadURL);
        });
    });
  }

  static deleteFile(folder, file, callback) {
    // Create a reference to the file to delete
    const storageRef = firebase.storage().ref();
    var desertRef = storageRef.child(`${folder}/${+(new Date())}-${file.name}`);

    // Delete the file
    desertRef.delete().then(function() {
      // File deleted successfully
    }).catch(function(error) {
      console.log(error)
    });
  }
}