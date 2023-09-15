import { createContext, useContext, useEffect, useReducer } from "react";

const BASE_URL = "http://localhost:9000";

const IconsContext = createContext();

const initialState = {
  icons: [],
  isLoading: false,
  currentIcon: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "icons/loaded":
      return {
        ...state,
        isLoading: false,
        icons: action.payload,
      };

    case "icon/loaded":
      return { ...state, isLoading: false, currentIcon: action.payload };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknon action type");
  }
}

function IconsProvider({ children }) {
  const [{ icons, isLoading, currentIcon, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const [icons, setIcons] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentIcon, setCurrentIcon] = useState({});

  useEffect(function () {
    async function fetchIcons() {
      dispatch({ type: "loading" });

      try {
        const res = await fetch(`${BASE_URL}/icons`);
        const data = await res.json();
        dispatch({ type: "icons/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading data...",
        });
      }
    }
    fetchIcons();
  }, []);

  async function getIcon(id) {
    if (Number(id) === currentIcon.id) return;

    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/icons/${id}`);
      const data = await res.json();
      dispatch({ type: "icon/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading data...",
      });
    }
  }

  return (
    <IconsContext.Provider
      value={{ icons, isLoading, currentIcon, getIcon, error }}
    >
      {children}
    </IconsContext.Provider>
  );
}

function useIcons() {
  const context = useContext(IconsContext);
  if (context === undefined)
    throw new Error("IconsContext was used outside the IconsProvider");
  return context;
}

export { IconsProvider, useIcons };
