import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import TablaMultiplicar from './TablaMultiplicarComponent'
import NotFoundComponent from './NotFoundComponent'
import ConjeturaCollatz from './ConjeturaCollatz'
import MenuComponent from './MenuComponent'

export default class Router extends Component {
    render() {

        function TablaMlultiplicarElement() {
            let { numero } = useParams()
            return (<TablaMultiplicar numero={numero}/>)
        }

        function ConjeturaCollatzElement() {
            let { numero } = useParams()
            return (<ConjeturaCollatz numero={numero}/>)
        }

        return (
            <BrowserRouter>
                <MenuComponent/>
                <Routes>
                    <Route path='/' element={<HomeComponent/>}/>
                    <Route path='/tabla/:numero' element={<TablaMlultiplicarElement/>}/>
                    <Route path='/collatz/:numero' element={<ConjeturaCollatzElement/>}/>
                    <Route path='*' element={<NotFoundComponent/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
