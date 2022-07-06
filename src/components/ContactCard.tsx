import { FC } from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
interface IContactCard {
  color: string;
  social_media: string;
  link: string;
  text: string;
}

const icons = {
  email: <MdEmail />,
  linkedIn: <BsLinkedin />,
  github: <FaGithub />,
};
const ContactCard: FC<IContactCard> = ({ color, social_media, link, text }) => {
  return (
    <a href={link}>
      <li
        className={`mb-2 px-4 py-2 border text-center ${color} shadow-lg text-white rounded-md flex items-center gap-6 min-w-[450px]`}
      >
        <div className="p-2 bg-white text-2xl text-slate-600 rounded">
          {icons[social_media as keyof typeof icons]}
        </div>
        <p className="md:tracking-widest">{text}</p>
      </li>
    </a>
  );
};

export default ContactCard;
