const allowedCategories = [
  'first-contentful-paint',
  'first-meaningful-paint',
  'speed-index',
  'total-blocking-time',
  'max-potential-fid',
  'cumulative-layout-shift',
  'interactive',
  'network-rtt',
  'network-server-latency'
];

export async function getData(type) {
  const data = await import(`../../public/json/${type}.json`);

  const {
    audits,
    categories: { performance }
  } = data;

  const filteredAudits = Object.fromEntries(
    Object.entries(audits).filter(([key]) => allowedCategories.includes(key))
  );

  return {
    score: performance?.score * 100,
    audits: filteredAudits
  };
}

export default async function handler(req, res) {
  const { type } = req.query;
  const response = await getData(type);

  res.json(response);
}
