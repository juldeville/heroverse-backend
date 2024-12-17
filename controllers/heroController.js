const heroverseUrl = "https://www.superheroapi.com/api";
const apiKey = process.env.API_KEY;

const fetchHeroesBatch = async (req, res) => {
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
      res.status(200).json({ result: true, heroes: heroesData });
    } else {
      res.status(404).json({ result: false, error: "No hero found" });
    }
  } catch (err) {
    console.error("error is:", err.message);
    res.json({ result: false, error: err.message });
  }
};

const fetchHeroById = async (req, res) => {
  console.log("query is: ", req.query.id);
  try {
    const result = await fetch(`${heroverseUrl}/${apiKey}/${req.query.id}`);
    const data = await result.json();

    data.response === "success"
      ? res.status(200).json({ result: true, hero: data })
      : res.status(404).json({ result: false, error: data.error });
  } catch (error) {
    console.error(`error: ${error.message}`);
    res.status(500).json({ result: false, error: error.message });
  }
};

module.exports = { fetchHeroesBatch, fetchHeroById };
