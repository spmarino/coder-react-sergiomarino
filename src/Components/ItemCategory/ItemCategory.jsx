import {React, useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import { api } from "../Utils/Api";
import Card from "../Card/Card";
import Loader from 'react-loader-spinner'
import { useParams } from "react-router";


function ItemCategory() {

   const {id} = useParams()


const endpoint = `/character/?gender=${id}`;

const [characters, setCharacters] = useState ([])

const [loading, setLoading] = useState(true)


useEffect(() =>{
api.get(endpoint)
.then(response =>{
    //console.log(response)
    const {data} = response
setCharacters(data.results)
})

setTimeout(() => {
    setLoading(false)
},2000)
}, [endpoint])


    return (
        <Layout style ={{display : "Center"}}>
{loading ? <Loader
type="Puff"
color="#00BFFF"
height={100}
width = {100}
timeout={3000} /> : 

characters.map(character => <Card key ={character.id} 
    character ={character}/>)
    }
   
        </Layout>
    )
}

export default ItemCategory
