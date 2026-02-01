import { Frend } from '../Frend/Frend';


export default function FrendsList({list}) {

    return (
        <>
            {list.map((item) => (
                <Frend key={item.id} item={item} />
            ))}
        </>
    )
}
