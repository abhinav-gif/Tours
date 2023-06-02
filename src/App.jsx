import { createContext, useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

export const dataContext = createContext("");
const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fectchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      setData(await res.json());
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fectchData();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h1>Error Occurred while fetching Data</h1>;
  }
  if (data.length == 0) {
    return (
      <>
        <h3 className="title title-underline" style={{ marginTop: "2rem" }}>
          No Tours Left
        </h3>
        <div style={{ width: "7rem", margin: "0 auto" }}>
          <button
            className="btn info-btn delete-btn"
            style={{ marginTop: "2.5rem", padding: "0.5rem 1rem" }}
            onClick={() => fectchData()}
          >
            Refresh
          </button>
        </div>
      </>
    );
  }
  return (
    <main>
      <h3 className="title title-underline">Our Tours</h3>
      <dataContext.Provider value={{ data, setData }}>
        <Tours />
      </dataContext.Provider>
    </main>
  );
};
export default App;
