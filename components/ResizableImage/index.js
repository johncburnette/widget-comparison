import useResizeObserver from './hooks/useResizeObserver';

/* eslint-disable @next/next/no-img-element */
const ResizableImage = ({ src, parentWidth }) => {
  console.log(parentWidth);

  return (
    <img
      width={parentWidth}
      style={{
        width: `${parentWidth}px`
      }}
      src={src}
      alt=""
    />
  );
};

export default ResizableImage;
