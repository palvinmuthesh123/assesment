import * as ActionTypes from '../action/action_type';

let intialState = {
  type: null,
  isLanguageChangeEnglish: false,
  userData: [],
};

export default function base(state = intialState, action) {
  switch (action.type) {
    case ActionTypes.LANGUAGE_CHANGE_ENGLISH_PENDING: {
      return {
        ...state,
        isLanguageChangeEnglish: true,
        isLanguageChangeGerman: false
      };
    }
    case ActionTypes.LANGUAGE_CHANGE_ENGLISH_SUCCESS: {
      return {
        ...state,
        type: action.type,
        isLanguageChangeEnglish: true,
        isLanguageChangeGerman: false
      };
    }

    case ActionTypes.LANGUAGE_CHANGE_ENGLISH_FAIL: {
      return {
        ...state,
        type: action.type,
        isLanguageChangeEnglish: false,
      };
    }

    case ActionTypes.CLEAR_AUTH_REDUCER_SUCCESS: {
      let data = action.payload;
      let stateData = {
        ...state,
      };
      Object.assign(stateData, data);
      console.log('Data', stateData);
      return stateData;
    }

    default:
      return state;
  }
}
