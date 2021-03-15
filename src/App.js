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
import {Route} from 'react-router-dom';




function App(props) {

    return (

            <div>
                <Header/>
                <div className="lc">

                    <Leftmenu  fusers={props.state.LeftMenuUser} />

                    <div className="content">

                        {/*<Route path='' component={Dialogs}/>*/}
                        <Route path='/music' component={Music}/>
                        <Route path='/news' render={() => <News posts={props.state.NewsPage} /> }/>
                        <Route path='/users' component={Users}/>
                        <Route path='/coctails' component={Coctails}/>
                        <Route path='/profile' render={() => <Profile
                            posts={props.state.PostsPage}
                            addPost={props.addPost}/> }/>
                        <Route path='/dialogs' render={() => <Dialogs dialoguser={props.state.DialogsPage} /> }/>
                        {/*<Profile />*/}
                        {/*/!*<Dialogs />*!/*/}
                    </div>
                </div>
                <Footer/>
            </div>





    );
}


export default App;
