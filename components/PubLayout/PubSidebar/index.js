/* eslint-disable @next/next/no-img-element */
const PubSideBar = ({ isMobile = false }) => {
  if (isMobile) return null;
  return (
    <div className="md:basis-1/3 sm:pl-8 hidden sm:flex sm:flex-col">
      <div>
        <h2 className="text-3xl pub-nl-title">In This Category</h2>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-1.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-2.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-3.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-4.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-5.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
      </div>
      <img
        className="py-10 min-w-full hidden sm:inline-flex"
        src="/images/pub/ads-2.jpg"
        alt="Image"
      />
      <div>
        <div className="flex items-center justify-stretch pb-4">
          <a
            className="pub-link active flex-1 text-center"
            href="#">
            Featured
          </a>
          <a
            className="pub-link flex-1 text-center"
            href="#">
            Popular
          </a>
          <a
            className="pub-link flex-1 text-center"
            href="#">
            Latest
          </a>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img"
            src="/images/pub/news-350x223-1.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-2.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-3.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-4.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
        <div className="flex items-center py-2">
          <img
            className="pub-nl-img hidden sm:inline-flex"
            src="/images/pub/news-350x223-5.jpg"
            alt=""
          />
          <div className="px-4">
            <a href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
          </div>
        </div>
      </div>
      <img
        className="py-10 min-w-full hidden sm:inline-flex"
        src="/images/pub/ads-2.jpg"
        alt="Image"
      />
    </div>
  );
};

export default PubSideBar;
