import { usePastElectionResultsQuery } from '@Generated/hooks'
import { Row, Typography, Layout } from 'antd'
import React from 'react'
import Background from '../../../assets/Wallpaper.png'
import ElectionButton from '../Election/election'

const { Text } = Typography

const MenuResultados = () => {
  const data = usePastElectionResultsQuery()

  return (
    <Layout
      style={{
        backgroundImage: `url(${Background})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Row justify="center" className="body" style={{ marginTop: '3%' }}>
        <Row style={{ marginBottom: '10%' }}>
          <Text strong style={{ fontSize: '30px' }}>
            Procesos Electorales finalizados
        </Text>
        </Row>
        <Row>
          {data.data?.electoralProcesses.map(eprocess => {
            if (eprocess.__typename === 'Election') {
              return (
                <ElectionButton
                  name={eprocess.description}
                  dateInit={eprocess.start}
                  dateEnd={eprocess.end}
                  id={eprocess.id}
                  href="resultados/election"
                />
              )
            }
            return (
              <ElectionButton
                name={eprocess.description}
                dateInit={eprocess.start}
                dateEnd={eprocess.end}
                id={eprocess.id}
                href="resultados/poll"
              />
            )
          })}
        </Row>
      </Row>
    </Layout>
  )
}

export default MenuResultados
