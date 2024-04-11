import Image from "next/image";
import ListItem from "./components/listItem";

export default function Home() {
  const listItems = [
    { itemNumber: '01', heading: 'Track company-wide progress', text: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.' },
    { itemNumber: '02', heading: 'Advanced built-in reports', text: 'Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep key stakeholders informed.' },
    { itemNumber: '03', heading: 'Everything you need in one place', text: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.' }
  ]
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
            <p className="max-w-md px-6 text-center text-darkGrayishBlue md:text-left md:max-w-sm md:px-0">
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
      {/* Features Section */}
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* Whats different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What&apos;s different about manage
            </h2>
            <p className="max-w-md px-6 text-center text-darkGrayishBlue md:text-left md:max-w-sm md:px-0">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/* Numbered list */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {listItems.map(i => <ListItem key={i.itemNumber} itemNumber={i.itemNumber} heading={i.heading} text={i.text} />)}
          </div>
        </div>
      </section>
    </>

  );
}
