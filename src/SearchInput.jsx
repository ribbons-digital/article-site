import React from "react";
import { useDebounce } from "./utils";

export default function SearchInput({ articlesStateCopy, setArticlesState }) {
  // input value state
  const [inputValue, setInputValue] = React.useState("");

  // function to call when typing in the input field
  function onChangeInput(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
  }

  // use the custom hook when you type in the input field
  useDebounce(
    () => {
      // If the input field is not empty
      if (Boolean(inputValue)) {
        const re = new RegExp(inputValue, "i"); // create a regex and ignore the upper/lower cases of the characters that are typed in

        // get the updated articles state from the "articlesStateCopy" because this state is only updated when interacting with the checkboxes and the buttons
        const updatedArticlesState = articlesStateCopy.filter((article) => {
          // return article that its title and description includes characters from the regex
          // You can search against more fields by adding them below
          return re.test(article.title + article.description);
        });

        // Update the state
        setArticlesState(updatedArticlesState);
      } else {
        // If the input field is empty, we update the state with articlesState copy (state that was only updated when interacting the checkboxes and buttons)
        setArticlesState(articlesStateCopy);
      }
    },
    [inputValue],
    800
  );

  return (
    <input
      value={inputValue}
      onChange={onChangeInput}
      className="searchInput"
    />
  );
}
