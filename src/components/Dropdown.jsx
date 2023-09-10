import { useState } from 'react'

export default function Dropdown({ price, size, bar, updated }) {
    const [dropdownState, setDropdownState] = useState({ open: false })

    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

    return (
        <div onClick={handleDropdownClick} className="cursor-pointer w-2/3">
            <button
                type="button"
                onClick={handleDropdownClick}
                className="hover:bg-violet-300 rounded-md p-1 cursor-pointer text-left">
                {bar}
            </button>
            {dropdownState.open && (<div>
                <ul className='px-2 text-sm font-medium'>
                    <li>Literspris: {price / size},-</li>
                    <li>Oppdatert: {updated.slice(0, 19)}</li>
                </ul>
            </div>
            )}
        </div>
    )
}
