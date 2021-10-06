import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const nav = () => {
    return (
        <div>
            <span>Logo</span>
            <ul>
                <li><a href="/#">Link 1</a></li>
                <li><a href="/#">Link 2</a></li>
                <li><a href="/#">Link 3</a></li>
                <li><a href="/#">Link 4</a></li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default nav
