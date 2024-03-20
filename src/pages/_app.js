import "@/styles/globals.css";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.patch["Content-Type"] = "application/json"
axios.defaults.withCredentials = true

// extracts properties Component and pageProps from the object passed to App() function.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
