import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a2712aec-3b81-461e-86da-be9eadbdc6dc'
    },
})


export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 1) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async follow(userId: number) {
        const response = await instance.post(`follow/${userId}`);
        return response.data;
    },
    async unfollow(userId: number) {
        const response = await instance.delete(`follow/${userId}`);
        return response.data;
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status})
    }
}

