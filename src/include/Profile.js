import s from "./css/profile.module.css"
import Posts from "./Posts";
import Post from "./Post";
import ProfileUserInfo from "./ProfileInfoUser";

let DataPosts = [
    {id: 1, text: "My name is Vlad", likes: 22},
    {id: 2, text: "How are you?", likes: 45},
    {id: 3, text: "Ну и хули?)", likes:67}
];
let Mess = DataPosts.map(d => (<Posts message={d.text} like={d.likes}/>))
function Profile() {
    return (

        <div>
            <ProfileUserInfo />
            <Post />
            {Mess}

           {/* */}
           {/* */}

           {/*<Posts message={DataPosts[1].text} like={DataPosts[1].likes}/>*/}
           {/*<Posts message={DataPosts[2].text} like={DataPosts[2].likes}/>*/}
        </div>


    );
}

export default Profile