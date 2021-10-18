import {React, useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import { api } from "../Utils/Api";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router";

function ItemDetailCointainer() {
    
const { ItemId } = useParams()

const endpoint = `/character/${ItemId}`

console.log(endpoint)

const [character, setCharacter] = useState ([])

const [loading, setLoading] = useState(true)


useEffect(() =>{
api.get(endpoint)
.then(response =>{
    //console.log(response)
    const {data} = response
setCharacter(data.results)
})

setTimeout(() => {
    setLoading(false)
},3000)
}, [endpoint])


     return (
        <Layout style ={{display : "Center"}}>

<ItemDetail character/>
    
   
        </Layout>
    )
}

export default ItemDetailCointainer
