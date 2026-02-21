import { Github, Linkedin, Mail, Notebook } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sapan Rajdev.
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/sapanrajdev"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/sapan-rajdev"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://medium.com/@sapanrajdev"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Notebook size={18} />
        </a>
        <a
          href="mailto:sapanrajdev@gmail.com"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default FooterSection;
