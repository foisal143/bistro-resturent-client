import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <div className="lg:flex justify-between h-full items-center p-0 bg-neutral text-white ">
        <aside className="lg:w-1/2 text-center py-8 lg:py-5">
          <h3 className="uppercase  text-2xl font-bold font-[Inter]">
            contact us
          </h3>
          <p>
            123 ABS Street, Uni 21, Bangladesh <br />
            +88 123456789 <br />
            Mon - Fri: 08:00 -22:00
            <br />
            Sat - Sun: 10:00 - 23:00
          </p>
        </aside>
        <div className="bg-[#111827] px-5 py-10 text-center font-[Inter] space-y-5 pb-0 lg:w-1/2 h-full text-white">
          <h3 className="text-2xl font-bold ">Follow US</h3>
          <p className="">Join us on social media</p>
          <p className="flex pb-8 items-center gap-5 justify-center">
            {' '}
            <FaFacebook></FaFacebook> <FaInstagram /> <FaTwitter />{' '}
          </p>
        </div>
      </div>
      <div className=" footer-center p-4 bg-black  text-white">
        <aside>
          <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
