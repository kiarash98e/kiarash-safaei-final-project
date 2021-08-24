import React from 'react'
import {
    Switch,Route
} from 'react-router-dom'
import {
    Home,
    Product,
    Men,
    Women,
    Cart
} from '../pages/page.index'
import SingleProduct from '../pages/SingleProduct/SingleProduct'

function Routes() {
    return (
        <>
           
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Men" component={Men} />
                <Route exact path="/Women" component={Women} />
                <Route exact path="/products" component={Product} />
                <Route exact path="/cart" component={Cart} /> 
                <Route exact path="/products/:id" component={SingleProduct} />
            </Switch>
        </>
    )
}


export default Routes
