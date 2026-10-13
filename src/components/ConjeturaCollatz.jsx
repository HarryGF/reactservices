import React, { Component } from 'react'

export default class ConjeturaCollatz extends Component {

    state = {
        numeros: []
    }

    generarNumerosCollatz = () => {
        let aux = []
        let numero = parseInt(this.props.numero)
        while (numero != 1) {
            if (numero % 2 == 0) {
                numero = numero / 2
            } else {
                numero = numero * 3 + 1 
            }
            aux.push(numero)
        }
        this.setState({
            numeros: aux
        })
    }

    componentDidMount = () => {
        this.generarNumerosCollatz()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.numero != this.props.numero) {
            this.generarNumerosCollatz()
        } 
    } 


    render() {
        return (
            <div>
                <h1>Conjetura Collatz Routing</h1>
                <h3>
                    Número: {this.props.numero}
                </h3>
                <ul className='list-group'>
                    {
                        this.state.numeros.map((num, index) => {
                            return (<li className='list-group-item' key={index}>
                                {num}
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
