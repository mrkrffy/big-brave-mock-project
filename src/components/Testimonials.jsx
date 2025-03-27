import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    review:
      "Big Brave Coffee is amazing! The aroma and taste are unmatched. I love how fresh it always is, and the roast is just perfect. I can't start my day without it! The first sip in the morning wakes me up instantly, giving me the boost I need to power through my busy work schedule. It's smooth, rich, and never bitter—just how I like it.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "Smooth and bold flavor, the perfect way to start my day! The balance between strength and smoothness is something I haven't found anywhere else. Every cup feels like a warm hug, and I love how the flavor lingers just long enough to be satisfying. It’s become my morning ritual, and I even take some with me when I travel. I can confidently say this is the best coffee I’ve ever had!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    name: "David Brown",
    review:
      "Great coffee and excellent service. Highly recommend! Whether I'm having it black or with milk, the quality is always top-notch. The packaging is also well-designed, ensuring the beans stay fresh for longer. I love the deep, robust flavor, and I appreciate the effort they put into sourcing quality beans. I’ve tried dozens of coffee brands over the years, but Big Brave Coffee stands out as a truly premium experience.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 5,
  },
  {
    name: "Sarah Lee",
    review:
      "I'm a huge coffee lover, and Big Brave Coffee exceeded my expectations. The beans are roasted to perfection, and the flavors are so rich and deep! I can tell that a lot of thought and expertise went into selecting the best beans and roasting them just right. Every time I brew a cup, my whole kitchen fills with the most wonderful aroma. This coffee has completely spoiled me—I can’t go back to regular store-bought brands anymore.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
  },
  {
    name: "Michael Johnson",
    review:
      "I love how smooth and rich their espresso is. Every sip is a treat, and I always get compliments when I serve it to my guests! I used to spend so much money at cafes, but now I can make coffee at home that’s even better. The depth of flavor is incredible, and the crema is perfect when I use it in my espresso machine. If you love high-quality coffee, this is a must-try!",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4,
  },
  {
    name: "Emily Carter",
    review:
      "I used to think all coffee tasted the same until I tried Big Brave Coffee. The freshness and depth of flavor make all the difference. Highly recommend! I’ve shared it with my family, and now we all look forward to our coffee moments together. It’s not just a drink—it’s an experience! You can truly taste the craftsmanship in every batch, and I appreciate the dedication to quality.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    review:
      "The customer service is fantastic, and the coffee itself is beyond delicious. I’ve already recommended it to all my friends! Not only is the flavor exceptional, but I also love the brand’s commitment to sustainability. It feels good knowing that I’m supporting a company that sources its beans responsibly while still delivering an outstanding product. Can’t wait to try more blends!",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 5,
  },
  {
    name: "Olivia Martinez",
    review:
      "I love how every cup is consistently great. The flavors are bold but never overwhelming, and I can taste the quality in every sip. I’ve tried making cold brew with it, and the result was absolutely fantastic! It’s smooth, never acidic, and keeps me going throughout the day. If you’re looking for coffee that tastes like it was brewed by a professional barista, look no further.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 4,
  },
  {
    name: "William Anderson",
    review:
      "This is hands down the best coffee I’ve had in years. It has the perfect balance of acidity and smoothness. Absolutely love it! I used to think I had to go to a fancy coffee shop to get this level of quality, but now I can enjoy it right at home. The moment I open a new bag, I can tell it’s fresh and expertly roasted. It’s a game-changer for my morning routine!",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 5,
  },
  {
    name: "Sophia White",
    review:
      "I travel a lot, and I always bring Big Brave Coffee with me. It’s my go-to, and nothing else compares to its quality and taste. The convenience of having such amazing coffee wherever I go is priceless. I appreciate how easy it is to brew, whether I’m using a French press, espresso machine, or just a simple drip coffee maker. If you haven’t tried it yet, you’re missing out!",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 5,
  },
];

export default function CoverflowSlider() {
  return (
    <section className="flex justify-center items-center min-h-screen px-60 flex-row">
      <div className="bg-gray-900 md:w-1/2 h-[500px] flex items-center pl-16 rounded-3xl -mr-20">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-orange-100 md:text-6xl">
            Testimonials
          </h1>
          <h2 className="mt-4 text-1xl font-bold text-orange-100 sm:text-4xl md:text-2xl">
            Why People Love Big Brave Coffee
          </h2>
        </div>
      </div>
      <Swiper
        effect={"cards"}
        direction={"vertical"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="md:w-1/2 h-[550px]"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className=" bg-gray-900 drop-shadow-xl  rounded-3xl"
          >
            <div className="flex justify-center items-center flex-col h-full p-10 space-y-5">
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, index) =>
                  index < testimonial.rating ? (
                    <StarIconSolid
                      key={index + testimonial.rating}
                      className="w-10 h-10 text-yellow-500"
                    />
                  ) : (
                    <StarIconOutline
                      key={index + testimonial.rating}
                      className="w-10 h-10 text-gray-500"
                    />
                  )
                )}
              </div>
              <div className="text-gray-300 mt-2 text-center mb-15">
                <span className="text-yellow-500 text-xl">“</span>
                {testimonial.review}
                <span className="text-yellow-500 text-xl">”</span>
              </div>
              <img
                className="rounded-full h-16 w-16 mb-2"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div className="text-xl font-bold text-orange-100">
                {testimonial.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
