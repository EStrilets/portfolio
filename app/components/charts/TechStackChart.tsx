import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect, useRef } from 'react';
  import { PolarArea } from 'react-chartjs-2';

  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
    labels: ["JavaScript", "TypeScript", "ReactJS", "Docker", "Nodejs", "GraphQL", "Nextjs", "TailwindCSS"],
    datasets: [
        {
            data: [45, 72, 76, 44, 34, 55, 51, 64],
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

  interface TechStackChartProps {
    hoveredBadge?: string | null;
  }


  const TechStackChart: React.FC<TechStackChartProps> = ({ hoveredBadge }) => {

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

    useEffect(() => {
      // Create a copy of the original backgroundColor array to avoid mutating the original data
      const backgroundColorCopy = [...data.datasets[0].backgroundColor];
  
      if (hoveredBadge) {
        // Find the index of the hoveredBadge in the labels array
        const labelIndex = data.labels.indexOf(hoveredBadge);
  
        if (labelIndex !== -1) {
          // Change the color of the corresponding segment
          backgroundColorCopy[labelIndex] = "#ff5733"; // Change to the desired hover color
        }
      }
  
      // Update the backgroundColor property of the dataset
      data.datasets[0].backgroundColor = backgroundColorCopy;
    }, [hoveredBadge]);

    const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);
    data.datasets[0].data = data.datasets[0].data.map(
      (value) => (value / total) * 500
    );

  return (
    <div className="flex flex-col w-auto h-auto">
      <PolarArea
        data={data}
        options={options}
        className="w-[25rem] h-[25rem]"
      />
    </div>
  );
}

  export default TechStackChart