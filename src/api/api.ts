import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '638472be-ebe8-4dca-bfc2-4bba00a107d7'
    },
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
            .then(response=> response.data)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
            .then(response=> response.data)
    }
}