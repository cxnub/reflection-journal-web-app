import "./create-journal.css";

export function CreateJournal() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card create-card m-4">
                <div className="card-body">
                    <h1 className="card-title ms-1">Create a Journal</h1>
                    <form className="m-4">
                        <div className="form-group">
                            <label htmlFor="journal-title" className="form-label fs-5 ms-1">Journal Title</label>
                            <input type="text" className="form-control create-input" id="journal-title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="journal-content" className="form-label fs-5 ms-1">Journal Content</label>
                            <textarea className="form-control create-input content-input" id="journal-content" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="privacy-settings" className="form-label fs-5 ms-1">Privacy Settings</label>
                            <div className="form-check form-switch">
                                <div className="container d-flex align-items-center">
                                    <input className="form-check-input private-switch" type="checkbox" id="privacy-settings" />
                                    <label className="form-check-label fs-6 ms-2" htmlFor="privacy-settings">Private</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary create-btn">Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
}