import logo from "./logo.svg";
import "./App.css";
import { getFcmToken } from "./firebaseConfig";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getFcmToken();
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    if (!Notification) {
      alert(
        "Desktop notifications not available in your browser. Try Chromium.",
      );
      return;
    }

    if (Notification.permission !== "granted") Notification.requestPermission();
  });

  function notifyMe() {
    if (Notification.permission !== "granted") Notification.requestPermission();
    else {
      var notification = new Notification("Notification title", {
        icon: "http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png",
        body: "Hey there! You've been notified!",
      });

      notification.onclick = function () {
        window.open("http://stackoverflow.com/a/13328397/1269037");
      };
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button onClick={() => notifyMe()}>noti</button>
    </div>
  );
}

export default App;
