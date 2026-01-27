import { Link } from "react-router-dom";

const LinksBox = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-cblue font-bold font-montserrat mb-4 uppercase">
        {title}
      </h4>
      <ul className="space-y-4 font-inter text-[13px] md:text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="hover:text-reddish text-white transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksBox;
