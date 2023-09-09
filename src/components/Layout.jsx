const barsOslo = [
    {
        bar: "Nils Bar & Cafe",
        price: 68,
    },
    {
        bar: "Sagene bar",
        price: 74,
    },
    {
        bar: "Hersleb grill og bar",
        price: 77,
    },
    {
        bar: "Luna",
        price: 84,
    },
    {
        bar: "Cacadou",
        price: 86,
    },
    {
        bar: "Cafe Sara",
        price: 98,
    },
    {
        bar: 'Preik',
        price: 106,
    },
    {
        bar: 'Blå',
        price: 109,
    }
]

const barsSeljord = [
    {
        bar: "Fjellheimpuben",
        price: 95,
    },
]

export default function Layout() {
    return (
        <>
            <h1 className="flex text-2xl font-semibold mb-2">Topplista — Oslo</h1>
            <main>
                <div>
                    <ul className="mb-1">
                        {barsOslo.map(({ bar, price }) => (
                            <li className="flex justify-between font-semibold border-b-2 border-fuchsia-200" key={bar}>
                                <span>{bar}</span>
                                <span>{price},-</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <h1 className="flex text-2xl font-semibold mt-4 mb-2">Topplista — Seljord</h1>
                <div>
                    <ul className="mb-1">
                        {barsSeljord.map(({ bar, price }) => (
                            <li className="flex justify-between font-semibold border-b-2 border-fuchsia-200" key={bar}>
                                <span>{bar}</span>
                                <span>{price},-</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </>
    )
}