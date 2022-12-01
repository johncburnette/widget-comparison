import { Container, useTheme } from '@nextui-org/react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const { theme } = useTheme();
  return (
    <Container
      fluid
      css={{
        padding: 0
      }}>
      <Navigation />
      {children}
    </Container>
  );
};

export default Layout;
