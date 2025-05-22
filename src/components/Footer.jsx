"use client";

import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border py-8 mt-5">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>

        <div className="flex justify-center gap-6 text-2xl text-foreground">
          <a
            href="https://www.linkedin.com/in/arsh-iqbal-338485313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Arsh_024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Arsh-Iqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iqbalarsh54@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <SiGmail className="icons" />
          </a>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          © {new Date().getFullYear()} All rights reserved. Made with ❤️ by Arsh
        </p>
      </div>
    </footer>
  );
}
