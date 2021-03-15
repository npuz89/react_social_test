import s from "./css/news.module.css"
import Newspost from "./Newspost";

function News(props){
    let Newsposts = props.posts.news.map(d => (<Newspost text={d.text} title={d.title} img={d.img} datenews={d.datenews} />))
    return(
        <div>
            <h1>Новости</h1>

            <div className={s.blockNews}>
            {Newsposts}

                {/*<Newspost />*/}


            </div>
        </div>
    );

}

export default News
