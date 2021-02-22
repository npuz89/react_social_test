import s from "./css/leftmenu.module.css"

function Leftmenu() {
    return (
        <div className={s.leftmenu}>
            <ul>
                <li><a href="#" className={`${s.item} ${s.active}`}>web</a></li>
                <li><a href="#" className={s.item}>html</a></li>
                <li><a href="#" className={s.item}>css</a></li>
                <li><a href="#" className={s.item}>js</a></li>

            </ul>
        </div>
    );
}

export default Leftmenu