import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetailsPage from '../Pages/DetailPage'
import HomePage from '../Pages/HomePage'
import PokedexPage from '../Pages/PokedexPage'

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
                <Route exact path='/detail'>
                    <DetailsPage/>
                </Route>
                <Route>
                    <HomePage/>
                </Route>
            </Switch>
            
        </BrowserRouter>
    )
}
