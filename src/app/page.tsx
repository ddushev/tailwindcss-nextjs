import Image from "next/image";

export default function Home() {
  return (
    // Navbar
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <Image width={146} height={24} src="img/logo.svg" alt="Logo"></Image>
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
}
