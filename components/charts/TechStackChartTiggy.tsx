import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { PolarArea } from 'react-chartjs-2';

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
    labels: ["JavaScript", "TypeScript", "React Native", "Redux", "Go lang", "REST API", "PostgreSQL", "Git"],
    datasets: [
        {
            data: [72, 31, 71, 44, 34, 55, 51, 50],
            backgroundColor: ["rgba(240, 219, 79, 1)", "rgba(0, 122, 204, 1)", "rgba(97, 219, 251, 1)", "rgba(225, 0, 152, 1)", "rgba(240, 101, 41, 1)", "rgba(38, 77, 228, 1)", "rgba(255, 255, 255, 1)", "rgba(215, 92, 156, 1)"],
            borderColor: '#1B263E',
            borderWidth: 1,
            datalabels: {
                formatter: (value: any, context:any ) => value + '%',
               color: "#1B263E",
               display: true
            },
        },
        {
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            backgroundColor: ["rgba(159, 186, 249, 0.3)"],
            borderColor: '#1B263E',
            borderWidth: 1,
        }
    ]
  }


  export default function TechStackChartTiggy() {
    const options = {
      scales: {
        r: {
          grid: {
            display: false, // Set this to false to remove the grey circles
          },
          ticks: {
            display: false, // Set this to false to remove the number marks on each circle
          },
          pointLabels: {
            display: true,
            centerPointLabels: true,
            arc: true,
            color: '#f5f3ff',
            font: {
              size: 14,
              weight: 'bold',
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    data.datasets[0].data = data.datasets[0].data.map(
      (value) => (value / total) * 500
    );

    return (
      <div className="flex flex-col w-auto h-auto">
        <PolarArea
          data={data}
          options={options}
          className="w-[22rem] h-[22rem]"
        />
      </div>
    );
  }