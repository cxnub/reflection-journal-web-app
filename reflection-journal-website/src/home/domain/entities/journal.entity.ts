export interface Journal {
    id?: number;
    user_account_id?: number;
    username?: string;
    privacy_settings: number;
    title: string;
    content: string;
    created_at?: string;
    edited_at?: string;
}