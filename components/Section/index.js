import { Button, Card, Container, Grid, Link, Text } from '@nextui-org/react';

const formatDescription = content => {
  const mainPart = content?.split(' [Learn more]')[0];
  const parts = /\[([^\]]+)\]\(([^\)]+)\)/.exec(content);

  return {
    text: mainPart,
    url: parts[2],
    linkText: parts[1]
  };
};

const Section = ({ data }) => {
  const { text, url, linkText } = formatDescription(data.description);

  return (
    <Card>
      <Card.Header>
        <Text
          size={18}
          b>
          {data.title}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Text
          h1
          color="primary"
          size={72}>
          {data.displayValue}
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Container
          fluid
          css={{
            padding: 0
          }}>
          <Text transform="full-width">{text}</Text>
        </Container>
        <Button
          size="xs"
          as={Link}
          target="_blank"
          href={url}>
          {linkText}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Section;
