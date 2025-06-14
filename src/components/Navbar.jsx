import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={cn(
                "fixed w-full z-30 transition-all duration-300",
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}>
                <div className="container flex items-center justify-between">
                    <a
                        className="text-xl font-bold text-primary flex items-center"
                        href="#hero"
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Akash</span>{" "}
                            Portfolio
                        </span>
                    </a>

                    {/* desktop version */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a 
                                href={item.href} 
                                key={key}
                                className="hover:text-primary transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        className="md:hidden p-2 text-foreground z-50 relative"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* mobile menu overlay */}
            <div 
                ref={menuRef}
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
                    "transition-all duration-300 md:hidden",
                    "flex flex-col items-center justify-center",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                {/* Close button */}
                <button
                    onClick={closeMenu}
                    className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            href={item.href} 
                            key={key}
                            onClick={closeMenu}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Navbar;