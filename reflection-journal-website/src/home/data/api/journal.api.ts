import axios from "axios";
import { Journal } from "../../domain/entities/journal.entity";
import { axiosConfig } from "../../../config/axios.config";

export async function getAllUserJournals(): Promise<Journal[]> {
    const result = await axios.get(`/api/journals/getAllJournalsByUserId`, axiosConfig);
    const journals: Journal[] = result.data;
    return journals;
}

export async function createJournal(journal: Journal): Promise<Journal> {
    console.log(journal);
    const result = await axios.post(`/api/journals`, journal, axiosConfig);
    return result.data;
}
