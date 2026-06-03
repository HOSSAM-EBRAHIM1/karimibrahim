import { Mail, MessageCircle, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-base text-foreground">
          Karim Ibrahim &copy; {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-2">
          <a href="mailto:arqamkarim74@gmail.com" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-foreground/5" aria-label="Email">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://wa.me/201021680972" target="_blank" rel="noreferrer" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-foreground/5" aria-label="WhatsApp">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href="#" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:bg-foreground/5" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
        <div>Cairo, Egypt · Available worldwide</div>
      </div>
    </footer>
  );
}