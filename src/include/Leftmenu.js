import s from "./css/leftmenu.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends";
import Posts from "./Posts";

function Leftmenu(props) {
    let Friend = props.fusers.friends.map(d => (<Friends name={d.name} />))
    return (
        <div className={s.leftmenu}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>Новости</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.item}><NavLink to="/coctails" activeClassName={s.active}>Coctails</NavLink></li>

                <li><a href="#" className={s.item}>Settings</a></li>

                <div className={s.fa}>
                    <h1>Friends</h1>
                    <div className={s.friendsBlock}>
                {Friend}
                    </div>
                </div>


            </ul>
        </div>
    );
}

export default Leftmenu