import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div>
            <h1>Categories</h1>
            <br />
            <ul>
                <p><Link to ={`/category/male`}>Gender: Male</Link></p>
                <p><Link to ={`/category/female`}>Gender: Female</Link></p>
            </ul>
        </div>
    )
}

export default Categories
