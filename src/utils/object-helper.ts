import {UserType} from "../redux/users-reducer";

export const updateObjectInArray = (items: Array<any>, itemId: number, objPropName: string, newObjProps: any): UserType[]=> {
    return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}