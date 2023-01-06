import { Input } from "postcss";
import React from "react";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const form = () => {
  return (
    <div id="form" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-6 w-full ">
        <h1 className="py-6 text-center">Get In Touch</h1>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-11/12 h-full m-auto shadow-lg bg-gradient-to-r from-yellow-600 to-yellow-300 shadow-black rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <h2>MANDOLIA COACHING</h2>
              </div>
              <div>
                <p className="text-lg py-2 font-semibold">
                  Ward no. 9, near Jamia Masjid, Rajouri, Jammu and Kashmir
                  185131
                </p>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.83110312244!2d74.3078164!3d33.37547519999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e2df6478b62a7%3A0xe27abfe4d9ca36d4!2sMANDOLIA%20COACHING%20CENTRE!5e0!3m2!1sen!2sin!4v1668977844728!5m2!1sen!2sin"
                  width="100%"
                  height="450px"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <p className="py-3 font-bold">
                  Contact Number: 7006056404 | 9419170852 | 7051961028{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Us</p>
                <div className="flex items-center justify-start gap-3 py-4">
                  <a
                    href="https://www.facebook.com/rajourimandoliaF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-black p-2 cursor-pointer hover:scale-110 ease-in duration-300">
                      {/* <FaLinkedinIn /> */}
                      <AiFillFacebook size={35} color="blue" />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/mandoliacoachingcentre/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-black p-2 cursor-pointer hover:scale-110 ease-in duration-300">
                      {/* <FaGithub /> */}
                      <AiFillInstagram size={35} color="#fb3958" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-lg shadow-black rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-lg font-semibold py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-lg font-semibold py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-lg font-semibold py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-lg font-semibold py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-lg font-semibold py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-[black] font-semibold bg-gradient-to-r from-yellow-600 to-yellow-300 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-black p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className="text-[gold]" size={50} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default form;
