const PubFooter = () => {
  return (
    <footer className="py-20 pub-footer">
      <div className="container mx-auto flex flex-wrap flex-col sm:flex-row">
        <div className="sm:flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Get in Touch</h2>
          <p>123 News Street, NY, USA</p>
          <a
            className="pub-footer-link"
            href="#">
            info@example.com
          </a>
          <p>+123 456 7890</p>
        </div>
        <div className="flex-1 flex-col px-4">
          <h2 className="text-2xl pub-footer-title">Useful Links</h2>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Quick Links</h2>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
          <p>
            <a
              className="pub-footer-link"
              href="#">
              Lorem ipsum
            </a>
          </p>
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            porta dui. Class aptent taciti sociosqu
          </p>
          <input
            className="shadow appearance-none border rounded w-full my-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Your email here"></input>
        </div>
      </div>
      <div className="container flex mx-auto flex flex-wrap py-8 flex-col justify-center items-center sm:flex-row">
        <a
          className="px-4"
          href="">
          Terms of use
        </a>
        <div className="hidden sm:inline-flex">|</div>
        <a
          className="px-4"
          href="">
          Privacy policy
        </a>
        <div className="hidden sm:inline-flex">|</div>
        <a
          className="px-4"
          href="">
          Cookies
        </a>
        <div className="hidden sm:inline-flex">|</div>
        <a
          className="px-4"
          href="">
          Accessibility help
        </a>
        <div className="hidden sm:inline-flex">|</div>
        <a
          className="px-4"
          href="">
          Advertise with us
        </a>
        <div className="hidden sm:inline-flex">|</div>
        <a
          className="px-4"
          href="">
          Contact us
        </a>
      </div>
    </footer>
  );
};

export default PubFooter;
