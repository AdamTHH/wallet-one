import StackDrawer from "./StackDrawer";
import { Button } from "./ui/button";
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav id="nav-main" className="fixed z-[9999] w-[100vw] h-16 p-4 lg:p-[1vh] lg:h-[5vh] flex justify-between items-center yellowToGreenGradient">
            <div className="w-full h-full lg:w-5/6 mx-auto flex items-center justify-between">

                <StackDrawer />

                <a href="/" className="ml-auto h-full">
                    <Image src="/walletone.svg" alt="Wallet One" width={40} height={40} className="h-full w-auto" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
