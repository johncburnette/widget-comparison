import Image from 'next/image';
import { Navbar, Button, Link, useTheme } from '@nextui-org/react';

const Navigation = () => {
  const { isDark } = useTheme();
  return (
    <Navbar
      isBordered={isDark}
      variant="sticky"
      maxWidth="fluid">
      <Navbar.Brand>
        <Image
          src="/images/revcontent-logo.png"
          alt="Revcontent"
          width={256}
          height={32}
        />
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button
            auto
            as={Link}
            href="https://www.revcontent.com"
            target="_blank">
            Learn More
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Navigation;
