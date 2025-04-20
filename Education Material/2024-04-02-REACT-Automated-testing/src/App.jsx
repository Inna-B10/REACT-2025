import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { LandingPage } from "./pages/LandingPage";
import { AboutPage } from "./pages/about/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
