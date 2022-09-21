
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";
import { SinglePage } from "./pages/SinglePage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:id" element={<SinglePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
        </Routes>
    </>
  );
}

export default App;
