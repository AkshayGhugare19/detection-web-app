// src/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = ({ data, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ['#DCDDFA', '#5253E8', '#A8A8D1'], // Grey and Blue shades
        borderColor: ['#DCDDFA', '#5253E8', '#A8A8D1'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-2 text-center ">{title}</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
