export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/blog",
        text: "Blog",
      },
    ],
  },
  {
    id: 6,
    path: "/contact",  // Update the path if necessary
    text: "Contact",  // Updated name
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    link: "https://x.com/pelumi09778314?s=21", // Facebook link
  },
  {
    icon: <i className="fab fa-twitter"></i>,
    link: "https://x.com/pelumi09778314?s=21", // Twitter link
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    link: "https://www.instagram.com", // Instagram link
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/ridwan-olugbeja", // LinkedIn link
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Experience Unparalleled Comfort",
    subtitle: "Redefining Luxury Hospitality",
    btn1: "Explore Rooms",
    btn2: "Reserve Now",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Indulge in Ultimate Elegance",
    subtitle: "Your Gateway to Luxury Living",
    btn1: "View Suites",
    btn2: "Book Your Stay",
  },
];

export const about = [
  {
    icon: <i class="fas fa-bed fa-2x text-primary mb-2"></i>,
    text: "Elegant Accommodations",
    description: "Experience luxurious and comfortable stays in our well-appointed rooms and suites.",
  },
  
  {
    icon: <i class="fas fa-user-tie fa-2x text-primary mb-2"></i>,
    text: "Our Dedicated Team",
    description: "Meet our highly skilled and professional staff committed to exceptional service.",
  },
  {
    icon: <i class="fas fa-handshake fa-2x text-primary mb-2"></i>,
    text: "Valued Clients",
    description: "Proudly serving our clients with trust and excellence for all their needs.",
  },
  
];

export const services = [
  {
    icon: <i class="fas fa-bed fa-2x text-primary"></i>,
    name: "Luxury Rooms & Suites",
    description: "Experience the ultimate comfort and style in our luxurious rooms and suites.",
  },
  {
    icon: <i class="fas fa-utensils fa-2x text-primary"></i>,
    name: "Fine Dining & Cuisine",
    description: "Savor delicious gourmet meals prepared by our world-class chefs.",
  },
  {
    icon: <i class="fas fa-spa fa-2x text-primary"></i>,
    name: "Spa & Wellness",
    description: "Relax and rejuvenate with our premium spa treatments and wellness services.",
  },
  {
    icon: <i class="fas fa-basketball-ball fa-2x text-primary"></i>,
    name: "Sports & Recreation",
    description: "Enjoy a variety of sports and recreational activities for all ages.",
  },
  {
    icon: <i class="fas fa-calendar-alt fa-2x text-primary"></i>,
    name: "Event Planning",
    description: "Host unforgettable events with our expert planning and world-class venues.",
  },
  {
    icon: <i class="fas fa-dumbbell fa-2x text-primary"></i>,
    name: "Fitness & Yoga",
    description: "Stay fit and energized with our state-of-the-art gym and yoga classes.",
  },
];
export const team = [
  {
    id: 1,
    name: "Janet Doe",
    designation: "CEO",
    image: "/assets/img/hotel3.png",
    biography: "John Doe brings over 20 years of experience in the hospitality industry. Starting his career in hotel operations, he quickly advanced through various leadership roles, gaining expertise in guest services, operations management, and strategic growth. As the CEO of our company, John's visionary leadership has been instrumental in expanding our brand, elevating guest experiences, and driving innovation across all aspects of hotel management. Under his guidance, we have seen remarkable growth and success in the competitive hospitality sector."
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "MD",
    image: "/assets/img/hotel4.png",
    biography: "Jane Smith is a visionary in the hospitality industry. With a background in hotel management and a keen focus on exceptional guest experiences, she leads our team in creating innovative solutions that elevate every aspect of hotel operations. Her strategic vision has played a pivotal role in shaping our approach to guest services, sustainability, and operational excellence, ensuring we remain at the forefront of the hospitality sector.",
  },
  {
    id: 3,
    name: "Mark Johnson",
    designation: "CFO",
    image: "/assets/img/hotel5.png",
    biography: "Mark Johnson is a seasoned hotel management expert with a passion for enhancing guest experiences and optimizing hotel operations. He specializes in operational efficiency and is known for implementing innovative strategies that improve service delivery, streamline processes, and create memorable stays for guests. His expertise has been instrumental in driving the success of our properties, ensuring seamless operations and exceptional customer satisfaction.",
  },
  {
    id: 4,
    name: "Emily Clark",
    designation: "CMO",
    image: "/assets/img/hotel6.png",
    biography:"Emily Clark is an expert in hotel operations and guest experience management. She focuses on creating seamless and memorable experiences for guests, ensuring every interaction is personalized and exceptional. With a keen eye for detail and a commitment to service excellence, Emily plays a key role in enhancing the overall atmosphere and operations of our properties, driving both guest satisfaction and brand loyalty.",
  },
];


