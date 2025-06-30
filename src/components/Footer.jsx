import { ArrowUp, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-3 px-4 bg-card relative border-t border-border mt-8 pt-6 flex flex-wrap justify-between items-center gap-3">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Akash. All rights reserved.
      </p>

      <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse flex-shrink-0" />
        <span>by</span>
        <a
          href="#hero"
          className="font-semibold text-purple-400 hover:text-purple-300 transition-colors"
        >
          Akash
        </a>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
