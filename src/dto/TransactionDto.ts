export interface ITransaction {
    amount: number;
    balanceable_id: number;
    balanceable_type: string;
    description: string;
    id: number;
    referenceable_id: number | null;
    referenceable_type: string | null;
    created_at: string | Date;
    updated_at: string | Date;
}