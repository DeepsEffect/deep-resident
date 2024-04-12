const Faq = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-10">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y dark:divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How do I search for properties on your website?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Provide information on how users can search for properties using
              filters such as location, price range, property type, etc. Explain
              any advanced search options available.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What types of properties do you list?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Describe the different types of residential properties you list,
              such as single-family homes, apartments, townhouses, condos,
              vacation rentals, etc. Include any specific categories or niches
              you specialize in.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How can I schedule a viewing of a property?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Explain the process for scheduling property viewings, including
              whether users need to contact an agent or use an online booking
              system. Provide contact details or a booking form for scheduling
              appointments.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What information do I need before purchasing or renting a
              property?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Outline the necessary documents and information required for the
              purchasing or renting process, such as identification, proof of
              income, credit history, etc.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              Do you offer financing options for property purchases?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              Provide information on any financing or mortgage options available
              through your website or partnering financial institutions. Explain
              the application process and eligibility criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
