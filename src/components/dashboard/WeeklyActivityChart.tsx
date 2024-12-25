import { useState, useEffect } from "react";
import { getCssVarColor } from "@/utils";
import ReactECharts from "echarts-for-react";
import { useStore } from "@/store/useStore";

export const WeeklyActivityChart = () => {
  const weeklyActivity = useStore((state) => state.weeklyActivity);

  const getBarStyle = (colorVar: string) => ({
    color: getCssVarColor(colorVar),
    borderRadius: [999, 999, 999, 999],
  });

  // State to store the bar width
  const [barWidth, setBarWidth] = useState(15);

  // Function to update bar width based on window size
  const updateBarWidth = () => {
    const width = window.innerWidth;
    if (width < 640) {
      // Small screens (e.g., mobile)
      setBarWidth(7);
    } else if (width < 1024) {
      // Medium screens (e.g., tablets)
      setBarWidth(12);
    } else {
      // Large screens
      setBarWidth(15);
    }
  };

  useEffect(() => {
    // Set initial bar width
    updateBarWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateBarWidth);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateBarWidth);
  }, []);

  const option = {
    xAxis: {
      type: "category",
      data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
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
    series: (weeklyActivity || []).map((s) => ({
      name: s.name,
      type: "bar",
      data: s.data,
      itemStyle: getBarStyle(s.colorVar),
      barWidth: barWidth, // Use dynamic bar width
    })),
    legend: {
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    barGap: "80%",
  };

  return (
    <div className="flex flex-col size-full p-3 sm:pl-9 sm:pt-[25px] sm:pb-5 sm:pr-5">
      <div className="flex justify-end gap-[30px] mb-4 mr-3">
        {(weeklyActivity || [])
          .slice()
          .reverse()
          .map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="size-3 sm:size-[15px] inline-block rounded-full"
                style={{ backgroundColor: getCssVarColor(s.colorVar) }}
              />
              <span className="font-normal">{s.name}</span>
            </div>
          ))}
      </div>

      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
};

export default WeeklyActivityChart;
