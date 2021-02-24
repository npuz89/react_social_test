import s from "./css/leftmenu.module.css"
import {Link} from "react-router-dom";

function Leftmenu() {
    return (
        <div className={s.leftmenu}>
            <ul>
                <li><Link to="/profile" className={`${s.item} ${s.active}`}>Profile</Link></li>
                <li><Link to="/dialogs" className={s.item}>Dialogs</Link></li>
                <li><Link to="/music" className={s.item}>Music</Link></li>
                <li><Link to="/news" className={s.item}>News</Link></li>
                <li><a href="#" className={s.item}>Settings</a></li>

            </ul>
        </div>
    );
}

export default Leftmenu