interface CardProps {
  title?: string;
}

const TechCard: React.FC<CardProps> = ({ title }) => {
  return (<div className="bg-white text-black flex-1"><h1> {title} </h1></div>);
};

export default TechCard;
