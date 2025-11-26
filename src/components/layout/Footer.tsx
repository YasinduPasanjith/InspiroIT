import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black/50 border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-2xl font-bold text-primary tracking-tighter">
                            inspiro<span className="text-white">IT</span>
                        </Link>
                        <p className="text-gray-400 text-sm mt-2">
                            Future-Ready IT Solutions for your business.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            Twitter
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            LinkedIn
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            Instagram
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} inspiroIT. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
