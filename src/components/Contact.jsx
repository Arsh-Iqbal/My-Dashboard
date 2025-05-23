"use client";

import { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setMessageSent(true);
      setIsSubmitting(false);
      setTimeout(() => setMessageSent(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-9 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 ">
          {/* Contact Info */}
          <div className="space-y-8 mt-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaEnvelope className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    iqbalarsh54@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaPhoneAlt className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8090010660
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FaMapMarkerAlt className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Panchsheel Greens 2, Ghaziabad, Ithaira, Uttar Pradesh
                    201009
                  </p>

                  {/* Location Map */}
                  <div className="mt-4 rounded-md overflow-hidden border border-border shadow-md">
                    <iframe
                      title="Panchsheel Greens 2 Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.940723364584!2d77.4309014!3d28.6282974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf20dfc1a163d%3A0x2c7e21f3e73863ab!2sPanchsheel%20Greens%202%2C%20Ghaziabad%2C%20Ithaira%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1716452430211!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" className="hover:text-primary">
                  <FaLinkedin />
                </a>
                <a href="#" target="_blank" className="hover:text-primary">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" className="hover:text-primary">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" className="hover:text-primary">
                  <FaTwitch />
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 responsive-heading">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="xyz..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex items-center justify-center gap-2 responsive-heading"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <FaPaperPlane size={16} />
              </button>

              {messageSent && (
                <p className="text-sm text-green-600 mt-2 text-center">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
