const allowedEntries = [
  'application/javascript; charset=utf-8',
  'application/x-javascript'
];

export async function getNetworkData(type) {
  const data = await import(`../../public/json/${type}-requests.json`);

  const {
    log: { entries }
  } = data;

  const filteredEntries = entries.filter(entry => {
    delete entry.cache;
    delete entry.pageref;
    delete entry.serverIPAddress;
    return allowedEntries.includes(entry.response.content.mimeType);
  });

  const aggregateSize = filteredEntries.reduce(
    (acc, cur) => acc + cur.response.bodySize,
    0
  );

  return {
    payload: +(aggregateSize / 1000).toFixed(2),
    entries: filteredEntries
  };
}

export default async function handler(req, res) {
  const { type } = req.query;
  const response = await getNetworkData(type);

  res.json(response);
}
