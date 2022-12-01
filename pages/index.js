import { Grid, Card, Text } from '@nextui-org/react';
import Layout from '../components/Layout/Index';
import Section from '../components/Section';
import { getData } from './api/lighthouse';

const MockItem = ({ text }) => {
  return (
    <Card css={{ h: '$24', $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Text
          h6
          size={15}
          color="white"
          css={{ mt: 0 }}>
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default function Home({ sbinnalaData, performanteData }) {
  const sbinnalaAuditItems = sbinnalaData.audits;
  const sbinnalaItems = Object.entries(sbinnalaAuditItems).map(
    ([key, value]) => (
      <Grid key={`sb-${key}`}>
        <Section data={value} />
      </Grid>
    )
  );

  const performanteAuditItems = performanteData.audits;
  const performanteItems = Object.entries(performanteAuditItems).map(
    ([key, value]) => (
      <Grid key={`pf-${key}`}>
        <Section data={value} />
      </Grid>
    )
  );

  return (
    <Layout>
      <Grid.Container gap={2}>
        <Grid
          xs={6}
          direction="column">
          <Grid>
            <Text h2>Current Ad Code</Text>
          </Grid>
          {performanteItems}
        </Grid>
        <Grid
          xs={6}
          direction="column">
          <Grid>
            <Text h2>New Ad Code</Text>
          </Grid>
          {sbinnalaItems}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [sbinnalaData, performanteData] = await Promise.all([
    getData('sbinnala'),
    getData('performante')
  ]);

  return {
    props: {
      sbinnalaData,
      performanteData
    }
  };
}