export const footerItem = [
  {
    id: 1,
    header: "About Us",
    UnitItem: [
      {
        name: "Our Story",
        link: "/about/our-story",
        description: "Learn about our journey and how we started.",
      },
      {
        name: "Meet the Team",
        link: "/about/meet-the-team",
        description: "Get to know the people behind our success.",
      },
      {
        name: "Careers",
        link: "/about/careers",
        description: "Explore open positions and join our team.",
      },
      {
        name: "Press & Media",
        link: "/about/press-media",
        description: "Discover our latest news and media resources.",
      },
      {
        name: "FAQs",
        link: "/about/faqs",
        description: "Find answers to commonly asked questions.",
      },
    ],
  },
  {
    id: 2,
    header: "Events",
    UnitItem: [
      {
        name: "Corporate Events",
        link: "/events/corporate",
        description: "Host your next corporate event with us.",
      },
      {
        name: "Weddings",
        link: "/events/weddings",
        description: "Plan your dream wedding effortlessly.",
      },
      {
        name: "Private Parties",
        link: "/events/private-parties",
        description: "Celebrate special moments with exclusive parties.",
      },
      {
        name: "Workshops & Seminars",
        link: "/events/workshops",
        description: "Attend or host informative workshops.",
      },
      {
        name: "Virtual Events",
        link: "/events/virtual",
        description: "Engage in events from the comfort of your home.",
      },
    ],
  },
  {
    id: 3,
    header: "Support",
    UnitItem: [
      {
        name: "Contact Us",
        link: "/support/contact",
        description: "Reach out to our support team for assistance.",
      },
      {
        name: "Help Center",
        link: "/support/help-center",
        description: "Access help articles and guides.",
      },
      {
        name: "Event Guidelines",
        link: "/support/event-guidelines",
        description: "Understand the rules and policies for our events.",
      },
      {
        name: "Cancellation Policy",
        link: "/support/cancellation-policy",
        description: "Learn about our cancellation terms.",
      },
      {
        name: "Accessibility",
        link: "/support/accessibility",
        description: "Find accessibility options and resources.",
      },
    ],
  },
  {
    id: 4,
    header: "Connect With Us",
    UnitItem: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/olugbeja.pelumi",
        description: "Follow us on Facebook.",
      },
      {
        name: "Instagram",
        link: "https://instagram.com",
        description: "Check out our latest updates on Instagram.",
      },
      {
        name: "Twitter",
        link: "https://x.com/pelumi09778314?s=21",
        description: "Stay updated with our tweets.",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ridwan-olugbeja-716127317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        description: "Connect with us professionally on LinkedIn.",
      },
    ],
  },
];


export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "123 Street, New York, USA",
  },

];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Technical",
    email: "tech@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
 
  {
    description: 
      "This platform was an invaluable resource during the planning of our wedding. With its comprehensive suite of tools, we were able to seamlessly collaborate with vendors and manage guest logistics. The experience exceeded our expectations.",
    name: "Michael James",
    profession: "Newlywed",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description: 
      "From selecting the perfect venue to handling last-minute changes, this platform was essential in ensuring the smooth execution of our annual gala. The intuitive interface and exceptional customer support were key factors in its success. A truly professional experience.",
    name: "Sophia Rodriguez",
    profession: "Director of Events, Gala Solutions",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  }
  
];

