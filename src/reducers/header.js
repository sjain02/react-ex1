const headerDefaultState = {
  title: "Boiler Plate rendered via header",
  subtitle: ""
};
export default (prevState = headerDefaultState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return {
        ...prevState,
        title: action.title
      };
    case "SET_SUBTITLE":
      return {
        ...prevState,
        subtitle: action.subtitle
      };
    case "SET_HEADER":
      return {
        title: action.title,
        subtitle: action.subtitle
      };
    default:
      return prevState;
  }
};

const filtersDefaultState = {
  text: "",
  sortBy: "priority"
};
