import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import style from "../../../styles/Sass/Components/DashboardPart/_sellChart.module.scss";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "Jun"],
  datasets: [
    {
      label: "Meal Cost: Tk-",
      data: [5000, 2555, 14400, 2550, 3666, 14251],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 2,
    },
  ],
};
const options = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      ticks: {
        // color: "yellow",
        font: {
          size: 12,
        },
      },
      // grid: {
      //   color: "#243240",
      // },
    },
    x: {
      ticks: {
        // color: "yellow",
        font: {
          size: 12,
        },
      },
    },
  },
};

function CostChart() {
  return (
    <div className={style.incomeChart}>
      <h3>Monthly Income</h3>
      <div className={style.chart}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default CostChart;
