import s from "./css/profile.module.css"
import Posts from "./posts";
import Post from "./post";

function Profile() {
    return (

        <div>
            <div className={s.fon}>
                <img src="https://i.pinimg.com/originals/74/14/81/741481e345d6805a4c55aa31a6123f15.jpg" alt=""/>
            </div>
            <div className={s.ai}>
                <div className={s.ava}>
                    <img src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg" alt=""/>
                </div>
                <div className={s.info}>
                    <h3>Viktor N M</h3>
                    <p>Date : 14 jan 2020</p>
                    <p>City : Moscow</p>
                    <p>Web-site : MySite.uz</p>
                    <p>Number: +998 90 999 0990</p>
                </div>
            </div>
            <Post />

           <Posts message="Hi" like="20"/>
           <Posts message="My name is Vlad" like="30"/>
        </div>


    );
}

export default Profile