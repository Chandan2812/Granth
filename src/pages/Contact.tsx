import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import bull from "../assets/anantha-krishna-a-y6NZHThhLj4-unsplash.jpg";

function Contact() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <section className="relative  py-12 px-6 mt-20">
        <div className="relative z-10 w-11/12 mx-auto flex flex-col lg:flex-row gap-12 items-center font-light">
          {/* Left: Contact Info */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:w-20 after:mt-2 after:bg-[var(--primary-color)]">
              Let's Connect
            </h2>
            <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mb-10">
              We’d love to hear from you. Reach out and let’s start a
              conversation.
            </p>

            <div className="space-y-6 hover:">
              <ContactItem
                icon={<Phone />}
                label="Call us"
                content="+91 9220956525"
                href="tel:+91 9220956525"
              />
              <ContactItem
                icon={<Mail />}
                label="Email us"
                content="granthdreamhomesllp@gmail.com"
                href="mailto:granthdreamhomesllp@gmail.com"
              />
              <ContactItem
                icon={<MapPin />}
                label="Office"
                content="INDIA"
                // href="https://www.google.com/maps/place/1+Bell+St,+London+NW1+5BY"
              />
              <ContactItem
                icon={<Clock />}
                label="Working Hours"
                content="Open time - Monday to saturday (10AM to 7PM)"
              />
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex-1 justify-center hidden md:flex">
            <img
              src={bull}
              alt="Contact Us"
              className="w-full max-w-xl h-auto rounded-xl shadow-lg"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black opacity-0 dark:opacity-40 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>
      {/* Embedded Map */}

      <section className="max-w-7xl h-[400px] dark:bg-black mx-auto my-5">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.18763210607!2d74.0066944!3d15.349728450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1748522402955!5m2!1sen!2sin" // replace with your actual map URL
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full rounded-md"
        ></iframe>
      </section>
      <Footer />
    </div>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  content: string;
  href?: string;
};

const ContactItem = ({ icon, label, content, href }: ContactItemProps) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`flex items-center gap-4 ${href ? "cursor-pointer" : ""}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="p-3 bg-[var(--primary-color)] text-black dark:text-white rounded-full hover:shadow-[0_0_10px_var(--primary-color)]">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-800 dark:text-gray-300">{label}</p>
        <p className="text-lg  text-black dark:text-white">{content}</p>
      </div>
    </Wrapper>
  );
};

export default Contact;
