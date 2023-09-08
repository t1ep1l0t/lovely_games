import {createStore} from "vuex";
import type {IUser} from "@/dto/UserDto";

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        setUser (state, payload :IUser | null) {
            // @ts-ignore
            state.user = payload
        }
    },
    actions: {

    }
});

export default store;