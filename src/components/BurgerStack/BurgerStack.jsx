// BurgerStack: A <ul> that renders the elements held in stack. Each ingredient rendered in this component should contain a button for removing the ingredient from the stack.
//The right side of the app (ingredients selected to be in your burger)
// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = ({ stack, removeFromBurger }) => {
  //get your props from parents
  return (
    <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => removeFromBurger(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default BurgerStack;
