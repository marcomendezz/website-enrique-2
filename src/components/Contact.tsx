"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-[800px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl tracking-tighter leading-none mb-8">
            Let&apos;s Find Your Dream Property
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.15,
          }}
          className="w-full"
        >
          <CardContainer className="w-full">
            <CardBody className="relative group/card bg-background/50 backdrop-blur-md border border-gold-dim w-full h-auto rounded-[2rem] p-8 md:p-12">
              <CardItem translateZ="50" className="w-full">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-muted">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-transparent border-b border-gold-dim pb-3 text-foreground text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-dark"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-muted">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-transparent border-b border-gold-dim pb-3 text-foreground text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-dark"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-muted">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-transparent border-b border-gold-dim pb-3 text-foreground text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-dark"
                        placeholder="Your phone"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-muted">Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) =>
                          setFormData({ ...formData, interest: e.target.value })
                        }
                        className="bg-transparent border-b border-gold-dim pb-3 text-foreground text-sm focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-surface text-muted">
                          Select interest
                        </option>
                        <option value="buy" className="bg-surface">
                          Buy
                        </option>
                        <option value="sell" className="bg-surface">
                          Sell
                        </option>
                        <option value="invest" className="bg-surface">
                          Invest
                        </option>
                        <option value="other" className="bg-surface">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-muted">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-transparent border-b border-gold-dim pb-3 text-foreground text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-muted-dark resize-none"
                      placeholder="Tell us about your ideal property..."
                    />
                  </div>

                  <CardItem translateZ="80" as="div" className="pt-4 flex justify-center mt-6">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-12 py-3.5 bg-gold text-background text-sm tracking-wider font-medium hover:bg-gold-light transition-all duration-300 active:scale-[0.98]"
                    >
                      Send Message
                    </button>
                  </CardItem>
                </form>
              </CardItem>
            </CardBody>
          </CardContainer>
        </motion.div>
      </div>
    </section>
  );
}
