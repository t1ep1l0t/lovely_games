import {createStore, Store} from "vuex";
import type { InjectionKey } from "vue";
import type {IUser} from "@/dto/UserDto";
import type {IGame} from "@/dto/GameDto";
import { fetchGames } from '@/api/fetchGames'

export interface State {
    user: IUser | null;
    free_games: [] | IGame[];
    pay_games: [] | IGame[];
    login_modal: boolean,
    register_modal: boolean
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        user: null,
        free_games: [],
        pay_games: [],

        login_modal: false,
        register_modal: false
    },
    mutations: {
        setUser (state, payload :IUser | null) :void {
            state.user = payload;
        },
        setFreeGames (state, payload :[]) :void {
            state.free_games = payload;
        },
        setPayGames (state, payload :[]) {
            state.pay_games = payload;
        },

        setLoginModal (state) :void {
            state.register_modal = false
            state.login_modal = !state.login_modal
        },
        setRegisterModal (state) :void {
            state.login_modal = false
            state.register_modal = !state.register_modal
        }
    },
    actions: {
        async getGames ({commit}) {
            const payGames = await fetchGames('coins');
            commit('setPayGames', payGames)
            const freeGames = await fetchGames()
            commit('setFreeGames', freeGames)
        }
    }
});
