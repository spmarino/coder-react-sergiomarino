import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Layout from "../Layout/Layout";
import Loader from 'react-loader-spinner'


const ItemDetailContainer = () => {

const {id} = useParams()
const endpoint = `https://rickandmortyapi.com/api/character/${id}`

const [Item, setItem] = useState("")
const [loading, setLoading] = useState(true)

const getItem = async () => {

try {

    const resp = await axios.get (endpoint)
    setItem(resp.data)
}catch (error) {
    console.log(error)
}   
}

useEffect(()=> {
getItem()

setTimeout(() => {
    setLoading(false)
},2000)},
 [])


return(
    <Layout>
        {loading ? <Loader
type="Puff"
color="#00BFFF"
height={100}
width = {100}
timeout={3000} /> :

<ItemDetail Item= {Item} />}

    </Layout>
    
        
        
)
};

export default ItemDetailContainer;