type JournalJson = {
    id: number;
    user_account_id: number;
    title: string;
    content: string;
    created_at: string;
    edited_at: string;
};

export default class Journal {
    id: number;
    user_account_id: number;
    title: string;
    content: string;
    created_at: string;
    edited_at: string;
    constructor(jsonObject: JournalJson) {
        Object.assign(this, jsonObject);
    }
}
