import { combineReducers } from "redux";
import { filmInfoReducer } from "./filmInfoReducer";
import { filmsReducer } from "./filmsReducer";

export const rootReducer = combineReducers({
    films: filmsReducer,
    film: filmInfoReducer
})