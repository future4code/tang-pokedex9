import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailsPage from '../Pages/DetailPage'
import HomePage from '../Pages/HomePage'
import PokedexPage from '../Pages/PokedexPage'
import ErrorPage from "../Pages/ErrorPage";
import BattlePage from '../Pages/BattlePage'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/pokedex'>
                    <PokedexPage/>
                </Route>
                <Route exact path='/detail/:pokeId'>
                    <DetailsPage/>
                </Route>
                <Route exact path='/battle/'>
                    <BattlePage/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
            
        </BrowserRouter>
    )
}
