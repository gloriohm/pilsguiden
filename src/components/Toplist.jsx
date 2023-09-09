import DataFetcher from "./DataFetcher";

export default function Toplist() {
    return (
        <>
            <ul>
                {bars.map(({ bar, price, id }) => (
                    <li className="flex justify-between font-semibold border-b-2 border-fuchsia-200" key={id}>
                        <span>{bar}</span>
                        <span>{price},-</span>
                    </li>
                ))}
            </ul>
        </>
    )
}