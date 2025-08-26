// import Link from "next/link";
// import Image from "next/image";

// const NAV_LINKS = [
//   { key: "home", href: "/", label: "Home" },
//   { key: "about", href: "/about", label: "About" },
//   { key: "services", href: "/services", label: "Services" },
//   { key: "contact", href: "/contact", label: "Contact" }
// ];

// const Navbar = () => {
//   return (
    
//       <nav className="border-2 flexbetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//       <Image  src="/hilink-logo.svg" alt="logo" width={74} height={29} />
//       </Link>
      
//    <ul className = "hidden h-full gap-12 lg:flex">
//    {NAV_LINKS.map((link) => (
//    <Link href={link.href} key={link.key} className="regular-16 text-red-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//     {link.label}
//     </Link>
//     ))}
//     </ul>
//     </nav>
   
//   )
// }

// export default Navbar


import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About" },
  { key: "services", href: "/services", label: "Services" },
  { key: "contact", href: "/contact", label: "Contact us" }
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-container padding-container relative z-30 py-5 px-30">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-red-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
