import { Journal } from "../../../domain/entities/journal.entity";
import JournalCard from "../journal-card/journal-card.component";
import "./masonry-layout.css";

type MasonryLayoutProps = {
    journals: Journal[];
}

export default function MasonryLayout({ journals }: MasonryLayoutProps) {
    return (
        <div className="container-fluid masonry-layout">
            {journals.map((journal, index: number) => (
                <div key={index} className="masonry-item">
                    <JournalCard journal={journal} />
                </div>
            ))}
        </div>
    );
}