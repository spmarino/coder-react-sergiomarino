import {React, useState, useEffect} from 'react'
import Item from '../Item/Item'

const ItemList = () => {

const[result, setResult] = useState(null)


const list = new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve([
            {id : 1, ProductName : "Vino Azul", stock : 5},
            {id : 2, ProductName : "Vino Blanco", stock : 3},
            {id : 3, ProductName : "Vino Verde", stock : 7},
            {id : 4, ProductName : "Vino Rosa", stock : 2},
        ])
    },2000);
}) 

useEffect(() => {

    if(!result){
        list.then((res,err) => {
            if (err) console.log(err)
            setResult(res)
        }).catch((error) => {
            console.log(error)
        }).finally(()=> console.log("Finalizado"))
    }
    console.log(result)
}, [result])

    
    // const ListItems =[
    //     {id : 1, ProductName : "Vino Azul", stock : 5},
    //     {id : 2, ProductName : "Vino Blanco", stock : 3},
    //     {id : 3, ProductName : "Vino Verde", stock : 7},
    //     {id : 4, ProductName : "Vino Rosa", stock : 2},
    //   ]

    return (
       <div style = {{display: "flex"}}>

{result && result.map((item =>(<Item key={item.id}
ProductName = {item.ProductName}
Stock ={item.stock}
Id ={item.id}/>) ))}

       
        </div>
    )
}

export default ItemList
