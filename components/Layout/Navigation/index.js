import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className="flex bg-gray-200">
      <div className="mx-auto px-2 sm:px-6 lg:px-3 flex flex-1">
        <div className="flex flex-1 justify-between h-16">
          <div className="mx-auto flex flex-1 justify-center items-center">
            <div className="mr-auto flex justify-start">
              <Image
                className="flex-1"
                src="/images/revcontent.png"
                alt="revcontent"
                width={32}
                height={32}
              />
            </div>
            <div className="flex flex-row justify-center space-x-4">
              <Link
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                href="https://www.revcontent.com"
                target="_blank">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
