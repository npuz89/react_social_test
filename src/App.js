import logo from './logo.svg';
import './App.css';
import Header from "./include/header";
import Profile from "./include/profile";
import Footer from "./include/footer";
import Leftmenu from "./include/leftmenu";
import Dialogs from "./include/Dialogs";
import s from "./include/css/profile.module.css";

function App() {
  return (
      <div>
        <Header />
        <div className="lc">
        <Leftmenu />
            <div className="content">
        <Profile />
        {/*<Dialogs />*/}
            </div>
        </div>
        <Footer />


      </div>
  );
}







export default App;
