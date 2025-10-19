import { useRoutes } from "react-router-dom";
import Converter from "./Component/Conveter/Converter";
import Increase from "./Component/Counter/Increase";
import Todo from "./Component/Todo/Todo";
import Routers from "./Routes/Routers";

function App() {
  const element = useRoutes(Routers);
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold text-white bg-blue-500 p-4">
          Welcome to Revision of React
        </h1>
        {/* <Increase />
        <Converter /> */}
        {/* <Todo /> */}
        {element}
      </div>
    </>
  );
}

export default App;
