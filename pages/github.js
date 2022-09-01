import { useState, useEffect } from "react";

// API
// -> idle (no data to be shown, null)
// -> loading (the API request has been made, "loading")
// -> data (the API response has come back, { ... })

export default function GitHub() {
  const [data, setData] = useState(null);

  useEffect(function () {
    setData("loading");
    const url = "https://api.github.com/users/Goaty-yagi/repos";
    const params = "?sort=updated&order=desc&per_page=100";
    fetch(url + params)
      .then(function (res) {
        return res.json();
      }).then(function (info) {
        setData(info);
        console.log(info)
      });
  }, []); // Call it once on initial render (never again)

  let markup = null;
  if (data === null) {
    markup = (
      <div>
        <h3>No data to show</h3>
      </div>
    );
  } else if (data === "loading") {
    markup = (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    let reposMarkup = data.map(function (repo) {
      return (
        <a href={repo.html_url} key={repo.id}>
          <h3>{repo.full_name}</h3>
        </a>
      );
    });
    markup = (
      <div>
        <h3>DATA READY TO BE SHOWN</h3>
        {reposMarkup}
      </div>
    );
  }
  return (
    <div>
      <h2>My GitHub Repositories</h2>
      {markup}
    </div>
  );
}