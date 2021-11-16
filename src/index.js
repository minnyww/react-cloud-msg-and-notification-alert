import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerServiceWorker } from "./register-sw";

registerServiceWorker();

navigator.serviceWorker.addEventListener("message", (message) => {
  // var notification = new Notification("To do list", { body: "min" });
  Notification.requestPermission();
  console.log("message :: ", message);
  console.log("Notification.permission :: ", Notification.permission);
  var notification = new Notification("Hi there!");
  // new Notification("Hi!", { tag: "soManyNotification" });
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
registerServiceWorker();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
