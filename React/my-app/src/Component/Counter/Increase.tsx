import { useState } from "react";

export default function Increase() {
  let [count, setCount] = useState(0);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    user: "Joe",
  });
  const handleIncrease = () => {
    setCount((preCount) => {
      return preCount + 1;
    });
  };
  const handleDecrease = () => {
    setCount((preCount) => {
      return preCount - 1;
    });
  };
  //   For Object Type, pass a completely new object for modification
  const handleChangeName = () => {
    setUserForm({
      ...userForm,
      user: "Sahfear",
    });
  };
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-cyan-600 to-blue-700 py-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 text-center text-white w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 tracking-wide">🌟 Counter</h2>

        {/* Counter Section */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 font-semibold text-base transition-transform transform hover:scale-105"
              onClick={handleIncrease}
            >
              +1
            </button>
            <span className="text-2xl font-extrabold">{count}</span>
            <button
              className="bg-red-500 hover:bg-red-600 rounded-full px-4 py-2 font-semibold text-base transition-transform transform hover:scale-105"
              onClick={handleDecrease}
            >
              -1
            </button>
          </div>
        </div>

        {/* User Section */}
        <div className="bg-white/10 p-4 rounded-lg space-y-3">
          <h3 className="text-xl font-semibold">👤 Change User</h3>
          <button
            className="bg-green-500 hover:bg-green-600 rounded-lg px-4 py-2 font-semibold text-base transition-transform transform hover:scale-105"
            onClick={handleChangeName}
          >
            Change Name
          </button>
          <p className="text-base mt-2">
            <span className="opacity-80">User Name:</span>{" "}
            <span className="font-bold">{userForm.user}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
