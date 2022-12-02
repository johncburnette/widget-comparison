import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navigation />
      <div className="container mx-auto p-6">{children}</div>
    </div>
  );
};

export default Layout;
