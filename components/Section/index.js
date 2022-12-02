const formatDescription = content => {
  const mainPart = content?.split(' [Learn more]')[0];
  const parts = /\[([^\]]+)\]\(([^\)]+)\)/.exec(content);

  return {
    text: mainPart,
    url: parts[2],
    linkText: parts[1]
  };
};

const Section = ({ data }) => {
  const { text, url, linkText } = formatDescription(data.description);

  return (
    <div className="bg-gray-100 m-5 p-5 rounded flex flex-column items-center shadow-lg">
      <div>
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p className="pb-5 text-sm text-gray-600">{text}</p>
        <a
          className="text-green-600 font-bold"
          target="_blank"
          rel="noreferrer"
          href={url}>
          {linkText}
        </a>
      </div>
      <p className="text-4xl font-medium text-green-600 pl-10">
        {data.displayValue}
      </p>
    </div>
  );
};

export default Section;
