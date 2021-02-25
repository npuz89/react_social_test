import "./css/dialogs.module.css"
import s from "./css/dialogs.module.css"
import {NavLink} from "react-router-dom";

function Dialogs(){
    return(
        <div className={s.dialogs}>
            <div className={s.dialog}>
                <div className={s.userName + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Vlad</NavLink>
                </div>
                <div className={s.userName}>
                    <NavLink to="/dialogs/2">Den</NavLink>
                </div>
                <div className={s.userName}>
                    <NavLink to="/dialogs/1">Ildar</NavLink>
                </div>
            </div>
            <div className={s.message}>
                <div className={s.userMessage}>
                    Hello
                </div>
                <div className={s.userMessage}>
                    My name is Vlad
                </div>
            </div>

        </div>
    )
}

export default Dialogs