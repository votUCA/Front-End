import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
//import { useElectionNameQuery } from '@Generated/hooks'
import routes from '@Routes'
import ElectionButton from './election'

const { Text } = Typography

const data = {
  election: [
    { name: 'Elecciones a Rector', dateInit: new Date(), dateEnd: new Date() },
    { name: 'Elecciones a Delegado', dateInit: new Date(), dateEnd: new Date() }
  ]
}

const ElectionView = () => {
  //https://es.reactjs.org/docs/lists-and-keys.html
  // <Header />
  //const { data, error } = useElectionNameQuery()
  //if (data) {
  return (
    <Row justify="center" className="body">
      <Row style={{ marginTop: '3%', marginBottom: '1%' }}>
        <Text strong style={{ fontSize: '20px' }}>
          Elecciones pendientes
        </Text>{' '}
      </Row>
      <Row>
        {data.election.map((election, index) => (
          <ElectionButton
            name={election.name}
            dateInit={election.dateInit}
            dateEnd={election.dateEnd}
          />
        ))}
      </Row>
    </Row>
  )
  // }

  //return <div>{JSON.stringify(error)}</div>
}

export default ElectionView
