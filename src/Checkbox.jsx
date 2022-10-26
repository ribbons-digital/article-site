import React from "react";

export default function Checkbox({
  language,
  selectedLangs,
  setSelectedLangs,
  value
}) {
  // function to call when checkboxes are ticked/unticked
  function onSelectLanguages(event) {
    console.log(event.target.value);

    // We get the index by checking if the value from the checkbox exists in the selectedLangs array
    const index = selectedLangs.indexOf(event.target.value);

    // if index is greater than -1, meaning the ticked checkbox value (or the element) already exists in the selectedLangs array.
    // So we want to remove it from the array so it will be in the "unticked" state
    if (index > -1) {
      // We remove the element by creating a new array from the selectedLangs array by filtering out the element
      // Here we are saying return everything from the selectedLangs except the element which index is equal to "index"
      const updatedSelectedLangs = selectedLangs.filter(
        (lang, idx) => idx !== index
      );
      setSelectedLangs(updatedSelectedLangs);
    } else {
      // Here it means the index is equal to -1, meaning the element doesn't exist in the selectedLangs array so we want to update the selectedLangs array by adding this element
      setSelectedLangs([...selectedLangs, event.target.value]);
    }
  }
  return (
    <>
      <input
        type="checkbox"
        id={language}
        name={language}
        value={value}
        checked={selectedLangs.includes(language)}
        onChange={onSelectLanguages}
      />
      <label htmlFor={language}>{language}</label>
    </>
  );
}
