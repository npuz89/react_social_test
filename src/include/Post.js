import React from "react"
import s from "./css/post.module.css";

function Post(props) {
    let newPostElement = React.createRef();

        function addPost() {
            let text = newPostElement.current.value;
            props.addPost(text)
            newPostElement.current.value = " "; // Делает форму пустой
    }


    return (

        <div>
            <h3>My posts</h3>
            <textarea rows="5" cols="60" name="text" placeholder="Ваш текст" ref={newPostElement}></textarea>
            <br/>
            <input type="submit" value="Отправить" className={s.send} onClick={addPost}/>
        </div>


    );
}

export default Post

