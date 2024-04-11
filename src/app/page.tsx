import Image from "next/image";

export default function Home() {
  return (
    // Navbar
    <>
      <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <Image width={146} height={24} src="img/logo.svg" alt="Logo" />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">Pricing</a>
            <a href="#" className="hover:text-darkGrayishBlue">Product</a>
            <a href="#" className="hover:text-darkGrayishBlue">About Us</a>
            <a href="#" className="hover:text-darkGrayishBlue">Careers</a>
            <a href="#" className="hover:text-darkGrayishBlue">Community</a>
          </div>
          <a href="" className="hidden p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Get Started</a>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="hero">
        <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
          {/* Left-side(top on mobile) */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-md px-4 text-center text-darkGrayishBlue md:text-left md:max-w-sm md:px-0">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="#" className="p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">Get Started</a>
            </div>
          </div>
          {/* Right-side(top on mobile) */}
          <div className="md:w-1/2">
            <Image width={580} height={525} src="img/illustration-intro.svg" alt="graphs-and-charts" />
          </div>
        </div>
      </section>

    </>

  );
}
