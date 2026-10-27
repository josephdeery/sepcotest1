import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { SuccessStories } from "./pages/SuccessStories";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";
import { Ethics } from "./pages/Ethics";
import { NewsArticleIMS } from "./pages/NewsArticleIMS";
import { NewsArticleMoU } from "./pages/NewsArticleMoU";
import { NewsArticleMSGBC } from "./pages/NewsArticleMSGBC";
import { NewsArticleGreenFuture } from "./pages/NewsArticleGreenFuture";
import { NewsArticleMauritanides } from "./pages/NewsArticleMauritanides";
import { NewsArticleSonatrach } from "./pages/NewsArticleSonatrach";
import { NewsArticleSupplyBase } from "./pages/NewsArticleSupplyBase";
import { ServiceLogistics } from "./pages/ServiceLogistics";
import { ServiceMarine } from "./pages/ServiceMarine";
import { ServiceWaste } from "./pages/ServiceWaste";
import { ServiceOilfield } from "./pages/ServiceOilfield";
import { QhseQualityManagement } from "./pages/QhseQualityManagement";
import { QhseHealthSafety } from "./pages/QhseHealthSafety";
import { QhseEnvironmental } from "./pages/QhseEnvironmental";
import { MigrationDownload } from "./pages/MigrationDownload";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "projects", Component: Projects },
      { path: "success-stories", Component: SuccessStories },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
      { path: "ethics", Component: Ethics },
      { path: "news/ims-recertification", Component: NewsArticleIMS },
      { path: "news/mou-mauritania", Component: NewsArticleMoU },
      { path: "news/msgc-gold-exhibitor", Component: NewsArticleMSGBC },
      { path: "news/kids-planting-day", Component: NewsArticleGreenFuture },
      { path: "news/gold-sponsor-mauritania-2025", Component: NewsArticleMauritanides },
      { path: "news/sonatrach-visit", Component: NewsArticleSonatrach },
      { path: "news/supply-base-inauguration", Component: NewsArticleSupplyBase },
      { path: "services/logistics-supply-base", Component: ServiceLogistics },
      { path: "services/marine-services", Component: ServiceMarine },
      { path: "services/waste-management", Component: ServiceWaste },
      { path: "services/oil-field-services", Component: ServiceOilfield },
      { path: "qhse/quality-management", Component: QhseQualityManagement },
      { path: "qhse/health-safety", Component: QhseHealthSafety },
      { path: "qhse/environmental-protection", Component: QhseEnvironmental },
      { path: "migration-download", Component: MigrationDownload },
    ],
  },
]);
