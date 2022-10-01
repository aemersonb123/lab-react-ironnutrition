import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';



function App() {
    const [foodsArray, setFoodsArray] = useState(foods);
    const [query, setQuery] = useState('');

const handleSubmit = (food) => {
  setFoodsArray([food, ...foodsArray]);
};

const handleSearch = (query) => {
 setQuery(query.toLowerCase().trim());
};

const handleDelete = (name) => {
  setFoodsArray(foodsArray.filter((f) => f.name !== name));
};

  return (
   <div className="container">
   <AddFoodForm onSubmit={handleSubmit} />
   <SearchBar onChange={handleSearch} />
    <Row>
        {foodsArray.map((food) => 
          !query || food.name.toLowerCase().includes(query) ? (
            <FoodBox food={food} onDelete={handleDelete}/>
          ) : null            
        )}
    </Row>
   </div>
  );
}

export default App;