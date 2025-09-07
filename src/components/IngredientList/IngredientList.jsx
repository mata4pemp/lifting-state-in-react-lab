// IngredientList: A <ul> that renders the elements held in availableIngredients. Each ingredient rendered in this component should contain a button for adding the ingredient to the stack.
//The left side of the app (All ingredients available)
// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ availableIngredients, addToBurger }) => {
  //array of ingredients, function to add ingredient to burger
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
