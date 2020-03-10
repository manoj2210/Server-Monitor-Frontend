import Link from "next/link";

function Header() {
    return (
        <header class="bg-gray-900 fixed w-full z-10 top-0 shadow">
            <div class="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
                <div class="w-1/2 pl-2 md:pl-0 p-5">
                    <a class="text-gray-100 text-base xl:text-xl no-underline hover:underline font-bold" href="/">
                        <i class="fas fa-moon text-blue-400 pr-3"></i> Server Monitor
                    </a>
                </div>
                <div class="w-1/2 pb-2">
                    <div class="flex relative inline-block float-right">
                        <div className="ml-10 relative flex items-baseline">
                            <Link href="/">
                                <a
                                    className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-900 text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-400"
                                >Home</a
                                >
                            </Link>
                            <Link href="/cpu">
                                <a
                                    className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-900 text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-400"
                                >CPU</a
                                >
                            </Link>
                            <Link href="/memory">
                                <a
                                    className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-900 text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-400"
                                >Memory</a
                                >
                            </Link>
                            <Link href="/network">
                                <a
                                    className="ml-8 px-3 py-2 font-medium text-center text-sm rounded-lg bg-gray-900 text-gray-100 hover:bg-gray-800 focus:outline-none focus:bg-gray-400"
                                >Network</a
                                >
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
        </header>

            );
        }
        
        export default Header;
