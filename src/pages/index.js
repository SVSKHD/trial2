import React from "react"
import Layout from "../components/layout/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles.css"
import {FaCarSide,FaCaravan,FaShuttleVan,FaWhatsapp} from "react-icons/fa"
import {Container,Row,Col,Button} from "reactstrap"
import Type from "../components/Typed";
import Cardx from "../components/Card";
import Toggle from "../components/Toggle";

const year = new Date().getFullYear()
const day = new Date().getDate()
// time
const hours = new Date().getHours()
const Minutes = new Date().getMinutes() 

const IndexPage = () => (
  
  <div>
  <Layout>
      <div>
        <Container>
          <Row>
          
          <Col xs="12" md="6" lg="6">
          <Cardx
          title={"Welcome To Locomotive services in Tirupati"}
          body={`${day}/${year}`}
          Time={`${hours}:${Minutes}`}
          />
          <h1 className="display-4"><b>Avail our Services for</b></h1>
          <div className="display-3"><b><Type/></b></div>
          
          </Col>
         
          <Col xs="12" md="6" lg="6">
          <div className="icons">
          <div className="firsticon"><Button outline color="dark"><FaCarSide size={100}/></Button></div>
          <div className="secondicon"><Button outline color="dark"><FaShuttleVan size={100}/></Button></div>
          <div className="thirdicon"><Button outline color="dark"><FaCaravan size={100}/></Button></div>
          </div>
          </Col>
         </Row>
         </Container>
         <hr/>
         <Container>
           <Row>
           <Col>
           <Toggle/>
           </Col>
           <Col>
           <h3>Contact us</h3>
           <Button size="sm" href="https://wa.me/9553419654" target="_blank" outline color="dark"><FaWhatsapp size={30}/></Button>
           </Col>
           </Row>
          </Container>
      </div>
 </Layout>
 </div>
)

export default IndexPage
