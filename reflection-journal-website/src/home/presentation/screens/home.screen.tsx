import React from 'react';
import convertDateToReadableFormat from '../../../utils/date-converter.utils';
import { useQuery } from '@tanstack/react-query';
import { getAllUserJournals } from '../../data/api/journal.api';

export function Home() {
    const { data } = useQuery({
        queryKey: ["getAllJournals"],
        queryFn: async () => await getAllUserJournals()
    });
    const journals = data || [];

    return (
        <div className="container-fluid text-center">
            <h1 className='mt-3 mb-3'>Your Journals</h1>
            <div className="row">
                {journals.map((journal) => (
                    <div className="col-md-4" key={journal.id}>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{journal.title}</h5>
                                <p className="card-text">{journal.content}</p>
                                <p className="card-footer">
                                    Created at {convertDateToReadableFormat(journal.created_at)}<br />
                                    {
                                        journal.edited_at &&
                                        `Last updated on ${convertDateToReadableFormat(journal.edited_at)}`
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                {
                    journals.length === 0 &&
                    <div className="col-12">
                        <div className="container d-flex align-items-center justify-content-center" role="alert">
                            <h2>
                                You have no journals. Create one now!
                            </h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
