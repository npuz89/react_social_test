import s from "./css/post.module.css";

function Post() {
    return (

        <div>
            <h3>My posts</h3>
            <textarea rows="5" cols="60" name="text" placeholder="Ваш текст"></textarea>
            <br/>
            <input type="submit" value="Отправить" className={s.send} />
        </div>


    );
}

export default Post

