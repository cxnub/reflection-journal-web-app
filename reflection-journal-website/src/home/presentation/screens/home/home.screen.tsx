import { useQuery } from '@tanstack/react-query';
import { getAllUserJournals } from '../../../data/api/journal.api';
import './home.css';
import MasonryLayout from '../../components/masonry-layout/masonry-layout.component';

export function Home() {
    const { data } = useQuery({
        queryKey: ["getAllJournals"],
        queryFn: async () => await getAllUserJournals()
    });
    const journals = data || [];

    return (
        <div className="container-fluid">
            <h1 className='mt-3 mb-3'>Your Journals</h1>
                <MasonryLayout journals={journals} />
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
    );
}
