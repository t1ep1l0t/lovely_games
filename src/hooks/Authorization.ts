import type {IUser} from "@/dto/UserDto";
import {useStore} from "vuex";

interface Error {
    error: string;
}
interface LoginData {
    email: string;
    password: string;
    remember_me: boolean;
}
interface RegisterData {
    email: string;
    password: string;
    name: string;
    password_confirmation: string;
}

export const checkAuth = async () :Promise<void> => {
    const token = '123123';

    if (!token) {
        return
    }

    // fetch user
    const response = {status: 200};

    if (response.status !== 200) {
        return
    }

    const user :IUser ={
        name: 'Andrey',
        email: 't1ep1l0t@offconcern.com',
        image: null,
        balance: 5555,
        is_verified: true,
        id: 1
    }

    const store = useStore();

    store.commit('setUser', user);

}
export const useLogin = async (data :LoginData) :Promise<IUser | Error> => {
    // fetch login

    const response = {status: 404};

    if (response.status !== 200) {
    return {error: 'Unauthenticated'}
}

const user :IUser ={
    name: 'Andrey',
    email: 't1ep1l0t@offconcern.com',
    image: null,
    balance: 5555,
    is_verified: true,
    id: 1
}

return user
}
export const useRegistration = async (data :RegisterData) :Promise<IUser | Error> => {
    const response = {status: 404};

    if (response.status !== 200) {
    return {error: 'Error'}
}

const user :IUser ={
    name: 'Andrey',
    email: 't1ep1l0t@offconcern.com',
    image: null,
    balance: 5555,
    is_verified: true,
    id: 1
}

return user
}