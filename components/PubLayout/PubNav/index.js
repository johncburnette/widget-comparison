const links = ['Home', 'About', 'Contact Us'];

const PubNav = () => {
  return (
    <div className="pub-nav flex items-stretch">
      <div className="container mx-auto flex items-center">
        {links.map(entry => (
          <a
            className="px-4 pub-nav-link"
            key={entry}
            href="#">
            {entry}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PubNav;
