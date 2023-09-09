import { base_url } from "@/api/index";
import { Store, useStore } from "vuex";
import { key } from "@/store/store";
import type { State } from "@/store/store";
import { getCookie } from "@/hooks/useCookie";
import type { IGame } from "@/dto/GameDto";

export const fetchGames = async (type: string = 'fun', limit: string = '10') :Promise<void> => {
    const store :Store<State> = useStore(key);
    const token :string | undefined = getCookie('token')

    let response :Response;

    if (token) {
        response = await fetch(`${base_url}/client/games?type=${type}&limit=${limit}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
    else {
        response = await fetch(`${base_url}/client/games?type=${type}&limit=${limit}`);
    }

    const result :IGame[] = await response.json();

    if (type === 'fun') {
        store.commit('setFreeGames', result);
    }
    else if (type === 'coins') {
        store.commit('setPayGames', result);
    }
};
