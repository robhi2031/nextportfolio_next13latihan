import Image from "next/image";
import Link from "next/link";

const CardList = ({ data }: any) => {
    return <div className="overflow-hidden rounded-xl ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative group flex flex-col hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 hover:bg-gray-100/50 dark:hover:bg-gray-900/50">
        <div className="aspect-w-4 aspect-h-2">
            <Image src="https://nuxt.com/_vercel/image?url=/assets/blog/v3.9.png&w=640&q=100" width={384} height={192} alt="Nuxt 3.9"
                unoptimized
                className="object-cover object-top w-full h-full" />
        </div>
        <div className="flex-1 px-4 py-5 sm:p-6">
            <Link href="/blog/v3-9" className="focus:outline-none"
                aria-label="Nuxt 3.9">
                <span className="absolute inset-0" aria-hidden="true"></span>
            </Link>
            <div className="mb-6 flex">
                <span className="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25">Release</span>
            </div>
            <h4 className="text-gray-900 dark:text-white font-semibold truncate flex items-center gap-1.5 text-lg">
                { data }
            </h4>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                { data }
            </p>
        </div>
        <div className="px-4 py-4 sm:px-6 pt-0">
            <div className="flex items-center justify-between gap-3">
                <time className="text-gray-500 dark:text-gray-400">December 25, 2023</time>
                <div className="inline-flex flex-row-reverse justify-end">
                    <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-6 w-6 text-xs ring-2 ring-white dark:ring-gray-900 -me-1.5 first:me-0 lg:hover:scale-110 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform">
                        <Image className="rounded-full h-6 w-6 text-xs" alt="Daniel Roe" src="https://github.com/danielroe.png" unoptimized fill={true} />
                        <Link href="https://twitter.com/danielcroe" rel="noopener noreferrer" target="_blank" className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>;
};

export default CardList;