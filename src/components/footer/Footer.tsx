import { footerLinks } from "../../const/const";

const Footer = () => (
  <footer className="flex flex-col text-black-100  border-t border-gray-200 mt-10">
    <div className="flex max-md:flex-col flex-wrap justify-center md:justify-between gap-5 sm:px-16 px-6 py-10">
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start gap-6">
        <p className="text-base text-gray-700">
          Kornel Użarowski 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end justify-center flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item, i) => (
          <div key={i} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {" "}
              {item.links.map((link) => (
                <a key={link.title} href={link.url} className="text-gray-500">
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-center md:justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>@2024 Kornel Użarowski. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
        <a href="/" className="text-gray-500">
          Privacy & Policy
        </a>
        <a href="/" className="text-gray-500">
          Terms & Condition
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
