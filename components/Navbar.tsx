import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const NAV_LINKS = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "services", href: "/services", label: "Services" },
  { key: "contact", href: "/contact", label: "Contact us" },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Nav Links */}
      <ul className="hidden gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="text-gray-800 hover:text-green-600 transition"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login Button */}
      <div className="flex items-center">
        <Button type="button" title="Login" icon="/user.svg" />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={31}
        height={31}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
