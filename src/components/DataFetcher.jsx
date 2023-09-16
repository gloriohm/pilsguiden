import { useEffect, useState } from 'react';
import { client } from '../lib/pocketbase';
import Dropdown from './Dropdown';

export default function DataFetcher() {
    const [bars, setBars] = useState([]);
    const [location, setLocation] = useState("Oslo");
    const cities = ["Oslo", "Seljord"];

    const [dropdownState, setDropdownState] = useState({ open: false })
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    useEffect(() => {
        client
            .collection('Bars')
            .getFullList({
                sort: 'price',
            })
            .then((res) => setBars(res));
    }, []);

    const barsFiltered = bars.filter(({ city }) => city === location);
    const test = { bar: "Sara", price: 69, size: 0.5 }
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
            <ul className="mb-1">
                {barsFiltered.map(({ bar, price, id, size, updated }) => (
                    <li className="flex justify-between font-semibold mb-1 border-b-2 border-violet-300" key={id}>
                        <Dropdown
                            bar={bar}
                            price={price}
                            size={size}
                            updated={updated}
                        />
                        <span className="text-left">{size}l : {price},-</span>
                    </li>
                ))}
            </ul>
        </>
    )
}


