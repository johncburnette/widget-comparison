// import { Grid, Card, Text, Container, Divider } from '@nextui-org/react';
import Layout from '../components/Layout/Index';
import Section from '../components/Section';
import SizeComparison from '../components/SizeComparison';
import { getLighthouseData } from './api/lighthouse';
import { getNetworkData } from './api/requests';

export default function Home({
  sbinnalaLighthouse,
  sbinnalaNetworkRequests,
  performanteLighthouse,
  performanteNetworkRequests
}) {
  const sbinnalaAuditItems = sbinnalaLighthouse.audits;
  const sbinnalaItems = Object.entries(sbinnalaAuditItems).map(
    ([key, value]) => (
      <div key={`sb-${key}`}>
        <Section data={value} />
      </div>
    )
  );
  const sbinnalaPayload = sbinnalaNetworkRequests.payload;

  const performanteAuditItems = performanteLighthouse.audits;
  const performanteItems = Object.entries(performanteAuditItems).map(
    ([key, value]) => (
      <div key={`pf-${key}`}>
        <Section data={value} />
      </div>
    )
  );
  const performantePayload = performanteNetworkRequests.payload;

  return (
    <Layout>
      <div className="pt-20">
        <h1 className="text-5xl font-bold text-green-600">
          Web performance is neat. Let&apos;s talk about it.
        </h1>
        <p className="text-3xl pt-5 text-gray-500">
          Web performance is something we think about a lot at Revcontent. It
          could be finding ways to serve images at a smaller file size without
          degrading quality. It could also be exploring how to reduce resource
          usage or improve response times for an API or other service. Whatever
          the case may be, performance is something we are passionate about.
          Recently, our ad code has been something we&apos;re working on to
          improve. While pretty effective in its current state, it could always
          be better and that&apos;s what we&apos;ve set out to do.
        </p>
      </div>
      <div className="pt-20">
        <h2 className="text-2xl font-bold">Size Comparisons</h2>
        <p className="pt-3 text-lg">
          Javascript bundle size is a big concern these days. Frameworks like
          React or Vue handle lazy loading and code splitting well, but they do
          not address reducing total payload size. Total payload size is the sum
          of all data that needs to be downloaded to display a webpage or other
          resource (a widget in this case). This includes the Javascript bundle,
          data received from API requests, and any image/video assets that need
          to be displayed. Even with the practice of code splitting where
          bundles are split up into multiple files (called chunks), the amount
          of data transferred remains the same. The only difference is that
          instead of a single 2MB file being downloaded, 4-5 files that total
          2MB in size are downloaded. Initial load times are improved, but the
          total payload size remains the same.
        </p>
        <p className="pt-3 text-lg">
          If you have a fast connection, this may not seem like a big deal.
          However, experts estimate that nearly 60% of all Internet traffic
          comes from a mobile device. And while cellular networks have improved
          greatly over the years, they still have a long way to go. Many
          providers still only have 3G coverage in certain areas. A webpage that
          needs to download 5MB worth of data to display takes a minimal amount
          of time on a cable or fiber optic connection. However, it can take
          several seconds for if signal quality is poor. In the worst case
          scenario, the connection times out and the page never loads at all.
          This is why it is critical to not only leverage lazy loading and code
          splitting, but also keep bundle sizes as small as possible. As such,
          this became one of our primary goals for our updated ad code. We spent
          a great deal of time looking at where and how we could provide the
          features we do in a way that generates less compiled code. It meant
          scrutinizing every aspect of the packages, patterns, and logic we use
          to generate what you see as a widget. Through a lot of testing, trial,
          and error we were able to reduce our size by over 38kb. This brought
          our updated ad code bundle size to a very lean 26kb.
        </p>
        <div className="p-5 lg:p-20">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 p-10 gap-4 bg-gray-100 m-15 shadow-md">
            <div>
              <h2 className="text-xl font-bold">Current Ad Code</h2>
              <SizeComparison base={performantePayload} />
            </div>
            <div>
              <h2 className="text-xl font-bold">New Ad Code</h2>
              <SizeComparison
                base={sbinnalaPayload}
                comparison={performantePayload}
              />
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold">Lighthouse Performance</h2>
        <p className="pt-3 text-lg">
          Another aspect we have focused on is rendering speed and efficiency.
          Ad code has some unique concerns compared to your average web
          application. It does not run as a standalone service or application.
          Instead, it resides on a web page alongside other libraries and logic
          in a shared space. It must be able to exist in harmony and perform its
          duties quickly and efficiently. Resource usage (memory, CPU, etc.)
          becomes significantly more of a concern because the resources provided
          to a page are shared among all of the logic that runs on the page.
          While we cannot control how resource intensive another library is, we
          can ensure that ours is as fast and efficient as possible. To help
          control this, we&apos;ve invested a lot of time in Lighthouse
          profiling.
        </p>
        <p className="pt-3 text-lg">
          Lighthouse is a site auditing tool commonly used across the web to
          provide feedback on how well a page is optimized. It provides data
          that outlines how well or poorly a page is optimized. Faster time to
          interactive, faster content paint, and lower blocking times are just
          some of the improvements coming from our updated ad code. To help keep
          things on track, we&apos;ve integrated Lighthouse testing into our
          development workflows. This helps us track and understand how
          potential changes in our code affect our performance goals.
        </p>
        <div className="sm:p-5 lg:p-20">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
            <div>
              <h3 className="pt-5 px-5 sm:pt-0 text-2xl font-bold">
                Current Ad Code
              </h3>
              {performanteItems}
            </div>

            <div>
              <h3 className="pt-5 px-5 sm:pt-0 text-2xl font-bold">
                New Ad Code
              </h3>
              {sbinnalaItems}
            </div>
          </div>
        </div>
      </div>
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
