import { objectToArray, arrayToObject } from "./task-utility";
import { ObjectArray } from "./task-utility"

type StorageKey = "tasks" | "user" | "otherKey";

/**
 * Sets an item in the local storage by serializing the provided data object, and associating it with a given key.
 * 'arrayToObject()' converts the input ObjectArray type into a data object.
 * @param key - The key that the data will be stored in local storage.
 * @param data - The data object to be stored, of type ObjectArray.
 */
export const itemSetter = (key: StorageKey, data: ObjectArray) => {
    try {
        const serializedData = JSON.stringify(arrayToObject(data));
        localStorage.setItem(key, serializedData);
    } catch (err) {
        console.error(`Error saving to local storage (${key}):`, err);
    }
};

/** 
* Retrieves an item from local storage using a key, deserializes it, and returns a data object.
* 'objectToArray()' converts the ObjectArray type array from local storage into an array of objects.
* @param key - The key used to retrieve the data from local storage.
* @returns The deserialized data object retrieved from local storage, or null if the data is not found.
*/
export const itemGetter = (key: StorageKey) => {
    try {
        const deserializedData = localStorage.getItem(key);
        if (deserializedData === null) {
            console.log("null")
            return null;
        }
        return objectToArray(JSON.parse(deserializedData))
    } catch (err) {
        console.error(`Error retrieving data from local storage (${key}):`, err);
        return null;
    }
};


  