// Blog Page Data
export const blog = [
  {
    id: 1,
    title: "The Future of Hospitality: Technology in Hotel Management",
    image: "/images/blog1.jpg",
    description: "Discover how cutting-edge technology is revolutionizing the hospitality industry. From AI-powered booking systems to contactless check-ins, explore the trends shaping the future of hotel management.",
    author: "Jane Doe",
    date: "January 10, 2024",
    path: "/blog/future-of-hospitality",
  },
  {
    id: 2,
    title: "Top 10 Tips for a Memorable Hotel Stay",
    image: "/images/blog2.jpg",
    description: "Planning your next getaway? Learn how to make the most of your hotel experience with these top tips, including room selection, amenities, and more.",
    author: "John Smith",
    date: "January 15, 2024",
    path: "/blog/hotel-stay-tips",
  },
  {
    id: 3,
    title: "Sustainable Hospitality: Eco-Friendly Practices in Hotels",
    image: "/images/blog3.jpg",
    description: "Sustainability is no longer optional in the hospitality industry. Dive into the eco-friendly practices that hotels are adopting to reduce their carbon footprint.",
    author: "Emily Green",
    date: "January 20, 2024",
    path: "/blog/sustainable-hospitality",
  },
  {
    id: 4,
    title: "Exploring Luxury: What Sets 5-Star Hotels Apart",
    image: "/images/blog4.jpg",
    description: "Luxury redefined. Take a closer look at the unique features and unparalleled services that make 5-star hotels stand out from the rest.",
    author: "Michael Brown",
    date: "January 25, 2024",
    path: "/blog/5-star-hotels",
  },
  {
    id: 5,
    title: "Travel Trends 2024: What to Expect in Hospitality",
    image: "/images/blog5.jpg",
    description: "Stay ahead of the curve with the latest travel trends for 2024. From personalized experiences to wellness tourism, explore what’s new in the world of travel and hospitality.",
    author: "Sophia Lee",
    date: "January 30, 2024",
    path: "/blog/travel-trends-2024",
  },
];



export const roomItems = [
  {
    img: "../assets/img/room-1.jpg",
    price: "$220/night",
    name: "Premium Junior Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Experience the ultimate comfort in our Premium Junior Suite, designed with luxury and modern amenities for a relaxing stay. Enjoy spacious accommodations, elegant furnishings, and premium in-room services.",
    yellowbtn: "Learn More",
    darkbtn: "Book Now",
  },

  {
    img: "../assets/img/room-2.jpg",
    price: "$200/night",
    name: "Deluxe Room",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star-half text-primary"></small>,
    ],
    description:
      "The Deluxe Room offers modern amenities and a cozy ambiance, perfect for leisure travelers. Relax in a plush bed and enjoy complimentary high-speed Wi-Fi and a flat-screen TV.",
    yellowbtn: "View More",
    darkbtn: "Book Now",
  },
  
  {
    img: "../assets/img/room-3.jpg",
    price: "$350/night",
    name: "Luxury Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Experience unparalleled elegance in our Luxury Suite, featuring a spacious living area, premium bedding, and exclusive access to the rooftop lounge.",
    yellowbtn: "Discover More",
    darkbtn: "Reserve Today",
  },
  
  {
    img: "../assets/img/room-4.jpg",
    price: "$500/night",
    name: "Presidential Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "The Presidential Suite redefines luxury with its expansive layout, private balcony, personalized butler service, and breathtaking cityscape views.",
    yellowbtn: "Learn More",
    darkbtn: "Book Your Stay",
  },
  
  {
    img: "../assets/img/room-5.jpg",
    price: "$280/night",
    name: "Executive Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Our Executive Suite offers a blend of sophistication and comfort, ideal for business travelers and guests seeking an elevated experience. Enjoy a private work area, luxurious bathroom, and stunning city views.",
    yellowbtn: "Explore Features",
    darkbtn: "Reserve Now",
  },

  {
    img: "../assets/img/room-6.jpg",
    price: "$700/night",
    name: "Super Deluxe Suite",
    star: [
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
      <small class="fa fa-star text-primary"></small>,
    ],
    description:
      "Indulge in unparalleled luxury with our Super Deluxe Suite. With expansive living space, top-tier amenities, and breathtaking panoramic views, this suite is the epitome of elegance and comfort for discerning guests.",
    yellowbtn: "Discover More",
    darkbtn: "Book Your Stay",
  },
];




export const facility = [
  {
    icon: <i class="fa fa-couch text-primary me-2"></i>,
    quantity: 1,
    facility: "Spacious Living Area",
  },
  {
    icon: <i class="fa fa-tv text-primary me-2"></i>,
    quantity: 1,
    facility: "Flat-screen TV",
  },
  {
    icon: <i class="fa fa-shower text-primary me-2"></i>,
    quantity: 2,
    facility: "Modern Bathrooms",
  },
  {
    icon: <i class="fa fa-wifi text-primary me-2"></i>,
    facility: "High-speed Wifi",
  },
  {
    icon: <i class="fa fa-coffee text-primary me-2"></i>,
    facility: "Complimentary Coffee & Tea",
  },
  {
    icon: <i class="fa fa-concierge-bell text-primary me-2"></i>,
    facility: "24/7 Concierge Service",
  },
];
