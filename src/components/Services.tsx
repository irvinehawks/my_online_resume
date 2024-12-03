import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: 'Web Application Development',
    description:
      'Building scalable and responsive web applications using modern frameworks like ReactJS.',
    icon: '🌐',
  },
  {
    title: 'Backend Development',
    description:
      'Creating robust and secure server-side applications with Node.js, NestJS, Django.',
    icon: '🖥️',
  },
  {
    title: 'Database Management',
    description:
      'Designing and managing databases using PostgreSQL, MongoDB, MySQL.',
    icon: '📂',
  },
  {
    title: 'API Development & Integration',
    description:
      'Developing RESTful and GraphQL APIs for seamless communication between systems.',
    icon: '🔗',
  },
  {
    title: 'DevOps & Cloud Services',
    description:
      'Deploying and managing applications on cloud platforms like AWS, Railway and Cockroach Labs.',
    icon: '☁️',
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting user-centric designs with tools like Figma and implementing them using TailwindCSS.',
    icon: '🎨',
  },
  {
    title: 'Mobile App Development',
    description:
      'Creating cross-platform mobile applications with React Native.',
    icon: '📱',
  },
  {
    title: 'Consulting & Mentorship',
    description:
      'Offering guidance on software development best practices and team mentorship.',
    icon: '💼',
  },
];

const Services: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true, // Ensure scrolling resumes after hovering
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 7000, // Set the auto sliding interval to 7 seconds (7000ms)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Services
        </h2>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;