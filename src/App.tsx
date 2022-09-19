import axios from "axios";
import { useEffect, useState } from "react";

type Data = {
  id: string;
  content: string;
  important: boolean;
  date: Date;
}

function App() {
  const [data, setData] = useState<Data[]>([]);
  const getAll = () => {
    // const request = axios.get("http://localhost:3001/api/notes");
    const request = axios.get("https://todo-express-api-v0.fly.dev/");
    return request.then((res) => res.data);
  };

  useEffect(() => {
    getAll()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }, []);

  return (
    <>
      <div>hello world</div>
      <div>List</div>
      {data.length ? (
        data.map((data) => (

          <ul key={data.id}>
            <li>{data.content}</li>
            <li>{data.date}</li>
          </ul>
        ))
      ) : (
        <p>No item</p>
      )}
    </>
  );
}

export default App;
