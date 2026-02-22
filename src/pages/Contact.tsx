import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-20"
    >
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 text-center mb-24">
        <span className="text-xs uppercase tracking-[0.4em] text-gallery-charcoal/40 mb-6 block">Inquiries</span>
        <h1 className="text-6xl md:text-7xl font-serif mb-10 italic">Connect with the Aura</h1>
        <p className="text-xl text-gallery-charcoal/60 leading-relaxed font-light max-w-2xl mx-auto">
          Whether you are a seasoned collector or a first-time visitor, we are here to guide you through the stories of our artists.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left: Contact Info & Locations */}
          <div className="lg:col-span-5 space-y-16">
            <section className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gallery-charcoal/40">General Inquiries</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-gallery-charcoal/30 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:hello@auragallery.com" className="text-lg font-serif hover:text-gallery-charcoal/60 transition-colors">hello@auragallery.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-gallery-charcoal/30 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-lg font-serif">+44 (0) 20 7946 0123</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gallery-charcoal/40">Our Galleries</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <p className="font-serif text-xl italic">London</p>
                  <p className="text-sm text-gallery-charcoal/60 leading-relaxed">
                    42 Mayfair Square<br />
                    London, W1J 8AJ<br />
                    United Kingdom
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-xl italic">Paris</p>
                  <p className="text-sm text-gallery-charcoal/60 leading-relaxed">
                    18 Rue de Seine<br />
                    75006 Paris<br />
                    France
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-serif text-xl italic">New York</p>
                  <p className="text-sm text-gallery-charcoal/60 leading-relaxed">
                    520 West 24th Street<br />
                    New York, NY 10011<br />
                    USA
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-gallery-charcoal/40">Follow Our Journey</h2>
              <div className="flex space-x-8">
                <a href="#" className="text-gallery-charcoal/40 hover:text-gallery-charcoal transition-colors"><Instagram size={24} /></a>
                <a href="#" className="text-gallery-charcoal/40 hover:text-gallery-charcoal transition-colors"><Twitter size={24} /></a>
                <a href="#" className="text-gallery-charcoal/40 hover:text-gallery-charcoal transition-colors"><Linkedin size={24} /></a>
              </div>
            </section>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gallery-white p-10 md:p-16 shadow-sm border border-gallery-charcoal/5">
              <h2 className="text-3xl font-serif mb-10 italic">Send an Inquiry</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gallery-charcoal/40">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gallery-charcoal/20 py-2 focus:border-gallery-charcoal outline-none transition-colors font-light"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gallery-charcoal/40">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-gallery-charcoal/20 py-2 focus:border-gallery-charcoal outline-none transition-colors font-light"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gallery-charcoal/40">Subject</label>
                  <select className="w-full bg-transparent border-b border-gallery-charcoal/20 py-2 focus:border-gallery-charcoal outline-none transition-colors font-light appearance-none">
                    <option>Acquisition Inquiry</option>
                    <option>Private Viewing Request</option>
                    <option>Artist Submission</option>
                    <option>Press & Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gallery-charcoal/40">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-transparent border-b border-gallery-charcoal/20 py-2 focus:border-gallery-charcoal outline-none transition-colors font-light resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gallery-charcoal text-gallery-white py-5 text-xs uppercase tracking-[0.2em] font-bold hover:bg-gallery-charcoal/90 transition-colors shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
