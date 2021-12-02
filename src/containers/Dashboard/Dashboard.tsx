import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { LineChart, typesChart } from "components/LineChart";
import { useStores } from "stores/useStore";
import { Combobox } from "components/Combobox";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import { observer } from "mobx-react";
import { pictures } from "~/assets/pictures";
import { Loader } from "components/Loader";

export const Dashboard: FC = observer(() => {
  const { dashboardStore } = useStores();
  const { init, dataWeather, minutely, isLoading } = dashboardStore;
  const history = useHistory();
  const location = useLocation();
  const { city } = queryString.parse(location.search);

  const API_KEY = process.env.API_KEY;

  const CITY = city ?? "moscow";

  useEffect(() => {
    init(CITY, API_KEY);
  }, [API_KEY, city, init]);

  const cities = [
    { value: "moscow", label: "🇷🇺 Москва", country: "RU" },
    { value: "london", label: "🇬🇧 Лондон", country: "GB" },
    { value: "beijing", label: "🇨🇳 Пекин", country: "CN" },
    { value: "istanbul", label: "🇹🇷 Стамбул", country: "TR" },
  ];

  return (
    <Container>
      {isLoading && <Loader spinnerSize={100} hasOverlay />}
      <ToolBar>
        <LeftContainer>
          <Picture src={pictures[dataWeather?.weather?.icon]} alt="picture" />
          <>{dataWeather?.weather?.description}</>
          <Combobox
            placeholder="Выбирете город"
            items={cities}
            selectedItem={CITY}
            onChange={(value) => {
              history.push(`?city=${value}`);
            }}
          />
        </LeftContainer>
        <RightContainer>
          <Title>Погода в Москве :</Title>
          <Other>
            <LeftOther>
              <Temp>{dataWeather.temp ?? "-"} °С</Temp>
            </LeftOther>
            <RightOther>
              <OtherItem>Скорось ветра : {dataWeather.wind_spd ?? "-"} м / с</OtherItem>
              <OtherItem>Давление : {dataWeather.pres ?? "-"} мб</OtherItem>
              <OtherItem>Видимость : {dataWeather.vis ?? "-"} км</OtherItem>
            </RightOther>
          </Other>
        </RightContainer>
      </ToolBar>
      <ChartContainer>
        <LineChartContainer>
          <LineChart labels={minutely?.labels} data={minutely?.data} typeChart={typesChart.line} />
        </LineChartContainer>
      </ChartContainer>
    </Container>
  );
});

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
  user-select: none;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const Picture = styled.img`
  width: 120px;
  height: 120px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const RightContainer = styled.div`
  width: 80%;
  height: 100%;
`;

const Title = styled.h1`
  color: #644ded;
`;

const Temp = styled.h1`
  color: #644ded;
  font-size: 36px;
`;

const Other = styled.div`
  display: flex;
  height: 80%;
`;

const LeftOther = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightOther = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const OtherItem = styled.div`
  width: 33%;
  color: #808192;
`;

const LineChartContainer = styled.div`
  height: 90%;
  width: 100%;
`;
