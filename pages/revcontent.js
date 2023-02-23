import Script from 'next/script';
import PubLayout from '../components/PubLayout';

export default function Revcontent() {
  return (
    <PubLayout>
      <div
        data-widget-host="revcontent"
        id="adcode"
        data-widget-width="600"
        data-pub-id="78861"
        data-widget-id="269155"
        data-testing-enabled></div>
      <Script
        src="https://delivery.revcontent.com/78861/269155/widget.js"
        async></Script>
    </PubLayout>
  );
}
