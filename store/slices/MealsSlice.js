import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/dummy-data";

const initialState = {
  mealsData: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    setMeals: (state, action) => {},
    setFilteredMeals: (state, action) => {
      const { glutenFree, lactoseFree, vegan, vegetarian } = action.payload;
      const updatedFilteredMeals = state.mealsData.filter((meal) => {
        if (glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (vegan && !meal.isVegan) {
          return false;
        }
        if (vegetarian && !meal.isVegetarian) {
          return false;
        }
        // If we pass all the checks, then we have a meal...
        return true;
      });
      state.filteredMeals = updatedFilteredMeals;
      console.log(updatedFilteredMeals);
    },
    setFavoriteMeals: (state, action) => {
      const { id } = action.payload;
      //expects a callback as first parameter. Use this if you need the index in arrays with non-primitive types (e.g. objects) or your find condition is more complex than just a value.
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === id
      );
      console.log(existingIndex);
      if (existingIndex >= 0) {
        //remove from favorite list
        state.favoriteMeals = state.favoriteMeals.filter(
          (meal) => meal.id !== id
        );
      } else {
        //add to favorite list
        //const meal = state.mealsData.find((meal) => meal.id === id);
        state.favoriteMeals = [...state.favoriteMeals, action.payload];
      }
    },
  },
});

export const getMeals = (state) => state.meals.mealsData;
export const getfilteredMeals = (state) => state.meals.filteredMeals;
export const getFavoriteMeals = (state) => state.meals.favoriteMeals;

export const { setMeals, setFilteredMeals, setFavoriteMeals } =
  mealsSlice.actions;
export default mealsSlice.reducer;
