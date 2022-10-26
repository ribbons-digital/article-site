import Article from "./Article";
import React from "react";
import { articles, languages, environments } from "./utils";
import "./styles.css";
import SearchInput from "./SearchInput";
import Checkbox from "./Checkbox";

export default function App() {
  // articles state (default we load the state with the "articles" array from above)
  const [articlesState, setArticlesState] = React.useState(articles);

  const [articlesStateCopy, setArticlesStateCopy] = React.useState(articles);

  // Selected languages state for keeping tracking the checkboxes status
  const [selectedLangs, setSelectedLangs] = React.useState([]);

  // Selected environment state for keep tracking which button is clicked
  const [selectedEnv, setSelectedEnv] = React.useState("all");

  // function to call when clicking on any of the button
  function onSelectEnv(event) {
    console.log("button --> " + event.target.value);
    setSelectedEnv(event.target.value);
  }

  // side effect to run when "selectedLangs" or "selectedEnv" state is changed
  // This is where we filter the articlesState based on the selectedLangs and selectedEnv states
  React.useEffect(() => {
    console.log(articlesState);
    if (selectedLangs.length === 0 && selectedEnv === "all") {
      setArticlesState(articles);
      setArticlesStateCopy(articles);
    }

    if (selectedEnv === "all") {
      const updatedArticlesState = articles.filter((article) => {
        if (selectedLangs.length > 0) {
          return article.languages.some((lang) => selectedLangs.includes(lang));
        }
        return article;
      });
      setArticlesState(updatedArticlesState);
      setArticlesStateCopy(updatedArticlesState);
    }

    if (selectedEnv !== "all") {
      const updatedArticlesState = articles.filter((article) => {
        if (selectedLangs.length > 0) {
          return (
            article.languages.some((lang) => selectedLangs.includes(lang)) &&
            article.environment === selectedEnv
          );
        }

        return article.environment === selectedEnv;
      });
      setArticlesState(updatedArticlesState);
      setArticlesStateCopy(updatedArticlesState);
    }
  }, [selectedLangs, selectedEnv]);

  // UI
  return (
    <>
      <SearchInput
        articlesStateCopy={articlesStateCopy}
        setArticlesState={setArticlesState}
      />
      {/** languages checkboxes */}
      <div className="checkbox">
        {languages.map((language, index) => {
          return (
            <Checkbox
              key={index}
              language={language}
              selectedLangs={selectedLangs}
              setSelectedLangs={setSelectedLangs}
              value={languages[index]}
            />
          );
        })}
      </div>

      {/** buttons */}
      <div className="button">
        {environments.map((env, index) => {
          return (
            <input
              key={index}
              type="button"
              value={env}
              onClick={onSelectEnv}
            />
          );
        })}
      </div>

      {/** artcile cards based on the articlesState */}
      <div className="card">
        {articlesState.map((article) => {
          return (
            <Article
              key={article.id}
              article={article}
              onSelectEnv={onSelectEnv}
            />
          );
        })}
      </div>
    </>
  );
}
