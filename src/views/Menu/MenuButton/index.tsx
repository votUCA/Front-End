import { Button, Icon, Row, Typography } from 'antd'
import React from 'react'

const { Text } = Typography

type Props = {
  name: string
  url: string
}

const MenuButton = ({ url, name }: Props) => {
  return (
    <>
      <Button
        href={url}
        style={{
          backgroundColor: '#F0F0F0',
          marginTop: '2%',
          minWidth: '100%',
          minHeight: '63px',
          borderRadius: '12px',
          boxShadow: '0px 3px 3px grey',
        }}
      >
        <Row
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignContent: 'space-between',
          }}
        >
          <Text
            strong
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              fontSize: '20px',
            }}
          >
            {name}
          </Text>

          <Icon
            type="caret-right"
            style={{
              verticalAlign: 'middle',
              fontSize: '50px',
              color: '#FFA500',
              marginLeft: 'auto',
              marginTop: '1.1%', // MODIFICAR
              borderRadius: '50px',
            }}
          />
        </Row>
      </Button>

      <br />
    </>
  )
}
export default MenuButton
