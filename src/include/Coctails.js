import React, {Component} from 'react';
import s from "./css/coctails.module.css"
import axios from 'axios';

class Coctails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.drinks
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <p>Error {error.message}</p>
        }else if(!isLoaded) {
            return <p>Loading...</p>
        }else {
            return (
                <>
                <p>Coctails</p>
                  <div className={s.parrentblock}>

                    {items.map(item => (
                        <div className={s.block} key={item.name}>
                            <div className={s.title}>
                                {item.title}
                            </div>
                                <div className={s.img}>
                                    <img src={item.strDrinkThumb} alt=""/>
                                </div>

                        </div>




                    ))}
                        </div></>

            )
        }


    }
    // state = {
    //     persons: []
    // }
    //
    // componentDidMount() {
    //     axios.get(`https://api.burgerking.de/api/o2uvrPdUY57J5WwYs6NtzZ2Knk7TnAUY/v4/de/de/coupons/`)
    //         .then(res => {
    //             const persons = res.data;
    //             this.setState({ persons });
    //         })
    // }
    //
    // render() {
    //     return (
    //         <ul>
    //             { this.state.persons.map(person => <li>{person.id}</li>)}
    //         </ul>
    //     )
    // }
}

export default Coctails;    