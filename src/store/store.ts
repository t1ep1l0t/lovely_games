import {createStore, Store} from "vuex";
import type { InjectionKey } from "vue";
import type {IUser} from "@/dto/UserDto";
import type {IGame} from "@/dto/GameDto";

export interface State {
    user: IUser | null;
    free_games: [] | IGame[];
    pay_games: [] | IGame[];
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        user: null,
        free_games: [],
        pay_games: [],
    },
    mutations: {
        setUser (state, payload :IUser | null) {
            state.user = payload;
        },
        setFreeGames (state, payload :[]) {
            state.free_games = payload;
        },
        setPayGames (state, payload :[]) {
            state.pay_games = payload;
        }
    },
    actions: {

    }
});
