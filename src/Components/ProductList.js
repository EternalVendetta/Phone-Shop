// Library
import React, { Component } from 'react';
// Components imported
import Product from './Product';

// Class Component
class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>Hello from ProductList</h3>
                <Product />
            </div>
        )
    }
}

export default ProductList