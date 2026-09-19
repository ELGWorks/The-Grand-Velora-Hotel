import BrandLogo from '../assets/TGVH-Logo-wo-text.svg';

export function NavBar() { 
    return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#013220] shadow-sm border-b border-[#ffd21f]"> 
    
        <div className="flex items-center">
            <img className="w-8"src={BrandLogo} alt="The Grand Velora Hotel" />
            <div className="ml-2 text-xl hidden xl:block font-semibold text-[#ffd21f]">
                The Grand Velora Hotel
            </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-black text-white">
                Home
            </a>
            {/* <a href="#" className="text-gray-700 hover:text-black text-white">
                Check Reservation
            </a> */}
            <a href="#" className="text-gray-700 hover:text-black text-white">
                Contact
            </a>
        </div> {/* Mobile Menu Button */}

        <button className="md:hidden text-2xl text-[#ffd21f]">
            ☰
        </button>

    </nav> );
}