import {
  Button,
  Card,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tabs,
  Typography,
} from 'antd'
import { Formik } from 'formik'
import { SubmitButton } from 'formik-antd'
import React from 'react'
import * as Yup from 'yup'
import './index.less'
import Selector from './select'
// import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography
const { TabPane } = Tabs
const { RangePicker, MonthPicker } = DatePicker
const f = new Date()
const format = 'HH:mm'
const { Option, OptGroup } = Select

const targetkeys: string[] = []
const selectedkeys: any[] = []

const children: any[] = []
for (let i = 10; i < 36; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    chosen: Math.random() * 2 > 1,
  }
  if (data.chosen) {
    targetkeys.push(data.key)
  }
  children.push(data)
}

function numerovotaciones(value: any) {
  console.log(`selected ${value}`)
  console.log('LAS TARGET LOKO', targetkeys)
}

function changefecha(value: any, fechas: any) {
  const start = new Date(value[0].valueOf())
  const end = new Date(value[1].valueOf())
}

function comprobarinicio(currentDate: any) {
  return f.valueOf() > currentDate.valueOf()
}

const schema = Yup.object().shape({
  validate: Yup.boolean().oneOf([true]),
  election: Yup.string().required(),
})

function organo(value: any) {
  console.log('hola')
}

const ModificarEleccion = () => {
  // const { data, error } = useElectionNameQuery()
  // if (data) {
  return (
    <Col>
      <body>
        <Text strong style={{ fontSize: '25px' }}>
          Crear elección
        </Text>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Eleccion de representantes" key="1">
            <form>
              <Formik
                onSubmit={values => {
                  console.log(values)
                  // await vote({variables: { input: { elections: [values.election], poll:id }}})
                }}
                initialValues={{
                  validate: false,
                  election: '',
                  organo: '',
                  selector: '',
                  inputNumber: 0,
                }}
                initialErrors={{ validate: '', election: '' }}
                validateOnBlur={false}
                validationSchema={schema}
              >
                {() => (
                  <Col>
                    <Select
                      defaultValue="Organo colectivo"
                      style={{ width: '30%' }}
                      // name="organo"
                    >
                      <Option value="PAS">PDVP</Option>
                      <Option value="PDI">PNDVP</Option>
                      <Option value="alumnos">PDINVP</Option>
                      <Option value="alumnos">PAS</Option>
                      <Option value="alumnos">ALU</Option>
                    </Select>
                    <Selector /* name="selector" */ />
                    <InputNumber
                      min={1}
                      max={10}
                      placeholder="Número máximo de votaciones"
                      name="inputNumber"
                    />
                    <Text style={{ fontSize: '20px' }}>Duración:</Text>
                    <RangePicker
                      disabledDate={comprobarinicio}
                      name="rangePicker"
                    />
                    <br />
                    <br />
                    <SubmitButton
                      style={{ background: '#206489', color: '#FFFFFF' }}
                    >
                      Enviar
                    </SubmitButton>
                    <Button style={{ background: '#FFA500' }}>Cancelar</Button>
                    */
                  </Col>
                )}
              </Formik>
            </form>
          </TabPane>

          <TabPane tab="Elección de cargos unipersonales" key="2">
            <Col>
              <Card className="card2">
                <Text style={{ fontSize: '20px' }}>Título de la Elección</Text>
              </Card>

              <Input placeholder="Título" />
              <Card className="card2">
                <Text style={{ fontSize: '20px' }}>Candidatos</Text>
              </Card>
              <Selector />

              <Card className="card2">
                <Text style={{ fontSize: '20px' }}>Ponderación</Text>
              </Card>
              <Row
                type="flex"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10%',
                  fontSize: '15px',
                  flex: '1',
                }}
              >
                <Col style={{ width: '40%', marginLeft: '10%' }}>
                  <Row style={{ paddingBottom: '10px' }}>
                    <Text strong>
                      {' '}
                      Profesores Doctores con Vinculación Permanente (PDVP)
                    </Text>
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <Text strong>
                      {' '}
                      Profesores No Doctores con Vinculación Permanente (PNDVP)
                    </Text>
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <Text strong>
                      {' '}
                      PDI Doctores sin vinculación Permanente (PDINVP) <br />
                    </Text>
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <Text strong>
                      Personal de Administración de Servicios (PAS)%
                    </Text>
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <Text strong>Estudiantes (ALU)</Text>
                  </Row>
                </Col>
                <Col style={{ width: '50%' }}>
                  <Row style={{ paddingBottom: '10px' }}>
                    <InputNumber min={1} max={100} defaultValue={1} /> %
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <InputNumber min={1} max={100} defaultValue={1} /> %
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <InputNumber min={1} max={100} defaultValue={1} /> %
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <InputNumber min={1} max={100} defaultValue={1} /> %
                  </Row>
                  <Row style={{ paddingBottom: '10px' }}>
                    <InputNumber min={1} max={100} defaultValue={1} /> %
                  </Row>
                </Col>
              </Row>
            </Col>

            <Card className="card2">
              <Text style={{ fontSize: '20px' }}>Duración:</Text>
            </Card>
            <RangePicker
              disabledDate={comprobarinicio}
              onChange={changefecha}
            />
            <Row>
              <Button style={{ background: '#206489', color: '#FFFFFF' }}>
                Cancelar
              </Button>
              <Button style={{ background: '#FFA500', color: '#FFFFFF' }}>
                Crear Elección
              </Button>{' '}
            </Row>
          </TabPane>
        </Tabs>
      </body>
    </Col>
  )
}

export default ModificarEleccion
