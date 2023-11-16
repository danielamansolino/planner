interface ObjectType {
    task: string,
    date: number
}

// itemSetter() saves the item to localStorage
export const itemSetter = (key: string, data: ObjectType) => {
    try{
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData)

    } catch (err) {
        console.error("Error saving to local storage, error")
    }
}

export const itemGetter = (key: string) => {
    try{
        const serializedData = localStorage.getItem(key);
        if (serializedData == null){
            return null
        }
        return JSON.parse(serializedData)
    } catch(err){
        console.error("Error retrieve data", err)
        return null
    }

}