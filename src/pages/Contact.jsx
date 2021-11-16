import{useState}from 'react'
import Img from '../images/Foto.png'
import { Img2, DivContainer, Title, Body, Ul, A } from "./PageStyle";
import Loader from "react-loader-spinner";
import Layout from "../Components/Layout/Layout";

const Contact = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return (
        <Layout>

{loading ? (
        <Loader
          type="Audio"
          color="#256ce1"
          height={80}
          width={80}
          timeout={3000}
        />
      ) : (<DivContainer>

            <Img2 src={Img} alt="" />
            <Title>Sergio Mariño</Title>


            <Body>Mi nombre es Sergio Mariño tengo 29 años vivo en la localidad de Tigre Provincia de Buenos Aires, soy desarrollador web full stack en Node Js (1 año de experiencia) y desarrollador BackEnd Trainee en Ruby on Rails (6 Meses), cuento además con conocimientos en análisis y bases de datos, este proyecto fue realizado para completar el curso de React Js de CoderHouse</Body>

            <Title>Canales de Comunicación</Title>
            <Ul>
                <li><A href="http://https://www.linkedin.com/in/spmarino">Linkedin</A></li>
                <li><A href="http://https://www.github.com/spmarino">Github</A></li>
                <li>spmarino@hotmail.com</li>
               
            </Ul>


            </DivContainer>)}
        </Layout>
    )
}

export default Contact
