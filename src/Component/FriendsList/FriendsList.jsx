import { Friend } from '../Friend/Friend';

export default function FriendsList({ list }) {
    if (!list) return null;

    return (
        <div className="flex flex-col gap-1 max-w-lg">
            {list.map((item) => (
                <Friend key={item.id} item={item} />
            ))}
        </div>
    );
}