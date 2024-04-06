import { useQuery } from "@apollo/client";
import { getContriesQuery } from "./query";

function App() {
  const { loading, data } = useQuery(getContriesQuery);

  console.log(data)
  
  if (loading) return <div>loading</div>;
  return <div>Hello world</div>;
}

export default App;
