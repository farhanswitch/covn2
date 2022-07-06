import { NextPage } from "next";
import Head from "next/head";
import ContactCard from "../src/components/ContactCard";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>SwitchCov | Kontak Saya</title>
        <meta name="description" content="Indonesian covid 19 data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center">
        <ul className="grid grid-cols-1 place-items-center gap-8 py-20 mx-auto">
          <ContactCard
            social_media={"email"}
            color={"bg-[#dbbc8e]"}
            link={"mailto://farhan.muhammad11@programmer.net"}
            text={"farhan.muhammad11@programmer.net"}
          />
          <ContactCard
            social_media={"github"}
            color={"bg-[#a15d98]"}
            link={"https://github.com/farhanswitch"}
            text={"Github : FarhanSwitch"}
          />
          <ContactCard
            social_media={"linkedIn"}
            color={"bg-[#045c8a]"}
            link={"https://linkedin.com/in/farhanswitch"}
            text={"LinkedIn : FarhanSwitch"}
          />
        </ul>
      </div>
    </>
  );
};

export default Contact;
