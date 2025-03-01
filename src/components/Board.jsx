import Card from "./Card";
import resources from "../data/resources";

const Board = () => {
  return (
    <div className="board">
      {resources.map((resource) => (
        <Card
          key={resource.id}
          title={resource.title}
          description={resource.description}
          image={resource.image}
          link={resource.link}
        />
      ))}
    </div>
  );
};

export default Board;
