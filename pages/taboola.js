import Script from 'next/script';
import Head from 'next/head';
import PubLayout from '../components/PubLayout';

export default function Taboola() {
  return (
    <PubLayout>
      <Head>
        <title>Best Publisher News - Taboola</title>
      </Head>
      <Script
        id="tb-12345"
        dangerouslySetInnerHTML={{
          __html: `window._taboola = window._taboola || [];
        _taboola.push({ article: 'auto' });
        !function (e, f, u) {
            e.async = 1;
            e.src = u;
            f.parentNode.insertBefore(e, f);
        }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            'https://cdn.taboola.com/libtrc/onlyinyourstate/loader.js');`
        }}></Script>
      <div class="advertisement-taboola article-advertisement">
        <div id="taboola-below-article-thumbnails"></div>
        <Script
          id="tb-23456"
          dangerouslySetInnerHTML={{
            __html: `window._taboola = window._taboola || [];
                                        _taboola.push({
                                            mode: "thumbnails-a",
                                            container: "taboola-below-article-thumbnails",
                                            placement: "Below Article Thumbnails",
                                            target_type: "mix"
                                        });`
          }}></Script>
      </div>
      <Script
        id="tb-34567"
        dangerouslySetInnerHTML={{
          __html: `window._taboola = window._taboola || []; _taboola.push({ flush: true });`
        }}></Script>
    </PubLayout>
  );
}
