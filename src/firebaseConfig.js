import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {};

initializeApp(firebaseConfig);

const messaging = getMessaging();
export const getFcmToken = () => {
  getToken(messaging, {
    vapidKey:
      "BFk1MqOnuG72T68oeWjlya_jCEKyex-JJRGa-C2LKeRaUKQDVfy2yiFlb9Pjzp7yk-bQSiz3-lIxiFYgehyAfqs",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("currentToken :: ", currentToken);
        // Send the token to your server and update the UI if necessary
        // ...
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one.",
        );
        // ...
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // ...
    });
};
