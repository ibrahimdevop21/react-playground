import React, { Children } from 'react';

const MealsContext = React.createContext();

const todaysMeal = ['Baked Beans', 'Beadked Pottato', 'rice'];

const MealProvider = ({ children }) => {
  const [meals, setMealsList] = React.useState(todaysMeal);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealProvider;
