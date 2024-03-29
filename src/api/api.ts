import axios from 'axios';
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";

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
    login(email: string, password: string, rememberMe: boolean, captcha: string | null = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
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
    },
    savePhoto(photo: FileList | null) {
        let formData = new FormData()
        if (photo) {
            formData.append('image', photo[0])
        }
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileFormDataType) {
        return instance.put(`/profile`, profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

