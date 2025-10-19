import { useState, type ChangeEvent } from "react";

export default function Converter() {
  const [conversionType, setconversionType] = useState<"CTF" | "FTC" | "">("");
  const [input, setInput] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value === "" ? "" : parseFloat(e.target.value));
  };
  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setconversionType(e.target.value as "CTF" | "FTC");
  };

  const handleConvert = () => {
    if (conversionType === "CTF" && typeof input === "number") {
      setResult((input * 9) / 5 + 32);
    } else if (conversionType === "FTC" && typeof input === "number") {
      setResult(((input - 32) * 5) / 9);
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <>
      <h1>Converter CTF / FTC</h1>
      <div>
        <h1 className="text-3xl font-bold mb-6">🌡️ Temperature Converter</h1>
        <div className="flex space-x-6 mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="conversion"
              value="CTF"
              // checked={conversionType === "CTF"}
              onChange={handleTypeChange}
            />
            <span>Celsius → Fahrenheit</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="conversion"
              value="FTC"
              // checked={conversionType === "FTC"}
              onChange={handleTypeChange}
            />
            <span>Fahrenheit → Celsius</span>
          </label>
        </div>
        <div>
          {" "}
          <p>Enter the amount you want to convert</p>
          <input
            type="text"
            placeholder="Ente Tempeatue Eg:45"
            onChange={handleInputChange}
            className="text-black rounded-lg px-4 py-2 mb-4 w-48 text-center"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 rounded-full px-6 py-2 font-semibold transition-transform transform hover:scale-105"
            onClick={handleConvert}
          >
            Convert
          </button>
          {result !== null && (
            <p>
              Result:{" "}
              <span>
                {result.toFixed(2)} {conversionType}
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
