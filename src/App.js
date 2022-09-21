
import { Routes, Route , Navigate} from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Layout } from "./components/Layout";
import { SinglePage } from "./pages/SinglePage"
import { Login } from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element = {<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about-us" element={<Navigate to="/about" replace/>}/>
        <Route path="about/:id" element={<SinglePage />} />
        <Route path="contact" element={<RequireAuth>
          <ContactPage/>
        </RequireAuth>} />
        <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
