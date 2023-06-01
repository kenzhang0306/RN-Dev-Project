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
    setFilteredMeals: (state, action) => {},
    setFavoriteMeals: (state, action) => {
      const { id } = action.payload;
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
