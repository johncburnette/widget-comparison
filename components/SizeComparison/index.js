const SizeComparison = ({ base, comparison }) => {
  const delta = comparison ? (base / comparison) * 100 : null;
  const difference = comparison ? base - comparison : null;

  return (
    <div className="flex flex-wrap items-baseline pt-4">
      <div className="text-4xl sm:text-5xl text-gray-500 font-bold">
        {base} kb
      </div>
      {delta && (
        <div className="sm:pl-2 pt-1 sm:pt-0 text-xl sm:text-2xl text-green-600 basis-full sm:basis-auto ">
          {difference.toFixed(2)} kb ({delta.toFixed(2)}%)
        </div>
      )}
    </div>
  );
};
export default SizeComparison;
