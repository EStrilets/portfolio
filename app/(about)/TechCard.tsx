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
    <div className="bg-white text-black flex-1">
      <h1> {title} </h1>
      <div className="flex">
        <Bubble />
      </div>
    </div>
  );
};

export default TechCard;
