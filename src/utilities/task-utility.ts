interface InputObject {
    [key: string]: ObjectType;
}

interface InputArray {
    array: ObjectType[];
}

interface ObjectType {
    text: string;
    date: string | Date;
    complete: boolean;
    creationDate: string;
}

/**
 * Converts an array of ObjectType to an object with creationDate as keys.
 * @param {InputArray} data - The input array containing ObjectType elements.
 * @returns {Object} An object with creationDate as keys and corresponding ObjectType as values.
 */
export const arrayToObject = (data:InputArray) => {
    let outputObject: {[key: string]: ObjectType} = {};
    for (const d of data.array){
        const key = d.creationDate;
        outputObject[key] = d
    }
    return outputObject
}

/**
 * Converts an object of ObjectType to an array. 
 * 
 * @param {InputObject} data - the inputObject containing ObjectType elements. 
 * @returns 
 */
export const objectToArray = (data:InputObject) => {
    const sortedArray: ObjectType[] = Object.keys(data)
                                            .sort()
                                            .map((key) => data[key])
    return sortedArray                                
    // const outputAray = Object.values(data)
    // return outputAray
}