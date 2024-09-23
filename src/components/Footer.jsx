import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Prescripto, we provide expert care with compassion, ensuring
            every patient feels valued. Our experienced doctors offer
            personalized medical services tailored to your needs. Whether for
            routine check-ups or specialized care, we{"'"}re here to support
            your health journey. Book your appointment today and experience
            exceptional care in a welcoming environment.
          </p>
        </div>
        <div>
          <p className="uppercase text-xl font-medium mb-5">company</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="uppercase text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+8880192281075</li>
            <li>Prescripto@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* copyright */}
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024 @ Prescripto.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
