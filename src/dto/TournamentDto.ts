export interface ITournament {
    challenge_starts: string | Date;
    challenge_ends: string | Date;
    entry_fee: number;
    game_url: string;
    id: number;
    image: string;
    is_closed: number | boolean;
    name: string;
    // score_key: string;
    users_count: IUserCount[]
}

interface IUserCount {
    created_at: string | Date;
    updated_at: string | Date;
    id: number;
    score: number;
    tournament_id: number;
    user_id: number;
    winner: number
}