import AsyncStorage from "@react-native-community/async-storage";
import { consoleResponse } from "./Validation";

export const storeObjectAsync = async (key, value) => {
    try {


        AsyncStorage.setItem(key, JSON.stringify(value), (err) => {
            if (err) {
                console.log("an error");
                throw err;
            }
            console.log("Data saved successfully : ", JSON.stringify(value));

        }).catch((err) => {
            console.log("error is: ", err);
        });

    } catch (error) {
        // Error saving data
        console.log('Store data error: ' + error)


    }
};
export const storeValueAsync = async (key, value) => {
    try {


        AsyncStorage.setItem(key, value.toString(), (err) => {
            if (err) {
                console.log("an error");
                throw err;
            }
            consoleResponse("Value saved successfully : ", value);

        }).catch((err) => {
            console.log("error is: " + err);
        });

    } catch (error) {
        // Error saving data
        console.log('Store data error: ', error)


    }
};
