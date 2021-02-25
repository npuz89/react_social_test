import logo from './logo.svg';

import './App.css';
import Header from "./include/Header";
import Profile from "./include/Profile";
import Footer from "./include/Footer";
import Leftmenu from "./include/Leftmenu";
import Dialogs from "./include/Dialogs";
import Music from "./include/Music";
import News from "./include/News";
import Users from "./include/Users";
import Coctails from "./include/Coctails";
import s from "./include/css/profile.module.css";
import {BrowserRouter, Route} from 'react-router-dom';



function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <div className="lc">
                    <Leftmenu/>

                    <div className="content">

                        <Route path='/dialogs' component={Dialogs}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/news' component={News}/>
                        <Route path='/users' component={Users}/>
                        <Route path='/coctails' component={Coctails}/>
                        <Route path='/profile' component={Profile}/>
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
