// import * as ActionTypes from './action_type';
// import { CommonActionNoServiceCall, CommonAction, ClearReducerAction } from './helper/CommonAction';
// import {Login} from '../service/auth.service';

// export const changeLanguageEnglish = (params) => {
//   console.log('Get action', params);
//   const actions = {
//     pending: ActionTypes.LANGUAGE_CHANGE_ENGLISH_PENDING,
//     success: ActionTypes.LANGUAGE_CHANGE_ENGLISH_SUCCESS,
//     fail: ActionTypes.LANGUAGE_CHANGE_ENGLISH_FAIL,
//   };
//   return CommonActionNoServiceCall(params, actions);
// };


// export const login = (url, params) => {
//   console.log('Get action', url, params);
//   const actions = {
//     pending: ActionTypes.LOGIN_PENDING,
//     success: ActionTypes.LOGIN_SUCCESS,
//     fail: ActionTypes.LOGIN_FAIL,
//   };
//   return CommonAction(url, params, actions, Login);
// };



// export const clearAuthReducer = params => {
//   console.log('clearAuthReducer', params);
//   const actions = {
//     success: params.action,
//   };
//   delete params['action'];
//   return ClearReducerAction(params, actions);
// };