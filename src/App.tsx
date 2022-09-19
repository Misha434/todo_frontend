import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    { id: "", content: "", date: new Date(), important: false },
  ]);
  const getAll = () => {
    // const request = axios.get('http://localhost:3001/api/notes');
    const request = axios.get("https://todo-express-api-v0.fly.dev/");
    return request.then((res) => res.data);
  };

  useEffect(() => {
    getAll()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }, []);

  return (
    <>
      <div>hello world</div>
      <div>List</div>
      {data.map((data) => (
        <div key={data.id}>
          <li>{data.content}</li>
          <li>{data.date}</li>
        </div>
      ))}
    </>
  );
}

export default App;
