import React from "react";

const WallOfPride = () => {
  const StarRating = ({ rating, date }) => {
    return (
      <div className="mb-2.5">
        <div className="flex items-center gap-2 mb-0.5">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 fill-current text-yellow-500"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold text-gray-800 text-xs">{rating}</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          The Wall of Pride
        </h1>

        {/* Testimonials Grid - 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 items-start">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            {/* Card 1 - Stetson Patten */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Stetson+Patten&background=4299e1&color=fff&size=80"
                  alt="Stetson Patten"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Stetson Patten
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight mb-1">
                    Social Media Management & Consulting.
                  </p>
                  <p className="text-xs text-gray-600 leading-tight mb-1">
                    Helping small business owners & entrepreneurs Don't let
                    digital marketing confuse you! Let me show you how I can
                    help with the mini computer in your pocket.
                  </p>
                  <p className="text-xs text-gray-600 leading-tight">
                    October 20, 2023, Stetson was Abhishek's client
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                I have worked with Abhishek and his team for over 2 years now.
                They excel in efficiency with communication, efficiency,
                understanding exactly what I need, and Delivering on exactly
                what was asked for. I highly recommend! 10/10!
              </p>
            </div>

            {/* Card 2 - Marshall England */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Marshall+England&background=10b981&color=fff&size=80"
                  alt="Marshall England"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Marshall England
                    </h3>
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      in
                    </span>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight mb-1">
                    CEO
                  </p>
                  <p className="text-xs text-gray-600 leading-tight mb-1">
                    Arrowfish Consulting
                  </p>
                  <p className="text-xs text-gray-600 leading-tight">
                    October 20, 2023, Marshall was Abhishek's client
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Working with Abhishek as a creative partner has been
                exceptional. His direction brought our video and design projects
                to life with high-quality productions and consistent brand
                representation. His end-to-end setup streamlined creative
                operations, removed the need for multiple vendors, and improved
                turnaround times. Highly recommended for any organization
                seeking a full-service creative partner who connects vision to
                execution.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            {/* Card 3 - Erin L */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Erin+L&background=8b5cf6&color=fff&size=80"
                  alt="Erin L"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">Erin L</h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight">
                    Content Marketing at Arwailles
                  </p>
                </div>
              </div>
              <div className="mb-3">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded">
                  Visual Design
                </span>
              </div>
              <StarRating rating={5.0} date="December 4, 2024" />
              <p className="text-gray-700 text-[13px] leading-relaxed">
                While at Nylas, I worked with Abhishek on numerous projects. He
                helped us create design and fixed email banners in Klaviyo
                (Mailchimp), email banners and GIF/video projects. Abhishek
                works quickly and communicates well, offering opportunities to
                chat live about feedback and create fantastic end results. I'd
                definitely recommend working with him. (feedback edited)
              </p>
            </div>

            {/* Card 4 - Rishika Raj */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Rishika+Raj&background=f59e0b&color=fff&size=80"
                  alt="Rishika Raj"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Rishika Raj
                    </h3>
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                      in
                    </span>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight mb-2">
                    Branding & Marketing Professional | Ex - IPI, Home Loans |
                    Ex - UNLO | Webchief | DU
                  </p>
                  <p className="text-xs text-gray-600 leading-tight">
                    October 22, 2023, Rishika was Abhishek's client
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                Working with Abhishek has been a great experience. He supported
                us like a creative consultant for performance marketing startup
                videos, and from planning to execution, he made everything feel
                smooth and easy.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Abhishek really gets the brief, which meant there was very
                little back and forth in ...see more
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-5">
            {/* Card 5 - Abhilash Maurya */}
            <div className="bg-white rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Abhilash+Maurya&background=ec4899&color=fff&size=80"
                  alt="Abhilash Maurya"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Abhilash Maurya
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-tight mb-1">
                    Cofounder & CEO at Navatra Labs.
                  </p>
                  <p className="text-xs text-gray-600 leading-tight">
                    Hiring Now!!
                  </p>
                </div>
              </div>
              <div className="mb-2.5">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded">
                  Video Production
                </span>
              </div>
              <StarRating rating={5.0} date="December 2, 2024" />
              <p className="text-gray-700 text-sm leading-relaxed">
                Delivered excellent work in very short timeline
              </p>
            </div>

            {/* Card 6 - Stephen Jones */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-start gap-2.5 mb-2.5">
                <img
                  src="https://ui-avatars.com/api/?name=Stephen+Jones&background=6366f1&color=fff&size=80"
                  alt="Stephen Jones"
                  className="w-11 h-11 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      Stephen Jones
                    </h3>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      2nd
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-tight mb-2">
                    Founder of Maro - track every story across platforms |
                    Digital media consultant | Media and comms training @ PA
                  </p>
                  <p className="text-sm text-gray-600 leading-tight mb-2">
                    October 20, 2023, Stephen was <br />
                    Abhishek's client
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-md leading-relaxed">
                Abhishek oversaw our graphic designs and a video explainer for
                our new website. We were really pleased with the outcome - they
                looked super slick and our feedback had been absorbed really
                well. Communication was speedy and clear which helped as we were
                on a tight timeline. Would happily recommend.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white text-xl font-medium">And Many more...</p>
        </div>
      </div>
    </div>
  );
};

export default WallOfPride;
