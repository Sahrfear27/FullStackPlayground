import Converter from "./Component/Conveter/Converter";
import Increase from "./Component/Counter/Increase";

function App() {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-bold text-white bg-blue-500 p-4">
          Welcome to Revision of React
        </h1>
        <Increase />
        <Converter />
      </div>
    </>
  );
}

export default App;
