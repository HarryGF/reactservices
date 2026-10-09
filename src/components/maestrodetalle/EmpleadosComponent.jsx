import React, { Component } from 'react'
import Global from '../../Global'
import axios from 'axios'

export default class EmpleadosComponent extends Component {

    urlEmpleados = Global.urlApiEmpleados

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let request = "api/empleados/empleadosdepartamento/" + this.props.id
        axios.get(this.urlEmpleados + request).then((response) => {
            console.log("Leyendo empleados")
            this.setState({
                empleados: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.id != this.props.id) {
            this.loadEmpleados()
        } 
    }

    render() {
            return (
                <div>
                    <ul>
                        {   
                            this.state.empleados.map((empleado, index) => {
                                return(
                                <li key={index}>
                                    {empleado.apellido}, Oficio: {empleado.oficio}
                                </li>)
                            })
                        }
                    </ul>
                </div>
            )
    }
}
