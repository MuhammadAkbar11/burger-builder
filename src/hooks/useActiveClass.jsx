import { useLocation } from "react-router-dom";

const useActiveClass = ({ activeClass, full = false }) => {
  const location = useLocation();

  const handlerMatch = value => {
    let classes = "";

    if (!full) {
      const isMatchArray = location.pathname
        .split("/")
        .filter(item => item !== "")
        .filter(item => item === value);

      if (isMatchArray !== []) {
        if (isMatchArray.length > 0) {
          return (classes = activeClass);
        }
        return classes;
      }

      return classes;
    } else {
      if (value === location.pathname) {
        return (classes = activeClass);
      }
      return classes;
    }
  };

  return handlerMatch;
};

export default useActiveClass;
