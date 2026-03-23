"use client";

import Image from "next/image";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "./LoadingSpinner";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    if (!form.current) return;

    await emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current?.reset();
          setSending(false);
          setSent(true)
          const timer = setTimeout(() => {
            setSent(false);
          }, 5000);

          return () => clearTimeout(timer);
          
        //   alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSending(false);
        //   alert("Something went wrong.");
        }
      );
  };

  const inputBase =
    "w-full bg-[#F0EBE0] rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-600/40 transition";

  return (
    <section id="contact_us" className="relative bg-[#F5F0E8] py-20 px-4 sm:px-8 lg:px-14 xl:px-20 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-black/60" />
      <Image
        src="/palm-trees-full.png"
        alt="background"
        fill
        className="object-cover"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* ── LEFT — Team image ── */}
            <div className="relative flex items-end justify-center pt-10 lg:pt-0 min-h-[280px] lg:min-h-0">
              {/* Faint city/factory watermark behind the image */}
              {/* <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none overflow-hidden">
                <Image
                  src="/contact-watermark.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                  aria-hidden
                />
              </div> */}

              <div className="relative z-10 w-full max-w-xs sm:max-w-sm lg:max-w-md h-full flex items-end justify-center">
                <Image
                  src="/contact-team.png"
                  alt="Tharul Agro support team"
                  width={480}
                  height={460}
                  className="object-contain object-bottom w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* ── RIGHT — Form ── */}
            <div className="px-6 sm:px-10 py-10 lg:py-14 flex flex-col justify-center">
              {/* Label */}
              <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-normal pb-2">
                <div className="relative flex gap-2 shadow-md bg-slate-100/20 px-4 py-[5px] rounded-2xl">
                  <Image
                    src="/two-leafs.svg"
                    alt="leaf"
                    width={18}
                    height={18}
                  />
                  <span className="text-xs sm:text-sm font-semibold font-signika text-gray-500 tracking-widest">
                    Contact Us
                  </span>
                </div>
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-8">
                  Reach Out, Let&apos;s Grow Organically
                </h2>
              </div>

              {/* Form */}
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString()}
                  />
                  <input
                    type="hidden"
                    name="title"
                    value="New Inquiry from Website"
                  />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={inputBase}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={inputBase}
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={inputBase}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className={inputBase}
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className={`${inputBase} resize-none`}
                />

                {/* Submit */}
                <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-normal">
                  <div className="flex items-center flex-row gap-2"><button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#3D7A3A] hover:bg-[#2f6230] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-colors"
                  >
                    Send Message
                    {sending ? (
                      <LoadingSpinner />
                    ) : (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    )}
                  </button>{sent && <p className="text-xs text-[#3D7A3A]">Sent</p>}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
