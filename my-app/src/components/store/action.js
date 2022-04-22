import {ADD_CARD, GET_CATALOG, SET_FILTER_STATE} from './actionTypes'

export function setFilterStateAction(payload) {
  return {
    type: SET_FILTER_STATE,
    payload
  }
}

export function getCatalogAction(payload) {
  return {
    type: GET_CATALOG,
    payload
  }
}

export function addCardAction(payload) {
  return {
    type: ADD_CARD,
    payload
  }
}

