import { useEffect, useState } from 'react';
import { client } from '../lib/pocketbase';

export default function DataFetcher() {
    const [bars, setBars] = useState([]);

    useEffect(() => {
        client
            .collection('Bars')
            .getFullList({
                sort: 'price',
            })
            .then((res) => setBars(res));
    }, []);

    const barsPinted = bars.map(bar => ({ ...bar, pint: Math.floor(bar.price / bar.size / 2) }))
    const barsPintedSorted = [...barsPinted].sort((a, b) => a.pint - b.pint)

    return barsPintedSorted
}