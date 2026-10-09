import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class DetallesComponent extends Component {

    urlCoches = Global.urlApiCoches

    state = {
        detalles: {}
    }

    loadDetalles = () => {
        let request = "api/Coches/FindCoche/" + this.props.id
        axios.get(this.urlCoches + request).then((response) => {
            console.log("Leyendo detalles del coche")
            this.setState({
                detalles: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDetalles()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id) {
            this.loadDetalles()
        }
    }

    render() {
        return (
            <div>
                <h3>Detalles de {this.state.detalles.marca}</h3>   
                <ul>
                    <li>Modelo: {this.state.detalles.modelo}</li>
                    <li>conductor: {this.state.detalles.conductor}</li>
                </ul>
                <img src={this.state.detalles.imagen}/>
            </div>
        )
    }
}
