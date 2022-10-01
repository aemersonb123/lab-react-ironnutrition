import { Button, Input } from 'antd';
import React, { useState } from 'react';
import FormItemLabel from 'antd/es/form/FormItem';

function AddFoodForm({ onSubmit }) {
  const [ name, setName ] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  return (
    <div>
    <FormItemLabel label="Name" />
      <Input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
    
    <FormItemLabel label="Image URI" />
      <Input
        type="text"
        value={image}
        onChange={({ target }) => setImage(target.value)}
      />

<FormItemLabel label="Calories" />
      <Input
        type="number"
        value={calories}
        onChange={({ target }) => setCalories(target.value)}
      />

    <FormItemLabel label="Servings" />
      <Input
        type="number"
        value={servings}
        onChange={({ target }) => setServings(target.value)}
      />

      <Button
        type="primary"
        onClick={() => {
          onSubmit({name, image, calories, servings});
        }}
      >
        Create
      </Button>
    </div>
  );
}

export default AddFoodForm;
