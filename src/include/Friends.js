import s from "./css/friends.module.css"

function Friends(props) {
    return(


                <div className={s.an}>
                <div className={s.ava}></div>
                <p className={s.name}>{props.name}</p>
                </div>

    )
}

export default Friends