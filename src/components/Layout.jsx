const barsOslo = [
    {
        bar: "Cafe Sara",
        price: 98,
    },
    {
        bar: 'Blå',
        price: 109,
    }
]

export default function Layout() {
    return (
        <>
            <h1 className="flex text-xl font-semibold mx-36">Topplista — Oslo</h1>
            <main>
                {barsOslo.map(({ bar, price }) => (
                    <ul className="mx-36">
                        <li className="flex justify-between font-semibold" key={bar}>
                            <span>{bar}</span>
                            <span>{price},-</span>
                        </li>
                    </ul>
                ))}
            </main>
        </>
    )
}