async function getMatchData() {
  return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=51551a21-1ac5-4a8b-b866-7fd8fefb8486&offset=0")
    .then(data => data.json())
    .then(data => {
      if (data.status !== "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const relevantData = matchesList.map(match => `${match.name}, ${match.status},${match.matchType}`);

      console.log({ relevantData });

      document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');

      return relevantData;

    })

    .catch(e => console.log(e));
}

getMatchData();
