import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import { MenuButton } from '@Views'
//import { useElectionNameQuery } from '@Generated/hooks'
const { Text } = Typography

const data = {
  data: [
    { name: 'Gestionar Usuario', url: '/' },
    { name: 'Delegar Secretario', url: '/' }
  ]
}

const MenuAdmin = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
        <Text strong style={{ fontSize: '20px' }}>
          Seleccione la operación que desee realizar:
        </Text>
      </Row>
      <Row>
        {data.data.map((data, index) => (
          <MenuButton name={data.name} url={data.url} />
        ))}
      </Row>
    </Row>
  )
  // }

  //return <div>{JSON.stringify(error)}</div>
}

export default MenuAdmin