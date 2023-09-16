import DropdownCard from "./DropdownCard";

export default function Toplist({ barList }) {
    return (
        <ul>
            {barList.map(({ bar, price, id, size, updated, pint }) => (
                <li className="font-semibold mb-2 border-b-2 border-violet-300" key={id}>
                    <details>
                        <summary className="flex justify-between cursor-pointer">
                            <span>{bar}</span>
                            {price === pint ? <span>{pint},-</span> : <span>*{pint},-</span>}
                        </summary>
                        <DropdownCard
                            price={price}
                            size={size}
                            updated={updated} />
                    </details>
                </li>
            ))}
        </ul>
    )
}