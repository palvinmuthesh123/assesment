import React from 'react';
import { ToastAndroid } from "react-native";

//Mobile number regex
const regNumber = '^([0|+[0-9]{1,5})?([0-9][0-9]{9})$';
//Email regex
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//name regex
const regName = /^([a-zA-Z ]{3,30})$/;

//

const regStockist = /^[A-Z]{2}[0-9]{4}$/;

export const validatePhoneNumber = text => {
  console.log("validatePhoneNumber >>>>>>>>>>>>>", text)
  let regexp = new RegExp(regNumber);
  var isValid = false;
  var msg = '';
  isValid = regexp.test(text);
  if (text.trim() === '') {
    return { isValid, msg: 'Mobile number should not be empty' };
  } else if (text.length > 10) {
    return {
      isValid: false,
      msg: 'Mobile number should not be greater then 10 digit',
    };
  } else if (isValid) {
    console.log("isValid     ", isValid, msg)
    return { isValid, msg };
  } else {
    return { isValid, msg: 'Please Enter valid Mobile number' };
  }
};

export const validateEmail = text => {
  let regg = new RegExp(regEmail);
  var isValid = false;
  var msg = '';
  isValid = regg.test(text);
  if (isValid) {
    return { isValid, msg };
  } else {
    return { isValid, msg: 'Please Enter valid email id' };
  }
};

export const validateName = text => {
  let regexp = new RegExp(regName);
  var isValid = false;
  var msg = '';
  isValid = regexp.test(text);

  if (text.trim() == '') {
    return { isValid, msg: 'Name should not be empty' };
  } else if (isValid) {
    return { isValid, msg };
  } else {
    return { isValid, msg: 'Please Enter valid name' };
  }
};

export const numDifferentiation = value => {
  var val = Math.abs(value);
  // console.log("SKSKKSKKSS", val)
  if (value) {
    if (val >= 10000000) {
      value = (value / 10000000).toFixed(1) + ' Cr';
    } else if (val >= 100000) {
      value = (value / 100000).toFixed(1) + ' Lacs';
    } else if (val >= 1000) {
      value = (value / 1000).toFixed(2) + ' K';
    }
  } else {
    value = 0;
  }

  return value;
};

export const graphLabelValueInNum = value => {
  var val = Math.abs(value);
  if (val >= 10000000) {
    value = (value / 10000000).toFixed(1);
  } else if (val >= 100000) {
    value = (value / 100000).toFixed(1);
  } else if (val >= 1000) {
    val = (val / 1000).toFixed(2);
  }

  return value;
};

export const numGraphChange = value => {
  var val = Math.abs(value);
  if (val >= 10000000) {
    value = (value / 10000000).toFixed(1) + ' Cr';
  } else if (val >= 100000) {
    value = (value / 100000).toFixed(1) + ' L';
  } else if (val >= 1000) {
    val = (val / 1000).toFixed(2) + ' K';
  }

  return value;
};

export const validateStockistid = text => {
  let regexp = new RegExp(regStockist);
  var isValid = false;
  var msg = '';
  isValid = regexp.test(text);

  if (text.trim() == '') {
    return { isValid, msg: 'Stockist id should not be empty' };
  } else if (isValid) {
    return { isValid, msg };
  } else {
    return { isValid, msg: 'Please Enter valid Stockist id' };
  }
};
export const consoleResponse = (tag, resp) => {
  console.log(tag)
  console.log(JSON.stringify(resp, null, 2))


};


export const showToast = (message) => {
  console.log("HDHDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD", message)
  ToastAndroid.show(Array.isArray(message.message)
    ? message.message[0]
    : message.message, ToastAndroid.SHORT);


};





