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
            <h1 className="flex text-xl font-semibold mx-36">Topplista — Oslo</h1>
            <main>
                <div>
                    {barsOslo.map(({ bar, price }) => (
                        <ul className="mx-36">
                            <li className="flex justify-between font-semibold" key={bar}>
                                <span>{bar}</span>
                                <span>{price},-</span>
                            </li>
                        </ul>
                    ))}
                </div>
                <h1 className="flex text-xl font-semibold mx-36 mt-4">Topplista — Seljord</h1>
                <div>
                    {barsSeljord.map(({ bar, price }) => (
                        <ul className="mx-36">
                            <li className="flex justify-between font-semibold" key={bar}>
                                <span>{bar}</span>
                                <span>{price},-</span>
                            </li>
                        </ul>
                    ))}
                </div>
            </main>
        </>
    )
}