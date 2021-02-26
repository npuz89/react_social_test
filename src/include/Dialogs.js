import "./css/dialogs.module.css"
import s from "./css/dialogs.module.css"

import {NavLink} from "react-router-dom";
import DialogsUser from "./DialogsUser";
import Dialogmessage from "./Dialogmessage";
import Posts from "./Posts";


let DialogUser = [
    {id: 1, username: "Vlad", text: "My name is Vlad"},
    {id: 2, username: "Den", text: "My name is Vlad"},
    {id: 3, username: "Ilder", text: "My name is Vlad"}
];
let DialogUserMessage = [
    {id: 1, text: "My name is Vlad"},
    {id: 2, text: "How are you?"},
    {id: 3, text: "Ну и хули?)"},
    {id: 4, text: "ахаха)"}
];




let DialUser = DialogUser.map(du => (<div className={s.userName + ' ' + s.active}><DialogsUser username={du.username} id={du.id} /></div>))
let DialUserMess = DialogUserMessage.map(dum => (<div className={s.userMessage}><Dialogmessage text={dum.text} /></div>))

function Dialogs(){
    return(
        <div className={s.dialogs}>
            <div className={s.dialog}>

                    {DialUser}

            </div>
            <div className={s.message}>

                {DialUserMess}

            </div>

        </div>
    )
}

export default Dialogs