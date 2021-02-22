import logo from './logo.svg';
import './App.css';
import Header from "./include/header";
import Profile from "./include/profile";
import Footer from "./include/footer";
import Leftmenu from "./include/leftmenu";

function App() {
  return (
      <div>
        <Header />
        <div className="lc">
        <Leftmenu />
        <Profile />
        </div>
        <Footer />


      </div>
  );
}







export default App;
