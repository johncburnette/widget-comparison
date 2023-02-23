const PubFooter = () => {
  return (
    <footer className="py-20 pub-footer">
      <div className="container mx-auto flex flex-wrap flex-col sm:flex-row">
        <div className="sm:flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Get in Touch</h2>
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Useful Links</h2>
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Quick Links</h2>
        </div>
        <div className="flex-1 px-4">
          <h2 className="text-2xl pub-footer-title">Newsletter</h2>
        </div>
      </div>
    </footer>
  );
};

export default PubFooter;
