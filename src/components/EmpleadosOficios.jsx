import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'
import './EmpleadosOficios.css'

export default class EmpleadosOficios extends Component {

    selectOficio = React.createRef()
    urlEmpleados = Global.urlApiEmpleados

    buscarEmpleados = (event) => {
        event.preventDefault()
        let oficio = this.selectOficio.current.value
        let request = "api/empleados/empleadosoficio/" + oficio
        axios.get(this.urlEmpleados + request).then((response) => {
            this.setState({
                empleados:response.data
            })
        })
    }

    loadOficios = () => {
        let request = "api/empleados/"
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo oficios")
            let aux = new Set([])   // El metodo set no permite repetidos
            for (let datos of response.data) {
                aux.add(datos.oficio)
            }
            this.setState({
                oficios: Array.from(aux)
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios()
    }

    state = {
        oficios: [],
        empleados: []
    }

    render() {
        return (
            <div>
                <h1>Api Empleados Oficios</h1>
                <form>
                    <label>Seleccione oficio:</label>
                    <select ref={this.selectOficio}>
                        {
                            this.state.oficios.map((oficio, index) => {
                                return(<option>
                                    {oficio}
                                </option>)
                            })
                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Buscar empleados
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((empleado, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{empleado.apellido}</td>
                                        <td>{empleado.oficio}</td>
                                        <td>{empleado.salario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}
