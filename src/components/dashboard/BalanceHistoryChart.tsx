import { getCssVarColor } from "@/utils";
import ReactECharts from "echarts-for-react";

export const BalanceHistoryChart = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: getCssVarColor("line"),
        },
      },
      axisLabel: {
        color: getCssVarColor("text"),
        fontSize: 14,
        fontWeight: "400",
        margin: 17,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: getCssVarColor("text"),
        fontSize: 14,
        fontWeight: "400",
        margin: 17,
      },
      splitLine: {
        lineStyle: {
          color: getCssVarColor("line"),
        },
      },
    },
    grid: {
      top: 10,
      bottom: 40,
      left: 40,
      right: 10,
    },
    series: [
      {
        data: [200, 500, 350, 800, 500, 700, 550],
        type: "line",
        smooth: true,
        lineStyle: {
          color: getCssVarColor("deep-blue"),
          width: 3,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(45, 96, 255, 0.25)" },
              { offset: 1, color: "rgba(45, 96, 255, 0)" },
            ],
          },
        },
        symbol: "none",
      },
    ],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "line",
      },
    },
  };

  return (
    <ReactECharts
      option={option}
      className="px-4 sm:px-[26px] pt-5 sm:pt-7 pb-4 sm:pb-6"
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export default BalanceHistoryChart;
