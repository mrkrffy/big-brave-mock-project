const socials = ["Facebook", "Instagram", "LinkedIn", "Gmail"];

const Footer = () => {
  return (
    <div className="bg-[#1F2A26] py-20 lg:px-80 w-full text-center">
      <div className="text-[var(--text-color-primary)] text-3xl font-bold">
        Big Brave Coffee
      </div>
      <div className="my-5 text-white text-sm leading-6 px-10">
        Big Brave Coffee is a bold and passionate coffee brand dedicated to
        crafting high-quality, ethically sourced brews for those who dare to
        dream big. With a focus on rich flavors, sustainable sourcing, and
        fearless innovation, Big Brave Coffee offers a selection of robust
        blends and single-origin roasts that fuel creativity and courage.
        Whether you’re starting your day or chasing your next adventure, every
        cup is a tribute to resilience, ambition, and the pursuit of greatness.
      </div>
      <div className="flex flex-row justify-center items-center space-x-5 mt-10">
        {socials.map((social, index) => (
          <a
            href={`www.${social.toLowerCase()}.com`}
            className="border-1 border-white p-2 rounded-full"
            key={index}
          >
            <img
              src={`/socials/${social.toLowerCase()}.svg`}
              alt={social}
              className="w-5 h-5  filter invert brightness-0"
            />
          </a>
        ))}
      </div>
      <div className="text-white text-xs mt-10">
        © {new Date().getFullYear()} Big Brave Coffee. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
