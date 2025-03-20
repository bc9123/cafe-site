import { BrowserRouter } from "react-router-dom";
import PageRouter from "./router/PageRouter";
import "./App.css";
import '@splidejs/react-splide/css';
import "./css/splide-custom.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageRouter />
      </BrowserRouter>
    </>
  )
}

export default App
