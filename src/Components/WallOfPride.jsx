import React from "react";
import one from "../assets/wallofpride/one.png";
import two from "../assets/wallofpride/two.png";
import three from "../assets/wallofpride/three.png";
import four from "../assets/wallofpride/four.png";
import five from "../assets/wallofpride/five.png";
import six from "../assets/wallofpride/six.png";

/**
 * Layout:
 *  Desktop (md+):        Tablet (sm):           Mobile (xs):
 *  Col1   Col2   Col3    2-column masonry        Single column
 *  [one]  [three] [five]  [one]   [two]           [one]
 *  [two]  [four]  [six]   [three] [four]           [two]
 *                          [five]  [six]           [three]
 *                                                  [four]
 *                                                  [five]
 *                                                  [six]
 */

const WallOfPride = () => {
  const imgClass =
    "w-full rounded-2xl shadow-md object-contain hover:scale-105 border-[4px] border-[#6BC6D4] transition-transform duration-300 bg-white";

  return (
    <section className="px-4 sm:px-6 md:px-8 py-12 w-full overflow-x-hidden bg-[#1C1D22]">
      <div className="font-bold text-white text-[clamp(32px,8vw,72px)] text-center mb-5">
        THE WALL OF PRIDE
      </div>

      {/* Mobile: single column (below sm) */}
      <div className="flex flex-col gap-4 sm:hidden">
        <img src={one} alt="testimonial-1" className={imgClass} />
        <img src={two} alt="testimonial-2" className={imgClass} />
        <img src={three} alt="testimonial-3" className={imgClass} />
        <img src={four} alt="testimonial-4" className={imgClass} />
        <img src={five} alt="testimonial-5" className={imgClass} />
        <img src={six} alt="testimonial-6" className={imgClass} />
      </div>

      {/* Tablet: 2-column grid (sm to md) */}
      <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 max-w-[600px] mx-auto">
        <div className="flex flex-col gap-4">
          <img src={one} alt="testimonial-1" className={imgClass} />
          <img src={three} alt="testimonial-3" className={imgClass} />
          <img src={five} alt="testimonial-5" className={imgClass} />
        </div>
        <div className="flex flex-col gap-4">
          <img src={two} alt="testimonial-2" className={imgClass} />
          <img src={four} alt="testimonial-4" className={imgClass} />
          <img src={six} alt="testimonial-6" className={imgClass} />
        </div>
      </div>

      {/* Desktop: original 3-column layout (md+) */}
      <div className="hidden md:grid max-w-[1100px] mx-auto grid-cols-3 gap-4 items-start">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <img src={one} alt="testimonial-1" className={imgClass} />
          <img src={two} alt="testimonial-2" className={imgClass} />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <img src={three} alt="testimonial-3" className={imgClass} />
          <img
            src={four}
            alt="testimonial-4"
            className={`${imgClass} h-[190px]`}
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <img src={five} alt="testimonial-5" className={imgClass} />
          <img
            src={six}
            alt="testimonial-6"
            className={`${imgClass} h-[320px]`}
          />
        </div>
      </div>

      <div className="font-bold text-white text-[clamp(16px,3vw,24px)] text-center mt-5">
        And Many more...
      </div>
    </section>
  );
};

export default WallOfPride;