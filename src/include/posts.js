import s from "./css/posts.module.css"

function Posts(props) {
    return (


            <div className={s.messages}>
                <div className={s.avauser}></div>
                <p>{props.message}</p>
            </div>



    );
}

export default Posts