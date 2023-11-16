interface ObjectType {
    task: string;
    date: string; // or date: Date;
  }
  
  type StorageKey = "tasks" | "user" | "otherKey";
  
  export const itemSetter = (key: StorageKey, data: ObjectType) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (err) {
      console.error(`Error saving to local storage (${key}):`, err);
    }
  };
  
  export const itemGetter = (key: StorageKey): ObjectType | null => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return null;
      }
      return JSON.parse(serializedData);
    } catch (err) {
      console.error(`Error retrieving data from local storage (${key}):`, err);
      return null;
    }
  };
  