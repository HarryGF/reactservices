import React, { Component } from 'react'
import './MenuComponent.css'

export default class MenuComponent extends Component {

    numeros = [1,2,3,4,5,6,7,8,9,10]
    render() {
        return (
            <div id='menu'>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    {
                        this.numeros.map((numero,index) => {
                            let ruta = "/tabla/" + numero
                            return(<li>
                                <a href={ruta}>Tabla multiplicar {numero}</a>
                            </li>
                            )
                        })
                    }
                    <li>
                        <a href="/collatz/356">Conjetura Collatz 356</a>
                    </li>
                    <li>
                        <a href="/collatz/3">Conjetura Collatz 3</a>
                    </li>
                </ul>
            </div>
        )
    }
}
