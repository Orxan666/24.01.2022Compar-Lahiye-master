// import "../node_modules/swiper/swiper.scss"
// import "../node_modules/swiper/swiper.min.css"
import "./App.scss";
import Header from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./config/Routes";



function App() {
  return (

    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props} />
          <Routes />
        </>
      )} />




    </BrowserRouter>


  );
}

export default App;
