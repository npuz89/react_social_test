import s from "./css/newsposts.module.css";

function Newspost(props) {
    return (


            <div className={s.news}>
                <img src={props.img} alt=""/>
                <div className={s.dt}>
                    <h5>{props.title}</h5> <span className={s.time}>{props.datenews}</span>
                </div>

                <p>{props.text}</p>

            </div>



    );
}

export default Newspost
