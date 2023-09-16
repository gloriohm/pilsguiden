import { useState, useEffect } from 'react';
import Fetcher from "./Fetcher";

export default function Filter() {
    const bars = Fetcher()
    const cities = ["Oslo", "Seljord", "Bø"];
    const [location, setLocation] = useState("Oslo");
    const barsFiltered = bars.filter(({ city }) => city === location);

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
                <h1 className="flex text-2xl font-semibold my-2">Ølpriser — {location}</h1>
            </nav>
        </>
    )
}
