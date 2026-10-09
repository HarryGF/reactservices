import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import DetallesComponent from './DetallesComponent'

export default class CocheComponent extends Component {

    selectCoche = React.createRef()
    urlCoches = Global.urlApiCoches

    state = {
        coches: [], 
        idCoche: 0
    }

    loadCoches = () => {
        let request = "/api/Coches/"
        axios.get(this.urlCoches + request).then((response) => {
            console.log("Leyendo coches")
            this.setState({
                coches: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadCoches()
    }

    mostrarDetalles = (event) => {
        event.preventDefault()
        let id = this.selectCoche.current.value
        this.setState({
            idCoche: id
        })
    }

    render() {
        return (
            <div>
                <h1>Api Coches</h1>
                <form onSubmit={this.mostrarDetalles}>
                    <label>Seleccione coche</label>
                    <select ref={this.selectCoche}>
                        {
                            this.state.coches.map((coche, index) => {
                                return(<option key={index} value={coche.idCoche}>
                                    {coche.marca}
                                </option>)
                            })
                        }
                    </select>
                    <button>
                        Mostrar detalles
                    </button>
                </form>
                {
                    this.state.idCoche != 0 &&
                    (<DetallesComponent id={this.state.idCoche}/>)
                }
            </div>
        )
    }
}
