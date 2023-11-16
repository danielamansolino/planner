import { objectToArray, arrayToObject } from "./task-utility";

interface ObjectArray{
    array: ObjectType[];
}

interface ObjectType {
    text: string;
    date: string;
    complete: boolean;
    creationDate: string;
}

type StorageKey = "tasks" | "user" | "otherKey";
  
export const itemSetter = (key: StorageKey, data: ObjectArray) => {
    try {
        const serializedData = JSON.stringify(arrayToObject(data));
        localStorage.setItem(key, serializedData);
    } catch (err) {
        console.error(`Error saving to local storage (${key}):`, err);
    }
};
  
export const itemGetter = (key: StorageKey) => {
    try {
        const serializedData = localStorage.getItem(key);
        console.log(serializedData)
        if (serializedData === null) {
            console.log("null")
            return null;
        }
        return objectToArray(JSON.parse(serializedData))
    } catch (err) {
        console.error(`Error retrieving data from local storage (${key}):`, err);
        return null;
    }
};


  