import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
      <main className="flex flex-col items-center justify-between p-24 lg:mt-20">
        <Image
          src="/contactheader.svg"
          alt="An SVG of an eye"
          width={350}
          height={350}
          className="my-4"
        />
        <div className="z-10 w-full max-w-6xl items-start justify-between lg:flex m-2">
          <div className="flex-auto w-64">
            <ContactForm />
          </div>
          <div className="flex-auto w-64 items-start justify-start ml-2 space-y-4">
            <p className="text-xl font-sans">
              My main focus these days is building products and leading projects
              for our clients at Upstatement. In my free time Ive also released
              an online video course that covers everything you need to know to
              build a web app with the Spotify API.
            </p>
            <p className="text-xl font-sans">
              When I’m not at the computer, I’m usually rock climbing, hanging
              out with my wife and two cats, or running around Hyrule searching
              for Korok seeds K o r o k s e e d s .
            </p>
            <div className="flex"></div>
          </div>
        </div>
      </main>
    );
}
 
export default Contact;