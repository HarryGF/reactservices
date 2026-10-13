import React, { Component } from 'react'
import './MenuComponent.css'
import { NavLink } from 'react-router-dom'

export default class MenuComponent extends Component {

    numeros = [1,2,3,4,5,6,7,8,9,10]
    render() {
        return (
            <div id='menu'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    {
                        this.numeros.map((numero,index) => {
                            let ruta = "/tabla/" + numero
                            return(<li>
                                <NavLink to={ruta}>
                                    Tabla multiplicar {numero}
                                </NavLink>
                            </li>
                            )
                        })
                    }
                    <li>
                        <NavLink to="/collatz/356">Conjetura Collatz 356</NavLink>
                    </li>
                    <li>
                        <NavLink to="/collatz/3">Conjetura Collatz 3</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
