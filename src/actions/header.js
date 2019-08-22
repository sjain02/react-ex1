export const setTitle = (title = "") => {
  return {
    type: "SET_TITLE",
    title
  };
};
export const setSubtitle = (subtitle = "") => {
  return {
    type: "SET_SUBTITLE",
    subtitle
  };
};
export const setHeader = ({ title = "", subtitle = "" } = {}) => {
  return {
    type: "SET_HEADER",
    title,
    subtitle
  };
};
