import logo from "../assets/pilz.png";

export default function Footer() {
    return (
        <div className="flex justify-center">
            <span className="flex flex-col">
                <img src={logo} alt='logo' width='150' height='150' />
                <p className="text-center">© Pilz-gruppen</p>
            </span>
        </div>
    )
}
