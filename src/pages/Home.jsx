import Fetcher from "../components/Fetcher";
import Toplist from "../components/Toplist";
import { useState } from 'react';

export default function Home() {
    const bars = Fetcher()
    const cities = ["Oslo", "Seljord", "Bø"];
    const [location, setLocation] = useState("Oslo");
    const [sort, setSort] = useState(false)
    const barsFiltered = bars.filter(({ city }) => city === location);

    const barsAlphaSorted = [...barsFiltered].sort((a, b) => {
        if (a.bar < b.bar) {
            return -1;
        }
        else return 1;
    });

    const handleClick = () => setSort(!sort);

    return (
        <>
            <div>
                <h1 className="text-2xl font-bold mb-8">Din ultimate guide til pilspriser</h1>
            </div>
            <nav>
                <h2 className="font-semibold">Velg sted:</h2>
                <ul className='flex gap-2 font-extrabold my-2'>
                    {cities.map((city) => (
                        <li className="hover:bg-violet-300 bg-amber-200 rounded-md p-1 cursor-pointer" key={city} onClick={() => setLocation(city)}>{city}</li>
                    ))}
                </ul>
                <button onClick={handleClick} className="hover:bg-violet-300 bg-amber-200 rounded-md p-1 cursor-pointer font-extrabold">
                    {sort == false ? "Sorter alfabetisk" : "Sorter etter pris"}
                </button>
                <h1 className="flex text-2xl font-semibold my-2">Ølpriser — {location}</h1>
            </nav>
            {sort == false ? <Toplist barList={barsFiltered} /> : <Toplist barList={barsAlphaSorted} />}
            <p>* Indikerer at pris er justert til halviter. Klikk på baren for å se mer informasjon</p>
        </>
    )
}