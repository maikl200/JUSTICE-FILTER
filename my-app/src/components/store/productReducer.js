import {productsData} from "../../mockdata/productsData";

const defaultState = productsData

export const productReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "GET_CATALOG":
      return state

    case "ADD_CARD":
      return [...state, action.payload]

    default:
      return state

  }
}