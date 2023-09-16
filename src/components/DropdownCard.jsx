export default function DropdownCard({ size, price, updated }) {
    return (
        <div className="px-4 mb-1">
            <ul className="flex gap-4 text-sm">
                <li className="">Størrelse: <span className="font-medium">{size}l</span></li>
                <li className="">Pris: <span className="font-medium">{price},-</span></li>
                <li>Oppdatert: <span className="font-medium">{updated.slice(0, 10)}</span></li>
            </ul>
        </div>
    )
}
