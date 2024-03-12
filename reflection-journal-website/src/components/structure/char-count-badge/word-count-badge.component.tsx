import "./char-count-badge.css";

type CharCountBadgeProps = {
    char_count: number;
    max_char_count: number;
}

export default function CharCountBadge({ char_count, max_char_count }: CharCountBadgeProps) {
    return (
        <span className="char-count-badge badge rounded-pill ms-1">
            {char_count}/{max_char_count} characters
        </span>
    );
}
