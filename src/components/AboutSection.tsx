"use client";

import { useState } from "react";

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white px-4 py-12 md:py-10 flex justify-center relative overflow-hidden font-raleway font-light ">
      <div className="p-[1px] bg-gradient-to-r from-[var(--primary-color)] via-black to-[var(--primary-color)] max-w-7xl w-full">
        <div className="bg-white dark:bg-black p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-[var(--primary-color)] mb-6">
            GRANTH DREAM HOMES – LUXURY REAL ESTATE IN GOA
          </h2>

          <p className="text-md  mb-6">
            Welcome to Granth Dream Homes – your gateway to luxurious living in
            Goa. After making a mark in Dubai & Goa's real estate landscape with
            over 5B+ in sales, we now bring our global expertise, integrity, and
            commitment to excellence to India’s most desirable destination.
          </p>

          <p className="text-md mb-6">
            Granth Dream Homes is redefining the real estate experience in Goa.
            Whether you're searching for your dream home or a profitable
            investment, we offer a curated selection of premium properties with
            absolute transparency, trust, and quality assurance at the core of
            everything we do.
          </p>

          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="text-[var(--primary-color)] text-sm tracking-wide inline-block border-b border-[var(--primary-color)] pt-2"
            >
              READ MORE
            </button>
          ) : (
            <>
              <div className="mt-6 space-y-4 text-md">
                <p>
                  Our mission is to create a legacy where luxury meets lifestyle
                  and every home tells a story of refinement and reliability.
                  With our seasoned team and international background, we’re
                  equipped to guide clients through the finest opportunities in
                  Goa’s evolving real estate market.
                </p>
                <p>
                  From stunning beach villas to high-yield investment
                  properties, Granth Dream Homes ensures unmatched quality,
                  location, and service. We collaborate with top architects,
                  designers, and legal experts to deliver properties that meet
                  global standards and provide enduring value.
                </p>
                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Why Choose Granth Dream Homes?
                </h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Over 5B in successful real estate sales</li>
                  <li>Expertise rooted in Dubai’s competitive market</li>
                  <li>100% transparent transactions and ethical guidance</li>
                  <li>
                    Handpicked properties in Goa’s most sought-after locations
                  </li>
                  <li>
                    End-to-end client support including legal, financial, and
                    post-sale services
                  </li>
                </ul>
                <p>
                  We believe buying a home should be an enjoyable and confident
                  decision. That's why we’re here to provide clarity at every
                  step — from exploration to ownership.
                </p>

                <h3 className="text-[var(--primary-color)] font-semibold mt-4">
                  Join Us in Building a Legacy
                </h3>
                <p>
                  Whether you’re planning your retirement by the beach or
                  looking to grow your investment portfolio, Granth Dream Homes
                  offers you more than property — we offer peace of mind. Let’s
                  build something extraordinary together in Goa.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setExpanded(false)}
                  className="text-[var(--primary-color)] text-sm tracking-wide inline-block border-b border-[var(--primary-color)] pt-2"
                >
                  SEE LESS
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
