import { client } from '../lib/pocketbase';
import { useEffect, useState } from 'react';

export default function DataFetcher() {
    const [bars, setBars] = useState([]);
    const [location, setLocation] = useState("Seljord");
    const cities = ["Oslo", "Seljord"];

    useEffect(() => {
        client
            .collection('Bars')
            .getFullList({
                sort: 'price',
            })
            .then((res) => setBars(res));
    }, []);

    const barsFiltered = bars.filter(({ city }) => city === location);
    return (
        <>
            <nav>
                <h2 className="font-semibold">Velg sted:</h2>
                <ul className='flex gap-2 font-extrabold my-2'>
                    {cities.map((city) => (
                        <li className="hover:bg-violet-300 bg-amber-200 rounded-md p-1 cursor-pointer" key={city} onClick={() => setLocation(city)}>{city}</li>
                    ))}
                </ul>
                <h1 className="flex text-2xl font-semibold my-2">Topplista — {location}</h1>
            </nav>
            <ul className="mb-1">
                {barsFiltered.map(({ bar, price, id }) => (
                    <li className="flex justify-between font-semibold border-b-2 border-fuchsia-200" key={id}>
                        <span>{bar}</span>
                        <span>{price},-</span>
                    </li>
                ))}
            </ul>
        </>
    )
}


