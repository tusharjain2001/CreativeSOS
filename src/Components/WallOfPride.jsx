import React from "react";

const WallOfPride = () => {
  const testimonials = [
    {
      name: "Stetson Patten",
      role: "Social Media Management & Consulting",
      company: "CEO at Small Scale Marketing",
      profilePic:
        "https://ui-avatars.com/api/?name=Stetson+Patten&background=4299e1&color=fff&size=80",
      badge: "2nd",
      category: null,
      rating: null,
      date: "October 20, 2023",
      testimonial:
        'If you\'re interested in a way to streamline your "Message me to see how I can help with the __" campaign in your pocket contact list, Abhishek is your guy.\n\nI have worked with Abhishek and his team for over 2 years now. They excel in efficiency with communication, efficiency, understanding exactly what I need, and Delivering on exactly what was asked for. I highly recommend! 10/10!',
      size: "large",
    },
    {
      name: "Marshall England",
      role: "CEO",
      company: "Arrowfish Consulting",
      profilePic:
        "https://ui-avatars.com/api/?name=Marshall+England&background=10b981&color=fff&size=80",
      badge: "2nd",
      category: null,
      rating: null,
      date: "October 20, 2023",
      testimonial:
        "Marshall was Abhishek's client.\n\nWorking with Abhishek as a creative partner has been exceptional. His attention-to-detail and ability to understand our vision has been evident throughout our collaboration. From brand alignments, His end-to-end setup streamlined creative operations, removed the need for multiple agencies and built a system that lasts for times. Highly recommended for any organization seeking a full-service creative solution that delivers results.",
      size: "large",
    },
    {
      name: "Erin L",
      role: "Email Marketing at Armodilo",
      company: null,
      profilePic:
        "https://ui-avatars.com/api/?name=Erin+L&background=8b5cf6&color=fff&size=80",
      badge: "3rd",
      category: "Visual Design",
      rating: 5.0,
      date: "December 4, 2024",
      testimonial:
        "While at Mydas, I worked with Abhishek on ongoing projects. He helped us create and fix email banners in Klaviyo (Mailchimp), various email banners and GIF/video projects. Abhishek works quickly and communicates well, offering options and solutions. His work helped us create fantastic end results. I'd definitely recommend working with him. (feedback redone)",
      size: "large",
    },
    {
      name: "Rishika Raj",
      role: "Branding & Positioning | Ex - IPI, Anthill Ventures, GrowthJockey & Ola",
      company: null,
      profilePic:
        "https://ui-avatars.com/api/?name=Rishika+Raj&background=f59e0b&color=fff&size=80",
      badge: "2nd",
      category: null,
      rating: null,
      date: "October 22, 2023",
      testimonial:
        "Rishika was Abhishek's client.\n\nWorking with Abhishek has been a great experience. He has been a great startup consultant for our performance marketing videos, sets from planning to execution. He has been proactive and quite quick!\n\nAbhishek really gets the trust, which meant there was very little back and forth in terms of iterations. Would def recommend!",
      size: "large",
    },
    {
      name: "Abhishek Maurya",
      role: "Cofounder & CEO at Navatra Labs.",
      company: "Hiring Now!!",
      profilePic:
        "https://ui-avatars.com/api/?name=Abhishek+Maurya&background=ec4899&color=fff&size=80",
      badge: "2nd",
      category: "Video Production",
      rating: 5.0,
      date: "December 2, 2024",
      testimonial: "Delivered excellent work in very short timeline",
      size: "small",
    },

    {
      name: "Stephen Jones",
      role: "Founder of Maro - track every story across 200+ social media consultant | Media and comms training @ PA",
      company: null,
      profilePic:
        "https://ui-avatars.com/api/?name=Stephen+Jones&background=6366f1&color=fff&size=80",
      badge: null,
      category: null,
      rating: null,
      date: "October 20, 2023",
      testimonial:
        "Stephen was Abhishek's client.\n\nAbhishek oversaw our graphic designs and a video explainer for our new website. We were really pleased with the outcome - they looked super slick and our feedback had been implemented brilliantly. I also liked Abhishek's speedy and clear which helped as we were on a tight timeline. Would happily recommend.",
      size: "small",
    },
  ];

  const StarRating = ({ rating, date }) => {
    return (
      <div className="mb-3 ">
        <div className="flex items-center gap-2 mb-1">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 fill-current text-yellow-500"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="font-semibold text-gray-800 text-sm">{rating}</span>
          <span className="text-gray-400 text-xs">•</span>
          <span className="text-gray-500 text-xs">{date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[] bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          The Wall of Pride
        </h1>

        {/* Testimonials Grid - 3 columns, 2 rows */}
        <div className="columns-1 md:columns-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`mb-6 break-inside-avoid bg-white rounded-2xl p-6 shadow-lg ${
                testimonial.size === "small" ? "md:row-span-1" : ""
              }`}
            >
              {/* Header Section */}
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={testimonial.profilePic}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-bold text-gray-900 text-sm">
                      {testimonial.name}
                    </h3>
                    {testimonial.badge && (
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {testimonial.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-snug">
                    {testimonial.role}
                  </p>
                  {testimonial.company && (
                    <p className="text-xs text-gray-600 leading-snug">
                      {testimonial.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              {testimonial.category && (
                <div className="mb-3">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-1 rounded">
                    {testimonial.category}
                  </span>
                </div>
              )}

              {/* Rating */}
              {testimonial.rating && (
                <StarRating
                  rating={testimonial.rating}
                  date={testimonial.date}
                />
              )}

              {/* Date for non-rated testimonials */}
              {!testimonial.rating && testimonial.date && (
                <p className="text-xs text-gray-500 mb-3">{testimonial.date}</p>
              )}

              {/* Testimonial Text */}
              <div className="">
                <p className="text-gray-700 text-xs leading-relaxed whitespace-pre-line">
                  {testimonial.testimonial}
                </p>
              </div>
            </div>
          ))}
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
