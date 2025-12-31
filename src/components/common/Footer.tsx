import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-8 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Ammar. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a
                        href="https://www.facebook.com/ammaryascer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                        title="Facebook"
                    >
                        <Facebook size={20} />
                    </a>
                    <a
                        href="https://x.com/ammaryascer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 text-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                        title="X (Twitter)"
                    >
                        <Twitter size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/ammaryascer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-pink-100 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
                        title="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ammaryascer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
                        title="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
