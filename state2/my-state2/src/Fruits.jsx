const Fruits = ({ fruits }) => {
  return (
    <div>
      <div>
        {fruits.map((item) => (
          <h3 key={item.id}>{item.fruitName}</h3>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
