import dynamic from 'next/dynamic';
/* eslint-disable @next/next/no-img-element */
import ResizableImage from '../ResizableImage';
import useResizeObserver from '../ResizableImage/hooks/useResizeObserver';
import PubFooter from './PubFooter';
import PubNav from './PubNav';
import { getCurrentDevice } from './utils';

const PubSideBar = dynamic(() => import('./PubSidebar'), { ssr: false });

const PubLayout = ({ children }) => {
  const [columnRef, { width, height } = {}] = useResizeObserver();
  let device;
  if (typeof window !== 'undefined') {
    device = getCurrentDevice(window?.navigator?.userAgent?.toLowerCase());
  }

  const isMobile = device === 'mobile';
  const headerBannerSizes = isMobile
    ? {
        width: 328,
        height: 55
      }
    : {
        width: 600,
        height: 100
      };

  return (
    <div className="flex flex-col">
      <div className="pub-contact flex flex-wrap py-2">
        <div className="container mx-auto">
          <div className="flex items-center justify-center flex-wrap">
            <div className="flex py-2 sm:py-0 sm:flex-1">
              <a
                className="px-4"
                href="#">
                info@mail.com
              </a>
              <a
                className="px-4"
                href="#">
                +012 345 6789
              </a>
            </div>
            <div className="sm:self-end px-4">
              About / Privacy / Terms / Contact
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-wrap justify-center sm:justify-start items-stretch">
        <div className="flex justify-center sm:justify-start items-center sm:basis-1/4">
          <img
            className="logo-img"
            width="198"
            height="60"
            src="/images/pub/logo.png"
            alt="Publisher News Today"
          />
        </div>

        <div className="flex justify-center items-center py-2 sm:py-0 sm:basis-1/2">
          <img
            className="ad-img"
            src="images/pub/ads-1.jpg"
            width={headerBannerSizes.width}
            height={headerBannerSizes}
            alt=""
          />
        </div>
        <div className="flex items-stretch py-2 sm:py-0 sm:items-center w-full sm:basis-1/4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Search"></input>
        </div>
      </div>
      <PubNav />
      <div className="container mx-auto p-4 flex flex-wrap">
        <div
          ref={columnRef}
          className="lg:basis-2/3">
          <ResizableImage
            src="/images/pub/news-825x525.jpg"
            ratio={0.63}
            parentWidth={width}
          />
          <h1 className="py-6 text-4xl">Lorem ipsum dolor sit amet</h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non
            rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur
            tempor ac vel justo. In hac habitasse platea dictumst. Cras nec
            sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus
            consectetur id augue. Mauris dignissim neque felis. Phasellus mollis
            mi a pharetra cursus. Maecenas vulputate augue placerat lacus
            mattis, nec ornare risus sollicitudin.
          </p>
          <p className="py-2">
            Mauris eu pulvinar tellus, eu luctus nisl. Pellentesque suscipit mi
            eu varius pulvinar. Aenean vulputate, massa eget elementum finibus,
            ipsum arcu commodo est, ut mattis eros orci ac risus. Suspendisse
            ornare, massa in feugiat facilisis, eros nisl auctor lacus, laoreet
            tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit quam
            quis, semper augue.
          </p>
          <p className="py-2">
            Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio.
            Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien
            libero, bibendum nec viverra in, iaculis ut eros.
          </p>
          <h3 className="text-3xl py-6">Lorem ipsum dolor sit amet</h3>
          <p className="py-2">
            Vestibulum sit amet ullamcorper sem. Integer hendrerit elit eget
            purus sodales maximus. Quisque ac nulla arcu. Morbi venenatis arcu
            ac arcu cursus pharetra. Morbi sit amet viverra augue, ac ultricies
            libero. Praesent elementum lectus mi, eu elementum urna venenatis
            sed. Donec auctor purus ut mattis feugiat. Integer mi erat,
            consectetur sed tincidunt vitae, sagittis elementum libero. Vivamus
            a mauris consequat, hendrerit lectus in, fermentum libero. Integer
            mattis bibendum neque et porttitor.
          </p>
          <p className="py-2">
            Mauris quis arcu finibus, posuere dolor eu, viverra felis. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. In porta, ex vitae accumsan facilisis, nisi tellus
            dictum metus, quis fringilla dui tellus in tellus. Praesent pharetra
            orci at vehicula posuere. Sed molestie fringilla lorem, vel
            imperdiet tortor blandit at. Quisque non ultrices lorem, eget
            rhoncus orci. Fusce porttitor placerat diam et mattis. Nam laoreet,
            ex eu posuere sollicitudin, sem tortor pellentesque ipsum, quis
            mattis purus lectus ut lacus. Integer eu risus ac est interdum
            scelerisque.
          </p>
          <h4 className="text-2xl py-6">Lorem ipsum dolor sit amet</h4>
          <p className="py-2">
            Praesent ultricies, mauris eget vestibulum viverra, neque lorem
            malesuada mauris, eget rhoncus lectus enim a lorem. Vivamus at
            vehicula risus, eget facilisis massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Cras et posuere sapien. Fusce bibendum
            lorem sem, quis tincidunt felis mattis nec.
          </p>
          <p className="py-2">
            Proin vel nulla purus. Nunc nec eros in nisi efficitur rutrum quis
            sed eros. Mauris felis dolor, rhoncus eget gravida vitae, pretium
            vel arcu. Cras blandit tellus eget tellus dictum venenatis. Sed
            ultricies bibendum dictum. Etiam facilisis erat id turpis tincidunt
            malesuada. Duis bibendum sapien eu condimentum sagittis. Proin nunc
            lorem, ullamcorper vel tortor sodales, imperdiet lacinia dui. Sed
            congue, felis id rhoncus varius, urna lacus imperdiet nunc, ut
            porttitor mauris mi quis mi. Integer rutrum est finibus metus
            eleifend scelerisque. Morbi auctor dignissim purus in interdum.
            Vestibulum eu dictum enim. Suspendisse et sem vitae velit feugiat
            facilisis.
          </p>
          <p className="py-2">
            Nam sodales scelerisque nunc sed convallis. Vestibulum facilisis
            porta erat, sit amet pharetra tortor blandit id. Nunc velit tellus,
            consectetur sed convallis in, tincidunt finibus nulla. Integer vel
            ex in mauris tincidunt tincidunt nec sed elit. Etiam pretium lectus
            lectus, sed aliquet erat tristique euismod. Praesent faucibus nisl
            augue, ac tempus libero pellentesque malesuada. Vivamus iaculis
            imperdiet laoreet. Aliquam vel felis felis. Proin sed sapien erat.
            Etiam a quam et metus tempor rutrum. Curabitur in faucibus justo.
            Etiam imperdiet iaculis urna.
          </p>
          {children}
        </div>
        <PubSideBar isMobile={isMobile} />
      </div>
      <PubFooter />
    </div>
  );
};

export default PubLayout;
