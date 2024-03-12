import convertDateToReadableFormat from "../../../../utils/date-converter.utils";
import { Journal } from "../../../domain/entities/journal.entity";
import "./journal-card.css";
import DeleteModal from "./modals/delete-modal.component";
import EditModal from "./modals/edit-modal.component";
import ShareModal from "./modals/share-modal.component";


type JournalCardProps = {
    journal: Journal;
}

export default function JournalCard({ journal }: JournalCardProps) {

    const handleDelete = (e: MouseEvent) => {
        console.log("Delete button clicked");
    }

    return (
        <>
            <DeleteModal />
            <EditModal />
            <ShareModal />
            <div className="mb-3" key={journal.id}>
                <div className="card journal-card">
                    <div className="card-header">
                        <button className="btn delete-btn card-btn float-end p-2 me-1" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">
                            <i className="bi bi-trash3-fill"></i>
                        </button>
                        <button className="btn edit-btn card-btn float-end p-2">
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="btn share-btn card-btn float-end p-2 me-1">
                            <i className="bi bi-share"></i>
                        </button>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{journal.title}</h5>
                        <p className="card-text">{journal.content}</p>
                        <p className="card-footer">
                            Created at {convertDateToReadableFormat(journal.created_at)} by {journal.username}<br />
                            {
                                journal.edited_at &&
                                `Last updated on ${convertDateToReadableFormat(journal.edited_at)}`
                            }
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}