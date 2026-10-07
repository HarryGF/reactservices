import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class ComponentServiceSuppliers extends Component {

    cajaId = React.createRef()

    searchSupplier = (event) => {
        event.preventDefault()
        let id = parseInt(this.cajaId.current.value)
        let request = "Suppliers"
        axios.get(Global.urlNorthWind + request).then((response) => {
            for (let elem of response.data.value) {
                if (elem.SupplierID == id) {
                    this.setState({resultado:elem})
                    break;
                }
            }
        })
    }

    state = {
        suppliers: [], resultado: null
    }

    loadSuppliers = () => {
        console.log("Antes del servicio");
        let request = "Suppliers"
        axios.get(Global.urlNorthWind + request).then((response) => {
            console.log("Leyendo servicio");
            this.setState({
              suppliers: response.data.value
            })
        })
        console.log("Despues del servicio");
    }

    componentDidMount = () => {
      this.loadSuppliers();
    }

    render() {
        return (
            <div>
                <h1>Service Api Suppliers</h1>
                <form>
                    <label>Id: </label>
                    <input type='text' ref={this.cajaId}/>
                    <button onClick={this.searchSupplier}>
                        Buscar
                    </button>
                </form>
                {
                    this.state.resultado && 
                    (
                        <div>
                            <h2>Contact: {this.state.resultado.ContactName}</h2>
                            <h2>Title: {this.state.resultado.ContactTitle}</h2>
                            <h2>Address: {this.state.resultado.Address}</h2>
                        </div>
                    )
                }
                <ul>
                    {
                        this.state.suppliers.map((supplier, index) => {
                            return (
                            <li key={index}
                            style={{color:"blue"}}>
                                ID: {supplier.SupplierID},
                                Contacto: {supplier.ContactName}
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
