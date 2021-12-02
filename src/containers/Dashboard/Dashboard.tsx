import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { LineChart } from "components/LineChart";
import { useStores } from "stores/useStore";
import { Combobox } from "components/Combobox";

export const Dashboard: FC = () => {
  const { dashboardStore } = useStores();
  const { init } = dashboardStore;

  useEffect(() => {
    init();
  }, [init]);

  return (
    <Container>
      <ToolBar>
        <Combobox />
      </ToolBar>
      <ChartContainer>
        <LineChart labels={["1,2,3"]} data={[{ label: "1", data: ["1", "2", "3"] }]} />
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ToolBar = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
`;
