import dynamic from 'next/dynamic';

const RingProgress = dynamic(() => import('@ant-design/charts'), {
  ssr: false
});

const RingChart = ({ value, min, max }) => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: value,
    color: ['#5B8FF9', '#E8EDF3']
  };

  return (
    <>
      <RingProgress {...config} />
    </>
  );
};

export default RingChart;
