
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({food, onDelete}) {
    const { name, calories, image, servings } = food;

  return (
    <Col>
      <Card
        title={name}  style={{ width: 230, height: 350, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button onClick={() => onDelete(name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;