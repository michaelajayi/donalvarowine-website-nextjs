export const getThemeClass = (
  isDarkMode: boolean,
  lightClass: string,
  darkClass: string
) => {
  return isDarkMode ? darkClass : lightClass;
};
