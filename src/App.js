import logo from './logo.svg';

import './App.css';
import Header from "./include/header";
import Profile from "./include/profile";
import Footer from "./include/footer";
import Leftmenu from "./include/leftmenu";
import Dialogs from "./include/Dialogs";
import s from "./include/css/profile.module.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./include/Music";
import News from "./include/News";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="lc">
                    <Leftmenu/>

                    <div className="content">
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        {/*<Profile />*/}
                        {/*/!*<Dialogs />*!/*/}
                    </div>
                </div>
            </div>

            <Footer/>
        </BrowserRouter>


    );
}


export default App;
