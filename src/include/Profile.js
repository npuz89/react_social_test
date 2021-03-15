import s from "./css/profile.module.css"
import Posts from "./Posts";
import Post from "./Post";
import ProfileUserInfo from "./ProfileInfoUser";



function Profile(props) {
    let Mess = props.posts.posts.map(d => (<Posts message={d.text} like={d.likes} />))
    return (

        <div>
            <ProfileUserInfo />
            <Post addPost={props.addPost}/>
            {Mess}

           {/* */}
           {/* */}

           {/*<Posts message={DataPosts[1].text} like={DataPosts[1].likes}/>*/}
           {/*<Posts message={DataPosts[2].text} like={DataPosts[2].likes}/>*/}
        </div>


    );
}

export default Profile