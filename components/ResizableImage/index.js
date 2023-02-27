import useResizeObserver from './hooks/useResizeObserver';

/* eslint-disable @next/next/no-img-element */
const ResizableImage = ({ src, parentWidth, ratio }) => {
  const height = parentWidth * ratio || 0;

  return (
    <img
      width={parentWidth}
      height={height}
      style={{
        width: `${parentWidth}px`,
        height: `${height}px`
      }}
      src={src}
      alt=""
    />
  );
};

export default ResizableImage;
