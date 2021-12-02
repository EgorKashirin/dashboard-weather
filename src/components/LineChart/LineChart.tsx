import { useRef, useLayoutEffect, useCallback, memo, FC } from "react";
import { Container, EmptyData } from "./LineChart.style";

import Chart from "chart.js";
import "chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes";
import { SetThree12 } from "chartjs-plugin-colorschemes/src/colorschemes/colorschemes.brewer";

export enum typesChart {
  line = "line",
  bar = "bar",
}

interface DataProps {
  label: string;
  data: [string];
}

interface LineChartProps {
  labels?: string[] | number[];
  data?: [DataProps];
  xAxes?: string;
  yAxes?: string;
  typeChart?: typesChart;
  graphLimits?: boolean;
}

export const LineChart: FC<LineChartProps> = memo((props) => {
  const { labels = [], data = [], xAxes, yAxes, typeChart = typesChart.line, graphLimits = false } = props;
  let myColors: string[];
  if (!graphLimits) {
    myColors = ["#644ded", "#ff6358", "#ffd246", "#78d237", "#28b4c8", "#2d73f5", "#aa46be", "#2CCCE4", "#003f5c", "#FF8A65", "#795548", "#1367b6", "#af073d", "#8ED1FC"];
  } else {
    myColors = ["#644ded", "#ff6358", "#ff6358", "#78d237", "#28b4c8", "#2d73f5", "#aa46be", "#2CCCE4", "#003f5c", "#FF8A65", "#795548", "#1367b6", "#af073d", "#8ED1FC"];
  }

  const customColorFunction = useCallback((schemeColors) => {
    return [...myColors, ...schemeColors];
  }, []);
  const chartRef = useRef();
  const instanceChart = useRef();

  const convertedData = data.map((item) => {
    return { ...item, fill: false, pointRadius: 5, lineTension: 0 };
  });

  const hasData = convertedData.some((item) => item.data.length);

  useLayoutEffect(() => {
    if (hasData) {
      const myChartRef = chartRef.current.getContext("2d");
      if (instanceChart.current) instanceChart.current.destroy();
      instanceChart.current = new Chart(myChartRef, {
        type: typeChart,
        data: {
          labels: labels,
          datasets: convertedData,
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              title: function (tooltipItem, data) {
                const title = xAxes ? xAxes + " : " : "";
                return title + data["labels"][tooltipItem[0]["index"]];
              },
            },
            backgroundColor: "#FFF",
            titleFontColor: "#000",
            bodyFontColor: "#000",
            borderColor: "gray",
            borderWidth: 1,
          },
          plugins: {
            colorschemes: {
              scheme: SetThree12,
              override: false,
              reverse: false,
              custom: customColorFunction,
            },
          },
          legend: {
            display: true,
            onHover: (e: MouseEvent<HTMLCanvasElement>): void => {
              e.target.style.cursor = "pointer";
            },
            onLeave: (e: MouseEvent<HTMLCanvasElement>): void => {
              e.target.style.cursor = "default";
            },
          },
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: !!xAxes,
                  labelString: xAxes,
                  fontSize: 16,
                },
              },
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: !!yAxes,
                  labelString: yAxes,
                  fontSize: 16,
                },
              },
            ],
          },
        },
      });
    }
  }, [labels, data, hasData, typeChart, convertedData, customColorFunction, xAxes, yAxes]);

  return <Container>{hasData ? <canvas ref={chartRef} /> : <EmptyData>Нет данных</EmptyData>}</Container>;
});
