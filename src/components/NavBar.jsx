import { Link } from "react-router-dom";

export default function NavBar() {
    const pageLinks = [{ url: "/", address: "Hjem" }, { url: "/om-oss", address: "Om oss" }]

    return (
        <>
            <nav className="font-semibold">
                <ul className="flex gap-2">
                    {pageLinks.map(({ url, address }) => (
                        <li key={url} className="hover:bg-violet-300 px-1 py-0.5 rounded-md">
                            <Link to={url}>{address}</Link>
                        </li>
                    ))}
                </ul>
            </nav >
        </>
    )
}