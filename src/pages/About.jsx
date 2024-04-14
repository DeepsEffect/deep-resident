import { Helmet } from "react-helmet-async";

const ABout = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 dark:bg-gray-100 dark:text-gray-800 rounded-xl mt-2 lg:mt-8">
      <Helmet>
        <title>Deep-Resident | About</title>
      </Helmet>
      <h1 data-aos="fade-up" className="text-3xl font-bold mb-4 font-heading">
        About Deep-Resident
      </h1>
      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Our Story</h2>
        <p>
          Welcome to Deep-Resident, where we strive to make your real estate
          dreams a reality. Founded in 1992, our agency has been dedicated to
          providing exceptional service and expertise to clients in Fargo, North
          Dakota, and beyond.
        </p>
      </section>

      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Our Team</h2>
        <p>
          Meet the talented individuals behind Deep-Resident. Our team of
          experienced real estate professionals is committed to guiding you
          through every step of your property journey. Whether you&apos;re
          buying, selling, renting, or investing, we&apos;re here to help.
        </p>
      </section>

      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Our Services</h2>
        <p>
          At Deep-Resident, we offer a comprehensive range of real estate
          services tailored to meet your needs. From property sales and
          purchases to rentals and property management, we have the expertise to
          assist you with all your real estate requirements.
        </p>
      </section>

      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Why Choose Us</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Expertise:</strong> With years of experience in the
            industry, we have the knowledge and skills to navigate the
            complexities of the real estate market.
          </li>
          <li>
            <strong>Personalized Service:</strong> We understand that every
            client is unique, which is why we take the time to listen to your
            needs and tailor our services accordingly.
          </li>
          <li>
            <strong>Professionalism:</strong> Our team is committed to upholding
            the highest standards of professionalism and integrity in everything
            we do.
          </li>
          <li>
            <strong>Results-Oriented:</strong> We are dedicated to achieving the
            best possible outcomes for our clients, whether they&apos;re buying,
            selling, renting, or investing in property.
          </li>
          <li>
            <strong>Community Focus:</strong> We believe in giving back to the
            communities we serve, and we&apos;re proud to support local
            initiatives and charities.
          </li>
        </ul>
      </section>

      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Testimonials</h2>
        <div className="mb-4">
          <p>
            &quot;Working with Deep-Resident was a pleasure from start to
            finish. They helped us find our dream home and made the process
            smooth and stress-free.&quot; - John and Jane Doe
          </p>
        </div>
        <div>
          <p>
            &quot;The team at Deep-Resident went above and beyond to sell our
            property quickly and at a great price. We couldn&apos;t be happier
            with the results.&quot; - Sarah Smith
          </p>
        </div>
      </section>

      <section data-aos="fade-right" className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-heading">Contact Us</h2>
        <p>
          Ready to take the next step? Get in touch with us today to discuss
          your real estate needs. You can reach us by phone at 999111222, email
          at assignment09.ph@gmail.com, or visit us at Fargo.
        </p>
      </section>

      <section data-aos="fade-right">
        <h2 className="text-xl font-semibold mb-2 font-heading">Follow Us</h2>
        <p>
          Stay connected with Deep-Resident on social media for the latest news,
          updates, and property listings. Follow us on Facebook, Twitter,
          Instagram, and LinkedIn.
        </p>
      </section>
    </div>
  );
};

export default ABout;
