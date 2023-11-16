import { objectToArray } from "./task-utility";

interface ObjectContainer{
    [key: string]: ObjectType;
}

interface ObjectType {
    text: string;
    date: string | Date;
}

type StorageKey = "tasks" | "user" | "otherKey";
  
export const itemSetter = (key: StorageKey, data: ObjectContainer) => {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (err) {
        console.error(`Error saving to local storage (${key}):`, err);
    }
};
  
export const itemGetter = (key: StorageKey) => {
    try {
        const serializedData = localStorage.getItem(key);
        if (serializedData === null) {
            return null;
        }
        //return objectToArray(JSON.parse(serializedData));
        const array = [JSON.parse(serializedData)]
        return array
        return JSON.parse(serializedData);
    } catch (err) {
        console.error(`Error retrieving data from local storage (${key}):`, err);
        return null;
    }
};


  