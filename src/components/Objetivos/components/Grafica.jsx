import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Grafica({ datos }) {
  const [labels, setLabels] = useState([]);
  const [dataAux, setDataAux] = useState([]);

  const options = {
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const handleDatos = (datos) => {
    let labels = [];
    let dataset = [];
    datos.forEach((item) => {
      labels.push(item.objetivo);
      dataset.push(item.cumplimiento);
    });

    setLabels(labels);
    setDataAux(dataset);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Cumplimietno de objetivos",
        data: dataAux,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    handleDatos(datos);
  }, [datos]);

  return <Bar data={data} options={options} />;
}

export default Grafica;
