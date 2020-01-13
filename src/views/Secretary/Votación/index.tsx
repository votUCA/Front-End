import React from 'react'
import ReactDOM from 'react-dom';
import {
  Card,
  Input,
  Button,
  Typography,
  Tabs,
  Select,
  InputNumber,
  DatePicker,
  Transfer
} from 'antd'
import Selector from './select';
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker, MonthPicker } = DatePicker
const f = new Date()
const format = 'HH:mm'
const { Option, OptGroup } = Select
const { TextArea } = Input

var targetkeys :string[] = [];
var selectedkeys:any[] = [];

const children: any[] = []
for (let i = 10; i < 36; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    chosen: Math.random() * 2 > 1,
  };
  if (data.chosen) {
    targetkeys.push(data.key);
  }
  children.push(data);
}

var PDVP:any;
var n_propuestas:any;
var PAS:any;
var PDINVP:any;
var PNDVP:any;
var n_votaciones:any;
var p3:any = true;
var p4:any = true;


function cambioP1(value:any){
  PDVP = value;
}

function cambioP2(value:any){
  PDINVP = value;
}

function cambioP3(value:any){
  PNDVP = value;
}

function cambioP4(value:any){
  PAS = value;
}

function cambioPropuestas(value:any){
  p3= true;
  p4= true;  
  n_propuestas = value;
  if(value>3)
    p3 = false;
  if(value>4){
      p3 = false;
      p4 = false;
  }
     
}



  
function numerovotaciones(value: any) {
  n_votaciones = value;
}

function changefecha(value: any, fechas: any) {
  var start = new Date(value[0].valueOf())
  var end = new Date(value[1].valueOf())
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}



function organo(value:any) {

  console.log('hola');
  
}

const CrearVotacion = () => {
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <body>
      <Text strong style={{ fontSize: '25px' }}>
        Crear votación
      </Text>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Votación Simple" key="1">
          <form>

          <Text strong style={{ fontSize: '20px' }}>
        Título de la votación
      </Text>

      <br></br>

      <Input placeholder="Título" style={{ width: "30%" }}  />

      <br></br>

        <Text strong style={{ fontSize: '20px' }}>
        Descripción de la votación
      </Text>
      <br></br>

      <TextArea rows={4} placeholder="Propuesta" style={{ width: "30%" }} />
            
            <br></br>
            <br></br>
            <Text style={{ fontSize: '20px' }}>Duración:</Text>
            <br></br>
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br></br>
            <br></br>
            <Button style={{ background: '#206489',color:'#FFFFFF' }}>Enviar</Button>
            <Button style={{ background: '#FFA500' }}>Cancelar</Button>
          </form>
        </TabPane>
        <TabPane
          tab="Votación Compleja"
          key="2">

            <Text strong style={{ fontSize: '20px' }}>
              Título de la votación
            </Text>

      <br></br>

      <Input placeholder="Título" style={{ width: "30%" }}  />

      <br></br>

        <Text strong style={{ fontSize: '20px' }}>
        Propuestas
      </Text>
      <br></br>

      <Text strong style={{ fontSize: '13px' }}>
        Número de propuestas
      </Text>
            <InputNumber
      defaultValue={2}
      min={2}
      max={4}
      onChange={cambioPropuestas}
    />
    <br></br>
    <br></br>
    <Text strong style={{ fontSize: '13px' }}>
        Máximo número de votaciones
      </Text>

    <InputNumber
      defaultValue={1}
      min={1}
      max={10}
      onChange={numerovotaciones}
    />
    <br></br>

    <Input placeholder="Propuesta 1" style={{ width: "30%" }} />
    <br></br>

    <Input placeholder="Propuesta 2" style={{ width: "30%" }}  />
    <br></br>

    <Input placeholder="Propuesta 3" style={{ width: "30%" }}   disabled={p3}/>
    <br></br>

    <Input placeholder="Propuesta 4" style={{ width: "30%" }}  disabled={p4} />
    <br></br>





            <Text strong style={{ fontSize: '20px' }}>Duración:</Text>
            <br></br>
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br></br>
            <br></br>
            <Button style={{ background: '#206489',color:'#FFFFFF' }}>Enviar</Button>
            <Button style={{ background: '#FFA500' }}>Cancelar</Button>
            </TabPane>

            <TabPane
          tab="Votación Presencial"
          key="3">



<Text strong style={{ fontSize: '20px' }}>
              Título de la votación
            </Text>

      <br></br>

      <Input placeholder="Título" style={{ width: "30%" }}  />

      <br></br>
      <Text strong style={{ fontSize: '20px' }}>
        Candidatos
      </Text>
      <br></br>

          <Select defaultValue="Organo colectivo" 
          style={{ width: "30%" }} 
          onChange={organo}
          >
            <Option value="PAS">PDVP</Option>
            <Option value="PDI">PNDVP</Option>
            <Option value="alumnos">PDINVP</Option>
            <Option value="alumnos">PAS</Option>
            <Option value="alumnos">ALU</Option>
          </Select>

          <br></br>
          <br></br>
            <Selector/>

            
            
            <br></br>
            <br></br>
        <Text strong style={{ fontSize: '20px' }}>
        Propuestas
      </Text>
      <br></br>

      <Text strong style={{ fontSize: '13px' }}>
        Número de propuestas
      </Text>
            <InputNumber
      defaultValue={2}
      min={2}
      max={4}
      onChange={cambioPropuestas}
    />
    <br></br>
    <br></br>
    <Text strong style={{ fontSize: '13px' }}>
        Máximo número de votaciones
      </Text>

    <InputNumber
      defaultValue={1}
      min={1}
      max={10}
      onChange={numerovotaciones}
    />
    <br></br>

    <Input placeholder="Propuesta 1" style={{ width: "30%" }} />
    <br></br>

    <Input placeholder="Propuesta 2" style={{ width: "30%" }}  />
    <br></br>

    <Input placeholder="Propuesta 3" style={{ width: "30%" }}   disabled={p3}/>
    <br></br>

    <Input placeholder="Propuesta 4" style={{ width: "30%" }}  disabled={p4} />
    <br></br>





            <Text strong style={{ fontSize: '20px' }}>Duración:</Text>
            <br></br>
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <br></br>
            <br></br>
            <Button style={{ background: '#206489',color:'#FFFFFF' }}>Enviar</Button>
            <Button style={{ background: '#FFA500' }}>Cancelar</Button>




          </TabPane>


      </Tabs>
    </body>
  )
}

export default CrearVotacion