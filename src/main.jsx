import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { store } from "./app/store";
import { Provider } from "react-redux";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const localization = {
  socialButtonsBlockButton: "{{provider|titleize}} orqali davom etish",
  signIn: {
    start: {
      title: "Kirish",
      subtitle: "{{applicationName}} saytidan foydalanish",
      actionText: "Akkounting bormi?",
      actionLink: "Kirish",
    },
  },
  userButton: {
    action__addAccount: "Hisob qo'shish",
    action__manageAccount: "Hisobni boshqarish",
    action__signOut: "Chiqish",
    action__signOutAll: "Hamma hisoblardan chiqish",
  },
};

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ClerkProvider
        localization={localization}
        publishableKey={PUBLISHABLE_KEY}
      >
        <App />
      </ClerkProvider>
    </Provider>
  </React.StrictMode>
);
