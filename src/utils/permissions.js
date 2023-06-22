import React from 'react';
import { PermissionsAndroid, Platform } from "react-native";


export const cameraPermission = async (launchCamera) => {
  // We need to ask permission for Android only
  if (Platform.OS === 'android') {
    `${Labels.callpermission}`
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Heiminspektor App Camera Permission',
        message: 'Heiminspektor App needs access to your camera',
        buttonPositive: 'Allow',
        buttonNegative: 'Cancel',
        //   buttonNeutral:"As"
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      `${Labels.grant}`
      launchCamera();
    } else {
      `${Labels.denied}`
      alert('CAMERA Permission Denied');
    }
  } else {
    launchCamera();
  }
};