import { useElectionsQuery } from "@Generated/hooks";
import { Row, Typography } from "antd";
import React from "react";
import ElectionButton from "../Election/election";
const { Text } = Typography;
//la interrogacion comprueba que no sea nulo
const PendantVotation = () => {
  const { data, error } = useElectionsQuery();
  if (data) {
    return (
      <Row justify="center" className="body">
        <Row style={{ marginTop: "3%", marginBottom: "1%" }}>
          <Text strong style={{ fontSize: "20px" }}>
            Votaciones pendientes:
          </Text>
        </Row>
        <Row>
          {data.pendingElections.map(eprocess => (
            <ElectionButton
              name={eprocess.description}
              dateInit={eprocess.start}
              dateEnd={eprocess.end}
              id={eprocess.id}
              //href={`votacion/${eprocess.id}`}
            />
          ))}
        </Row>
      </Row>
    );
  } else return <div>{JSON.stringify(error)}</div>;
};

export default PendantVotation;