export const ADD_CITY = "[Weather] Add City";
export const UPDATE_SELECTED_CITY = "[Weather] Update Selected City";
export const UPDATE_WEEK_FORECAST = "[Weather] update to week forecast";

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_CITY:
      const newCity = {
        [action.payload.name]: action.payload,
      };
      const test = { ...state.cityMap, ...newCity };
      console.log(
        "🚀 ~ file: weatherState.js ~ line 13 ~ weatherReducer ~ test",
        test
      );

      return {
        ...state,
        cityMap: state.cityMap ? { ...state.cityMap, ...newCity } : newCity,
      };
    case UPDATE_SELECTED_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case UPDATE_WEEK_FORECAST:
      const weekForecast = {
        cityForecast: action.payload,
      };
      return {
        ...state,
        weeklyForecast: state.weeklyForecast
          ? { ...state.weeklyForecast, ...weekForecast }
          : weekForecast,
      };
    default:
      return state;
  }
};

export const initialWeatherState = {
  selectedCity: "",
  cityMap: null,
  weeklyForecast: null,
};
