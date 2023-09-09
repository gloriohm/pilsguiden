import { useState } from "react";

export default function Location({ location }) {
    const [location, setLocation] = useState("Oslo")
    const cities = ["Oslo", "Seljord"]

    return (
        <nav>
            <ul>
                {cities.map((city) => (
                    <li key={city} onClick={() => setLocation(city)}>{city}</li>
                ))}
            </ul>
            <h1>Topplista — {location}</h1>
        </nav>
    )
}
