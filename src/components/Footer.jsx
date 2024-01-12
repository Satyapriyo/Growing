const Footer = () => {
  return (
    <section data-scroll-section className="w-full h-[60vh]">
      <p className="text-6xl uppercase font-extrabold text-center mt-10">
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
        >
          Let&apos;s
        </h1>
        <h1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="10"
        >
          {" "}
          end the page
        </h1>
      </p>
    </section>
  );
};

export default Footer;
