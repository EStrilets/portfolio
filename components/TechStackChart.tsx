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
    labels: ["JavaScript", "TypeScript", "React", "Redux", "HTML", "CSS", "Nextjs", "Tailwind"],
    datasets: [
        {
            data: [80, 40, 54, 62, 71, 45, 50, 85],
            backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(255, 159, 64, 1)", "rgba(255, 205, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 0.5)", "rgba(153, 102, 255, 1)", "rgba(201, 203, 207, 1)", "rgba(54, 162, 88, 1)"],
            borderColor: '#1B263E',
            borderWidth: 1,
            datalabels: {
                formatter: (value: any, context:any ) => value + '%',
               color: "#1B263E",
               display: true
            },
        },
        {
            // helper: true,
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            backgroundColor: ["rgba(159, 186, 249, 0.3)"],
            borderColor: '#1B263E',
            borderWidth: 1,
            // datalabels: {
            //    display: false
            // }
        }
    ]
  }


  export default function TechStackChart() {
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