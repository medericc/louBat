import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/louann_duke_fan/", icon: <FaInstagram /> },
  { href: "https://x.com/louann_fan", icon: <FaTwitter /> },
  { href: "https://www.youtube.com/playlist?list=PLaRNoqxybhEsXNLfQJ9MIMWCV9ZcUWNaY", icon: <FaYoutube /> },

];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#17328b] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-l font-light md:text-left">
         Louann Fan Account
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
