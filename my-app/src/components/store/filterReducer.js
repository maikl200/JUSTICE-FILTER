const defaultState = 'Все'

export const filterReducer = (state = defaultState, action) => {

  switch (action.type) {
    case "SET_FILTER_STATE":
      return action.payload

    default:
      return state
  }
}

