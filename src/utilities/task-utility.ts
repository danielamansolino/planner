
interface InputObject {
    [key: string]: ObjectType;
}
interface ObjectType {
    text: string;
    date: string | Date;
    complete: boolean;
}

export const objectToArray = (data:InputObject) => {
    const result = Object.values(data)
    console.log(result)
    return result
}