import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import ServicesPage from "./pages/ServicesPage";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CountryPage from "./pages/CountryPage";
import Workforce from "./pages/Workforce";
import Process from "./pages/Process";
import ConstructionIndustry from "./pages/ConstructionIndustry";
import ManufacturingIndustry from "./pages/Manufacturing";
import Petrochemicals from "./pages/Petrochemicals";
import Mining from "./pages/Mining";
import OilGas from "./pages/Oil & Gas";
import Logistics from "./pages/Logistics";
import Marine from "./pages/Marine";
import Infrastructure from "./pages/Infrastructure.jsx";
import Warehousing from "./pages/Warehousing.jsx";
import Shipbuilding from "./pages/Shipbuilding.jsx";
import FoodProcessing from "./pages/FoodProcessing.jsx";
import Hospitality from "./pages/Hospitality.jsx";

const pages = {
  home: Home,
  about: About,
  jobs: Jobs,
  services: ServicesPage,
  employers: ServicesPage,
  candidates: Jobs,
  contact: Contact,
  workforce: Workforce,
  process: Process,
  "industry-construction": ConstructionIndustry,
  "industry-manufacturing": ManufacturingIndustry,
  "industry-petrochemicals": Petrochemicals,
  "industry-mining": Mining,
  "industry-oil-gas": OilGas,
  "industry-logistics": Logistics,
  "industry-marine": Marine,
  "industry-infrastructure": Infrastructure,
  "industry-warehousing": Warehousing,
  "industry-shipbuilding": Shipbuilding,
  "industry-food-processing": FoodProcessing,
  "industry-hospitality": Hospitality,
  "country-oman": CountryPage,
  "country-saudi-arabia": CountryPage,
  "country-united-arab-emirates": CountryPage,
  "country-qatar": CountryPage,
  "country-poland": CountryPage,
  "country-kuwait": CountryPage,
  "country-mauritius": CountryPage,
  "country-russia": CountryPage,
};

const basePath = "/Amreen-Consultancy";
const pagePaths = {
  home: "",
  about: "about",
  jobs: "jobs",
  services: "services",
  employers: "employers",
  candidates: "candidates",
  contact: "contact",
  workforce: "workforce",
  process: "process",
  "industry-construction": "industries/construction",
  "industry-manufacturing": "industries/manufacturing",
  "industry-petrochemicals": "industries/petrochemicals",
  "industry-mining": "industries/mining",
  "industry-oil-gas": "industries/oil-gas",
  "industry-logistics": "industries/logistics",
  "industry-marine": "industries/marine",
  "industry-infrastructure": "industries/infrastructure",
  "industry-warehousing": "industries/warehousing",
  "industry-shipbuilding": "industries/shipbuilding",
  "industry-food-processing": "industries/food-processing",
  "industry-hospitality": "industries/hospitality",
  "country-oman": "countries/oman",
  "country-saudi-arabia": "countries/saudi-arabia",
  "country-united-arab-emirates": "countries/united-arab-emirates",
  "country-qatar": "countries/qatar",
  "country-poland": "countries/poland",
  "country-kuwait": "countries/kuwait",
  "country-mauritius": "countries/mauritius",
  "country-russia": "countries/russia",
};

const pagesByPath = Object.fromEntries(
  Object.entries(pagePaths).map(([page, path]) => [path, page]),
);

function pageFromPath(pathname) {
  const path = pathname.replace(/\/+$/, "").replace(/^\//, "");
  if (path === basePath.slice(1) || path === "") return "home";
  const prefix = `${basePath.slice(1)}/`;
  if (!path.startsWith(prefix)) return null;
  return pagesByPath[path.slice(prefix.length)] || null;
}

export default function App() {
  const [page, setPage] = useState(() => pageFromPath(window.location.pathname));
  const navigate = useCallback((nextPage) => {
    if (!pages[nextPage] || pagePaths[nextPage] === undefined) return;
    const nextPath = `${basePath}/${pagePaths[nextPage]}`.replace(/\/$/, "/");
    if (window.location.pathname !== nextPath) {
      window.history.pushState({ page: nextPage }, "", nextPath);
    }
    setPage(nextPage);
  }, []);

  useEffect(() => {
    const onPopState = () => setPage(pageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (page === null) return;
    const canonicalPath = `${basePath}/${pagePaths[page]}`.replace(/\/$/, "/");
    if (window.location.pathname !== canonicalPath) {
      window.history.replaceState({ page }, "", canonicalPath);
    }
  }, [page]);

  useEffect(() => {
    if (page !== null) window.scrollTo({ top: 0, behavior: "instant" });
  }, [page]);

  const Page = pages[page];
  if (!Page) return null;

  return (
    <>
      <Header page={page} navigate={navigate} />
      <main>
        <Page page={page} navigate={navigate} />
      </main>
      <Footer navigate={navigate} />
      <ScrollToTop />
    </>
  );
}