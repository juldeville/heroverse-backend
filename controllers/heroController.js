const heroverseUrl = "https://www.superheroapi.com/api";
const apiKey = process.env.API_KEY;
const fetchHeroes = async (req, res) => {
  const ids = [1, 2, 3, 4, 5, 6, 7, 8];
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
