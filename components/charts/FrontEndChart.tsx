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
            borderColor: 'black',
            datalabels: {
              //  formatter: (value, context) => value + '%',
               color: "#ffffff",
               display: true
            },
        },
        {
            // helper: true,
            data: [100, 100, 100, 100, 100, 100, 100, 100],
            backgroundColor: ["rgba(0, 0, 0, 0.3)"],
            borderColor: 'black',
            borderWidth: 2,
            // datalabels: {
            //    display: false
            // }
        }
    ]
  }

  
  export function FrontEndChart() {
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
            color: 'black',
            font: {
              size: 18,
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

    return (
      <div className="flex flex-col w-auto h-auto">
        <PolarArea data={data} options={options} className="w-[30rem] h-[30rem]" />
      </div>
    );
  }
  