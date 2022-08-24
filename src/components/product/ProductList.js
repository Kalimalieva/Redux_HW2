import React from 'react';
import ProductItem from "./ProductItem";
import classes from './productList.module.css'


function ProductList({addToBasket}) {
    const products = [
        {
            id: 1,
            name: "Яблоко"
        },
        {
            id: 2,
            name: "Груша"
        },
        {
            id: 3,
            name: "Банан"
        },
        {
            id: 4,
            name: "Апельсин"
        },
        {
            id: 5,
            name: "Мандарин"
        }
    ]
    return (
        <div className={classes.list}>
            <h1>Список товаров!</h1>
            {products.map(product => <ProductItem
                    item={product}
                    key={product.id}
                    addToBasket={addToBasket}
                />
            )}
        </div>
    );
}

export default ProductList;