import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";
import { getCssVarColor } from "@/utils";
import { useStore } from "@/store/useStore";
import { ExpenseStatisticItem } from "@/types";

type RadiusPair = [string, string];

export const ExpenseStatisticsChart = () => {
  const expenseStatistics = useStore((state) => state.expenseStatistics);

  const generateSeries = (
    data: ExpenseStatisticItem[],
    radii: RadiusPair[]
  ): EChartsOption["series"] => {
    return data.map((item, index) => ({
      name: item.name,
      type: "pie",
      radius: ["0%", radii[index][1]],
      avoidLabelOverlap: false,
      startAngle: 270,
      label: {
        show: true,
        position: "inside",
        formatter: (params) => {
          const percent = params.percent ?? 0;
          return params.name === item.name
            ? `{n|${percent}%}\n{b|${params.name}}`
            : "";
        },
        rich: {
          n: {
            fontSize: 17,
            fontWeight: "bold",
          },
          b: {
            fontSize: 13,
            fontWeight: "bold",
          },
        },
        color: "white",
      },
      data: data.map((section, i) => ({
        ...section,
        label: { show: i === index },
        symbolSize: i === index ? 8 : 4,
        itemStyle: {
          opacity: i === index ? 1 : 0,
          borderColor: i === index ? "white" : "transparent",
          borderWidth: i === index ? 8 : 0,
        },
        emphasis: {
          disabled: i !== index,
        },
      })),
    }));
  };

  const radii: RadiusPair[] = [
    ["0%", "74%"],
    ["0%", "87%"],
    ["0%", "100%"],
    ["0%", "87%"],
  ];

  const option: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    series: generateSeries(expenseStatistics || [], radii),
    color: [
      getCssVarColor("blue"),
      getCssVarColor("dark-blue"),
      getCssVarColor("orange"),
      getCssVarColor("accent"),
    ],
  };

  return (
    <div className="size-full pr-8">
      <ReactECharts
        option={option}
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      {/* We have to use inline styles here to override inline styles from ReactECharts component */}
    </div>
  );
};

export default ExpenseStatisticsChart;
