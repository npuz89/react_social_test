import {rerender} from "../render"


let state = {
    PostsPage: {
        posts : [
            {id: 1, text: "My name is Vlad!!!", likes: 22},
            {id: 2, text: "How are you?", likes: 45},
            {id: 3, text: "Ну и хули?)", likes:67}
        ]
    },
    DialogsPage: {
        dialoguser : [
            {id: 1, username: "Vlad"},
            {id: 2, username: "Den"},
            {id: 3, username: "Ildar"},
            {id: 4, username: "Rafa"},
            {id: 5, username: "Beko"}
        ],

        dialogusermessage : [
            {id: 1, text: "My name is Vlad"},
            {id: 2, text: "How are you?"},
            {id: 3, text: "Ну и хули?)"},
            {id: 4, text: "ахаха)"}
        ],

    },
    LeftMenuUser :{
        friends : [
            {id: 1, name: "Alex"},
            {id: 2, name: "Max"},
            {id: 3, name: "Igor"},
            {id: 4, name: "Alis"}
        ]
    },
    NewsPage : {
        news : [
            {id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.",
                title : "Название 1", datenews : "22.01.2021" ,
                img : "https://cdn25.img.ria.ru/images/07e4/04/0e/1570024908_0:75:2985:1754_1920x0_80_0_0_1b3a9a0118b4fc1dec8f1c31179f3775.jpg"},
            {id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.",
                title : "Название 2", datenews : "24.01.2021" ,
                img : "https://i.ytimg.com/vi/2vkn8k4Am4U/maxresdefault.jpg"},
            {id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.",
                title : "Название 3", datenews : "26.01.2021" ,
                img : "https://cdn25.img.ria.ru/images/07e4/09/03/1576677345_0:206:2947:1864_1920x0_80_0_0_16241bdb939419469e37b8bdbd0a8de5.jpg"},
            {id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, id.",
                title : "Название 4", datenews : "28.01.2021" ,
                img : "https://repost.uz/storage/uploads/0-1614015425-timur-post-material.jpeg"},
        ]
    }


    }
export let addPost = (postMessage) => {
        let newPost = {
            id: 4,
            text: postMessage,
            likes: 0
        };
        state.PostsPage.posts.push(newPost);
        rerender(state);
}

;

export default state