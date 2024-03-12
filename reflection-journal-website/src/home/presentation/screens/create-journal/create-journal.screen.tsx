import CharCountBadge from "../../../../components/structure/char-count-badge/word-count-badge.component";
import { createJournal } from "../../../data/api/journal.api";
import "./create-journal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateJournal() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ title: "", content: "", privacy_settings: 1 });
    const [errors, setErrors] = useState([] as string[]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, title: e.target.value });
    }

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({ ...formData, content: e.target.value });
    }

    const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setFormData({ ...formData, privacy_settings: 2 });
        } else {
            setFormData({ ...formData, privacy_settings: 1 });
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);

        await createJournal(formData)
            .then(() => {
                navigate("/home");
            })
            .catch((error) => {
                if (error.response.status === 400 && error.response.data.errors) {
                    const errorMessages = error.response.data.errors.map((error: { msg: string; }) => error.msg);
                    setErrors([...errorMessages]);
                } else if (error.response.data.message) {
                    setErrors([error.response.data.message]);
                }
            })
        }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card create-card m-4">
                <div className="card-body">
                    <h1 className="card-title ms-1">Create a Journal</h1>
                    <form className="m-4">
                        <div className="form-group">
                            <label htmlFor="journal-title" className="fs-5 ms-1 mb-1">
                                <span className="form-label">
                                    Journal Title
                                </span>
                                <CharCountBadge char_count={formData.title.length} max_char_count={255} />
                            </label>
                            <input type="text" className="form-control create-input title-input" id="journal-title" onChange={(e) => handleTitleChange(e)} value={formData.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="journal-content" className="fs-5 ms-1 mb-1">
                                <span className="form-label">
                                    Journal Content
                                    <CharCountBadge char_count={formData.content.length} max_char_count={25565} />
                                </span>
                                
                            </label>
                            <textarea className="form-control create-input content-input" id="journal-content" onChange={(e) => handleContentChange(e)} value={formData.content} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="privacy-settings" className="form-label fs-5 ms-1">Privacy Settings</label>
                            <div className="form-check form-switch">
                                <div className="container d-flex align-items-center">
                                    <input className="form-check-input private-switch" type="checkbox" id="privacy-settings" onChange={(e) => handlePrivacyChange(e)} />
                                    <label className="form-check-label fs-6 ms-2" htmlFor="privacy-settings">Private</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary create-btn" onClick={()=>window.history.go(-1)}>Discard</button>
                        <button type="submit" className="btn btn-primary create-btn ms-2" onClick={(e)=>handleSubmit(e)}>Create</button>
                    </form>
                </div>
                {
                    errors && errors.length > 0 &&
                    <div className="container d-flex align-items-center justify-content-center" role="alert">
                        <div className="alert alert-danger">
                            <ul>
                                {errors.map((error, index) => {
                                    return <li key={index}>{error}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}