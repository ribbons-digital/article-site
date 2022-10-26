import React from "react";

// a hook to optimise the input search. Delay the search with a timeout so it doesn't perform search on every keystroke
export function useDebounce(effect, dependencies, delay) {
  const callback = React.useCallback(effect, dependencies);

  React.useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

// mocked data
// hypothetically data from Strapi
export const articles = [
  {
    id: "1",
    title: "article 1",
    description: "New ChromeOS released!",
    languages: ["English", "Chinese", "Spanish", "Japanese"],
    environment: "chromeos"
  },
  {
    id: "2",
    title: "article 2",
    description: "Android 13 rumours",
    languages: ["English", "Chinese"],
    environment: "android"
  },
  {
    id: "3",
    title: "article 3",
    description: "New ChromeBook with new ChromeOS",
    languages: ["English", "Chinese", "Japanese", "Italian"],
    environment: "chromeos"
  },
  {
    id: "4",
    title: "article 4",
    description: "description 4 - jkl",
    languages: ["Chinese", "Japanese"],
    environment: "android"
  },
  {
    id: "5",
    title: "article 5",
    description: "description 5 - mno",
    languages: [
      "English",
      "Chinese",
      "Spanish",
      "Japanese",
      "Arabic",
      "Korean"
    ],
    environment: "chromeos"
  },
  {
    id: "6",
    title: "article 6",
    description: "description 6 - pqr",
    languages: ["Arabic", "Korean", "Japanese"],
    environment: "chromeos"
  }
];

// languages array (used to generate the list of checkboxes)
export const languages = [
  "English",
  "Chinese",
  "Spanish",
  "Japanese",
  "Arabic",
  "Korean",
  "Italian"
];

// environments array (used to generate the buttons)
export const environments = ["all", "chromeos", "android"];
