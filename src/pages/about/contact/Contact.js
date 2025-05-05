import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactImage from "../../../assets/images/12.jpg";
import { SiGithub } from "react-icons/si";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { FaUser, FaPaperPlane, FaEnvelope, FaComment } from 'react-icons/fa';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_27euoco',       // your service ID
      'template_whj0535',      // your template ID
      form.current,
      'PaHrSff_RqN_bHSai'        // your EmailJS public key
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-800 text-white py-24 pt-30 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl text-orange-300 font-bold mb-4">Contact Me</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-mono">
            &lt;Feel free to reach out for any inquiries, collaborations, or just to say hello!&gt;
          </p>

        </div>

        {/* Google Map */}
        <div className="mb-16 relative">
  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
    <iframe
      title="Google Map"
      width="100%"
      height="300"
      frameBorder="0"
      className="w-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5569992544043!2d91.7260484149718!3d26.130238583464985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5abdd38979c9%3A0x4b4b8ab99d73102b!2sJyotikuchi%2C%20Guwahati%2C%20Assam%20781034!5e0!3m2!1sen!2sin!4v1683077651028!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      style={{ border: 0 }}
    ></iframe>
  </div>

  {/* Bouncing Red Location Pin */}
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce">
    <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
  </div>

  {/* Orange Info Box */}
  <div className="absolute bottom-4 right-4 bg-orange-300 text-black p-3 rounded-md shadow-md text-xs font-medium">
    📍 Jyotikuchi, Guwahati<br />
    Assam, India
  </div>
</div>




        {/* Contact Form + Side */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="md:w-1/2 w-full space-y-6">
            <img
              src={contactImage}
              alt="Contact"
              className="rounded-lg shadow-lg w-40 h-40 object-cover"
            />
            <h3 className="text-2xl font-bold">Let’s Talk!</h3>
            <div className="flex items-start gap-3">
              <p className="text-gray-400 text-sm">
                Whether you’re planning a new project or simply looking to connect, I’m here to help. Don't hesitate to drop a message through the form—let’s bring your ideas to life!
              </p>
            </div>

            <div className="flex items-start">
              <p className="text-orange-300 font-semibold text-sm">
                Currently offering professional freelance services, I specialize in delivering high-quality, tailored solutions. Let’s collaborate and create something amazing together.
              </p>

            </div>

            <div className="flex items-start gap-3">
            <p className="mt-1 text-right text-orange-300 text-xl" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
  — Binud Panging
</p>


            </div>


          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-1/2 w-full bg-white/10 backdrop-blur-3xl rounded-2xl p-8 border border-white/20 shadow-lg space-y-4"
          >
            {/* Name Input */}
            <div className="relative">
              <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-2">Your Name</label>
              <div className="flex items-center border border-white/20 rounded-md bg-transparent">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="relative">
              <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-2">Your Email</label>
              <div className="flex items-center border border-white/20 rounded-md bg-transparent">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
                  required
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="relative">
              <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-2">Your Message</label>
              <div className="flex items-start border border-white/20 rounded-md bg-transparent">
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows="5"
                  className="w-full bg-transparent p-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 text-sm"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button with Icon */}
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-orange-600 rounded-md hover:bg-orange-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Message</span>
              <FaPaperPlane className="h-5 w-5 text-white" />
            </button>

          </form>
        </div>



      </div>
    </section>
  );
};

export default Contact;
