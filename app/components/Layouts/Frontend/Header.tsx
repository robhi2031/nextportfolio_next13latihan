import Link from "next/link";

const Header = () => {
    return <header className="bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 -mb-px sticky top-0 z-50 lg:mb-0 lg:border-0">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div className="lg:flex-1 flex items-center gap-1.5">
                <Link href="/" className="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5">
                    <svg className="text-black dark:text-white block w-auto h-6" width="800" height="200"
                        viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M377 200C379.16 200 381 198.209 381 196V103C381 103 386 112 395 127L434 194C435.785 197.74 439.744 200 443 200H470V50H443C441.202 50 439 51.4941 439 54V148L421 116L385 55C383.248 51.8912 379.479 50 376 50H350V200H377Z"
                            fill="currentColor"></path>
                        <path
                            d="M726 92H739C742.314 92 745 89.3137 745 86V60H773V92H800V116H773V159C773 169.5 778.057 174 787 174H800V200H783C759.948 200 745 185.071 745 160V116H726V92Z"
                            fill="currentColor"></path>
                        <path
                            d="M591 92V154C591 168.004 585.742 179.809 578 188C570.258 196.191 559.566 200 545 200C530.434 200 518.742 196.191 511 188C503.389 179.809 498 168.004 498 154V92H514C517.412 92 520.769 92.622 523 95C525.231 97.2459 526 98.5652 526 102V154C526 162.059 526.457 167.037 530 171C533.543 174.831 537.914 176 545 176C552.217 176 555.457 174.831 559 171C562.543 167.037 563 162.059 563 154V102C563 98.5652 563.769 96.378 566 94C567.96 91.9107 570.028 91.9599 573 92C573.411 92.0055 574.586 92 575 92H591Z"
                            fill="currentColor"></path>
                        <path
                            d="M676 144L710 92H684C680.723 92 677.812 93.1758 676 96L660 120L645 97C643.188 94.1758 639.277 92 636 92H611L645 143L608 200H634C637.25 200 640.182 196.787 642 194L660 167L679 195C680.818 197.787 683.75 200 687 200H713L676 144Z"
                            fill="currentColor"></path>
                        <path
                            d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z"
                            fill="#00DC82"></path>
                    </svg>
                </Link>
            </div>
            <ul className="items-center gap-x-8 hidden lg:flex">
                <li className="relative">
                    <div className="relative">
                        <div className="inline-flex w-full" role="button" id="headlessui-popover-button-81" aria-expanded="false">
                            <Link className="text-sm/6 font-semibold flex items-center gap-1 dark:text-white hover:text-primary" href="/">
                                Home
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="relative">
                    <div className="relative">
                        <div className="inline-flex w-full" role="button" id="headlessui-popover-button-81" aria-expanded="false">
                            <Link className="text-sm/6 font-semibold flex items-center gap-1 dark:text-white hover:text-primary" href="/about">
                                About
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="relative">
                    <div className="relative">
                        <div className="inline-flex w-full" role="button" id="headlessui-popover-button-81" aria-expanded="false">
                            <Link className="text-sm/6 font-semibold flex items-center gap-1 dark:text-white hover:text-primary" href="/portfolio">
                                Portfolio
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="relative">
                    <div className="relative">
                        <div className="inline-flex w-full" role="button" id="headlessui-popover-button-81" aria-expanded="false">
                            <Link className="text-sm/6 font-semibold flex items-center gap-1 dark:text-white hover:text-primary" href="/blogs">
                                Blogs
                            </Link>
                        </div>
                    </div>
                </li>
                <li className="relative">
                    <div className="relative">
                        <div className="inline-flex w-full" role="button" id="headlessui-popover-button-81" aria-expanded="false">
                            <Link className="text-sm/6 font-semibold flex items-center gap-1 dark:text-white hover:text-primary" href="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="flex items-center justify-end lg:flex-1 gap-1.5">
                <div className="relative inline-flex">
                    <button type="button"
                        className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                        aria-label="Switch to dark mode">
                        <span className="i-ph-sun-duotone flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>;
}

export default Header;