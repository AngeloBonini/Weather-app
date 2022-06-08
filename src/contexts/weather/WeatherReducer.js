export const ADD_DAILY_FORECAST = "[Weather] Add City";
export const UPDATE_SELECTED_LOCATION = "[Weather] Update Selected City";
export const ADD_WEEKLY_FORECAST = "[Weather] update to week forecast";

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case ADD_DAILY_FORECAST:
      const newDailyLocationForecast = {
        [action.payload.name]: action.payload,
      };
      const test = {
        ...state.dailyLocationForecastMap,
        ...newDailyLocationForecast,
      };
      console.log(
        "🚀 ~ file: weatherState.js ~ line 13 ~ weatherReducer ~ test",
        test
      );

      return {
        ...state,
        dailyLocationForecastMap: state.dailyLocationForecastMap
          ? { ...state.dailyLocationForecastMap, ...newDailyLocationForecast }
          : newDailyLocationForecast,
      };
    case UPDATE_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload,
      };
    case ADD_WEEKLY_FORECAST:
      const newWeeklyLocationForecast = {
        [state.selectedLocation]: action.payload,
      };
      return {
        ...state,
        weeklyForecastMap: state.weeklyForecastMap
          ? { ...state.weeklyForecastMap, ...newWeeklyLocationForecast }
          : newWeeklyLocationForecast,
      };
    default:
      return state;
  }
};

export const initialWeatherState = {
  selectedLocation: "",
  dailyLocationForecastMap: null,
  weeklyForecastMap: null,
};
