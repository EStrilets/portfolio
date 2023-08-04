import { FrontEndChart } from "@/components/charts/FrontEndChart";


interface CardProps {
  title?: string;
}

const Bubble = () => {
  return ( <div>
    <h1>
      hell oworld
    </h1>
  </div>);
}
 

const TechCard: React.FC<CardProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-center items-center align-middle text-black">
      <div className="flex">
        <FrontEndChart />
      </div>
    </div>
  );
};

export default TechCard;
