import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Calculator } from "../components/Calculator/Calculator";

function IndexPage() {
  const { theme, time, timeAtEnter } = useContext(AppContext);
  return (
    <main
      className={`${
        theme === "light"
          ? "bg-[#dfdede] text-black"
          : "bg-[#101010] text-white"
      } duration-1000 transition-colors flex flex-col items-center `}
    >
      <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center">
        <h1 className="text-5xl">Hello World!</h1>
        {/* <p>{time.toLocaleTimeString()}</p>
        <p>{timeAtEnter.toLocaleTimeString()}</p> */}
        <Calculator/>
      </section>
    </main>
  );
}

export default IndexPage;

