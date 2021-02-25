import s from "./css/leftmenu.module.css"
import {NavLink} from "react-router-dom";

function Leftmenu() {
    return (
        <div className={s.leftmenu}>
            <ul>
                <li className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
                <li className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
                <li className={s.item}><NavLink to="/coctails" activeClassName={s.active}>Coctails</NavLink></li>

                <li><a href="#" className={s.item}>Settings</a></li>

            </ul>
        </div>
    );
}

export default Leftmenu