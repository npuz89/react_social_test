import s from "./css/profile.module.css"

function Profile() {
    return (

        <div className={s.content}>
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
            <div>
                <h3>My posts</h3>
                <textarea rows="5" cols="60" name="text" placeholder="Ваш текст"></textarea>
                <br/>
                <input type="submit" value="Отправить" className={s.send} />
            </div>

            <div className={s.messages}>
                <div className={s.avauser}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, vitae?</p>
            </div>
            <div className={s.messages}>
                <div className={s.avauser}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, vitae?</p>
            </div>
        </div>


    );
}

export default Profile