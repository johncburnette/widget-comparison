import { Grid, Card, Text, Container, Divider } from '@nextui-org/react';
import Layout from '../components/Layout/Index';
import Section from '../components/Section';
import SizeComparison from '../components/SizeComparison';
import { getLighthouseData } from './api/lighthouse';
import { getNetworkData } from './api/requests';

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

export default function Home({
  sbinnalaLighthouse,
  sbinnalaNetworkRequests,
  performanteLighthouse,
  performanteNetworkRequests
}) {
  const sbinnalaAuditItems = sbinnalaLighthouse.audits;
  const sbinnalaItems = Object.entries(sbinnalaAuditItems).map(
    ([key, value]) => (
      <Grid key={`sb-${key}`}>
        <Section data={value} />
      </Grid>
    )
  );
  const sbinnalaPayload = sbinnalaNetworkRequests.payload;

  const performanteAuditItems = performanteLighthouse.audits;
  const performanteItems = Object.entries(performanteAuditItems).map(
    ([key, value]) => (
      <Grid key={`pf-${key}`}>
        <Section data={value} />
      </Grid>
    )
  );
  const performantePayload = performanteNetworkRequests.payload;

  return (
    <Layout>
      <Grid.Container gap={2}>
        <Grid direction="column">
          <Grid>
            <Text h1>Web performance is pretty neat, let's talk about it.</Text>
            <Text size={22}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Interdum posuere lorem ipsum dolor. Fringilla est ullamcorper eget
              nulla facilisi etiam dignissim diam quis. Pretium vulputate sapien
              nec sagittis. Odio facilisis mauris sit amet massa vitae. Commodo
              quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
              Aliquet risus feugiat in ante metus. A cras semper auctor neque.
              Lacus vestibulum sed arcu non odio euismod lacinia at. Parturient
              montes nascetur ridiculus mus mauris vitae ultricies. Faucibus
              scelerisque eleifend donec pretium vulputate sapien nec sagittis.
            </Text>
          </Grid>
          <Grid>
            <Text size={22}>
              Risus ultricies tristique nulla aliquet enim tortor at auctor.
              Consequat ac felis donec et odio pellentesque diam. Egestas dui id
              ornare arcu odio. Turpis massa sed elementum tempus. Bibendum
              neque egestas congue quisque egestas diam. Dignissim convallis
              aenean et tortor at risus viverra. Tortor condimentum lacinia quis
              vel eros donec ac. Proin sed libero enim sed. Vestibulum lectus
              mauris ultrices eros in. Mattis aliquam faucibus purus in massa
              tempor. Elit duis tristique sollicitudin nibh. Purus viverra
              accumsan in nisl nisi scelerisque eu ultrices vitae. In est ante
              in nibh mauris cursus mattis molestie. Nunc aliquet bibendum enim
              facilisis gravida neque. Mi quis hendrerit dolor magna. Aliquam
              malesuada bibendum arcu vitae. Natoque penatibus et magnis dis.
              Condimentum mattis pellentesque id nibh tortor. Eu consequat ac
              felis donec. Sit amet consectetur adipiscing elit duis tristique
              sollicitudin nibh.
            </Text>
          </Grid>
          <Grid>
            <Text h1>Comparisons</Text>
            <Text size={22}>
              Risus ultricies tristique nulla aliquet enim tortor at auctor.
              Consequat ac felis donec et odio pellentesque diam. Egestas dui id
              ornare arcu odio. Turpis massa sed elementum tempus. Bibendum
              neque egestas congue quisque egestas diam. Dignissim convallis
              aenean et tortor at risus viverra. Tortor condimentum lacinia quis
              vel eros donec ac. Proin sed libero enim sed. Vestibulum lectus
              mauris ultrices eros in. Mattis aliquam faucibus purus in massa
              tempor. Elit duis tristique sollicitudin nibh. Purus viverra
              accumsan in nisl nisi scelerisque eu ultrices vitae. In est ante
              in nibh mauris cursus mattis molestie. Nunc aliquet bibendum enim
              facilisis gravida neque. Mi quis hendrerit dolor magna. Aliquam
              malesuada bibendum arcu vitae. Natoque penatibus et magnis dis.
              Condimentum mattis pellentesque id nibh tortor. Eu consequat ac
              felis donec. Sit amet consectetur adipiscing elit duis tristique
              sollicitudin nibh.
            </Text>
          </Grid>
        </Grid>

        <Grid
          xs={6}
          direction="column">
          <Grid>
            <Text h2>Current Ad Code</Text>
          </Grid>
          <SizeComparison base={performantePayload} />
          {performanteItems}
        </Grid>
        <Grid
          xs={6}
          direction="column">
          <Grid>
            <Text h2>New Ad Code</Text>
          </Grid>
          <SizeComparison
            base={sbinnalaPayload}
            comparison={performantePayload}
          />
          {sbinnalaItems}
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const [
    sbinnalaLighthouse,
    sbinnalaNetworkRequests,
    performanteLighthouse,
    performanteNetworkRequests
  ] = await Promise.all([
    getLighthouseData('sbinnala'),
    getNetworkData('sbinnala'),
    getLighthouseData('performante'),
    getNetworkData('performante')
  ]);

  return {
    props: {
      sbinnalaLighthouse,
      sbinnalaNetworkRequests,
      performanteLighthouse,
      performanteNetworkRequests
    }
  };
}
