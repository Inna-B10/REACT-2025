import { useContext } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import IndexPage from "./page/IndexPage";


function App() {
  
  return (
    <>
<Header/>
<IndexPage/>
<Footer/>
    </>
  );
}

export default App;
