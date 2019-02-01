
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("C:/Users/rmll7/Downloads/final-project-be258-firebase-adminsdk-lflj9-649f356143 (1).json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://final-project-be258.firebaseio.com"
});

var defaultAuth = admin.auth();

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});