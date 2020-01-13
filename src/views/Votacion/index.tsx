import { Typography, Button, Checkbox, Row, Col, Layout } from "antd";
import React from "react";
import { Radio, Input } from "antd";
import "./index.less";
import {useOptionsQuery, useVotePollMutation} from "@Generated/hooks"
import wallpaper from "../../assets/Wallpaper2.png";
import { useParams } from "react-router-dom";
import { bool, boolean } from "yup";


const { Text } = Typography;
type Props = {
  id: string;
};

type VotePollInput = {
  options: string;
  poll: string;
  }

  const vote = {
    VotePollInput: {
      options: "",
      poll: ""
    }
  }

  /*
const votar = () =>{
  return (
    useVotePollMutation(data.VotePollInput);
  );
}
*/

const disabled = {
  state: boolean
}

const Votacion = (props: any) => {
  const {id} = useParams();
  const {id:poll} = useParams<{id:string}>();
  const {data} = useOptionsQuery({variables:{id:poll}});
  const [vote] = useVotePollMutation();
   
      const radioStyle = {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      };


      return (
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: "100%" }}
        >
          <Col
            style={{
              width: "50%",
              height: "100%",
              textAlign: "center"
            }}
          >
            <Layout
              style={{
                height: "100%",
                backgroundImage: "url(" + wallpaper + ")"
              }}
            >
             
            <Row
                type="flex"
                justify="center"
                //align="middle"
                style={{
                  marginTop: "25%"
                }}
              > 
              <Text strong style={{ fontSize: "30px", lineHeight: "100%" }}>
                  Votación <br></br> {data?.election.description.substring(0, 100-3) + '...'} 
                </Text>
              </Row>
        
               
            </Layout>
          </Col>
          <Col
            style={{
              width: "50%",
              height: "100%"
            }}
          >
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: "100%" }}
            >
              <Radio.Group /*onChange={this.onChange} value={this.state.value hay que poner {props}*/
              >
                <Col>
                  <Text strong style={{ fontSize: "22px" }}>
                    Su voto:
                  </Text>
                  <br></br>
                  {data?.election.candidates.map((option, index) => (
                  <Button className="button" style={{ marginTop: "3%" }} /*onClick ={()=>{
                    vote = {
                      VotePollInput: {
                        options: {option.id} ,
                        poll: {data.id}
                      }
                    }
                  }}*/>
                    <Row style={{marginTop: "auto"}}>
                    <Radio style={radioStyle} value={index}>
                    {option.firstName} {option.lastName}
                    </Radio></Row>
                  </Button>))}

               
                </Col>
                <Row
                  style={{
                    display: "flex",
                    alignContent: "space-between",
                    width: "100%"
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#206489",
                      width: "70%",
                      marginRight: "auto"
                    }}
                  >
                    <Checkbox /*onChange={
                      
                      }*/>
                      <Text style={{ color: "#FFFFFF" }}>
                        Validar mi elección
                      </Text>
                    </Checkbox>
                  </Button>

                  <Button type="primary" /*disabled = {disabled.state}onClick = {() => votar()}*/>
                    Vota!
                  </Button>
                </Row>
              </Radio.Group>
            </Row>
          </Col>
        </Row>
      );
    }
  




export default Votacion;
