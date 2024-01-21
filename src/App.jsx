import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContentEvent from "./pages/ContentEvent";

const NotFoundPage = () => {
  return (
    <h1 className="mt-10 text-center text-3xl text-slate-900">
      Page not found 404
    </h1>
  );
};

const VerificationPage = () => {
  const verificationContent = `google-site-verification: googlebc14674711e6e563.html`;
  return <div dangerouslySetInnerHTML={{ __html: verificationContent }} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<ContentEvent />} />
        <Route
          path="/googlebc14674711e6e563.html"
          element={<VerificationPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
