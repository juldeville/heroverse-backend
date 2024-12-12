const heroverseUrl = "https://www.superheroapi.com/api";
const apiKey = process.env.API_KEY;
const fetchHeroes = async (req, res) => {
  const batch = +req.query.batch || 1;
  const batchSize = 8;
  const startId = (batch - 1) * batchSize + 1;
  const ids = Array.from({ length: batchSize }, (_, i) => startId + i);

  const promises = ids.map((id) => {
    return fetch(`${heroverseUrl}/${apiKey}/${id}`).then((response) => response.json());
  });

  try {
    const heroesData = await Promise.all(promises);
    if (heroesData) {
      res.json({ result: true, heroes: heroesData });
    } else {
      res.json({ result: false, error: "No hero found" });
    }
  } catch (err) {
    console.error("error is:", err.message);
  }
};

module.exports = { fetchHeroes };
