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

const Sitemap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.partyml.my.id/</loc>
  <lastmod>2024-01-22T04:16:38+00:00</lastmod>
</url>


</urlset>`;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:slug" element={<ContentEvent />} />
        <Route
          path="/googlebc14674711e6e563.html"
          element={<VerificationPage />}
        />
        <Route
          path="/sitemap.xml"
          element={<Route render={() => <Sitemap />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
