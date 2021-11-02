import {React, useEffect, useState} from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Loader from 'react-loader-spinner'
import {getFirestore} from '../services/getFirebase'

function Charaters() {



const endpoint = '/character';

const [characters, setCharacters] = useState ([])

const [loading, setLoading] = useState(true)


useEffect(() =>{
const db = getFirestore()

db.collection('Items').get()
/*db.collection('Items').doc().get()*/

.then(resp =>
    //console.log(resp)
    //const {data} = response
setCharacters(resp.docs.map(item =>({ id: item.id, ...item.data()})))
)

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
//console.log(characters)
characters.map(character => <Card key ={character.id} 
    character ={character}/>)
    }
   
        </Layout>
    )
}

export default Charaters
