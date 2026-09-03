import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Fixed import
import Header from "./Components/Header";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import WebDesigning from "./Components/WebDesigning";
import LandingPage from "./Components/LandingPage";
import WebDevelopment from "./Components/WebDevelopment"; // ✅ Import WebDevelopment component
import MobileAppDevelopment from "./Components/MobileAppDevelopment"; // ✅ Import MobileAppDevelopment component
import DigitalMarketing from "./Components/DigitalMarketing"; // ✅ Import DigitalMarketing component
import SecuritySystems from "./Components/SecuritySystems";
import IndustrialAutomation from "./Components/IndustrialAutomation";
import ITServices from "./Components/ITServices";
import AVAndITSystems from "./Components/AVAndITSystems";
import CyberSecurity from "./Components/CyberSecurity";
import CustomerExperienceCPQ from "./Components/CustomerExperienceCPQ";
import SupplyChainOptimization from "./Components/SupplyChainOptimization";
import BigDataAndAnalytics from "./Components/BigDataAndAnalytics";
import MobilityAndUX from "./Components/MobilityAndUX";
import AiAndMl from "./Components/AiAndMl";
import RoboticProcessAutomation from "./Components/RoboticProcessAutomation";
import InternetOfThings from "./Components/InternetOfThings";
import HumanCapitalManagement from "./Components/HumanCapitalManagement";
import PmpTraining from "./Components/PmpTraining";
import CapmTraining from "./Components/CapmTraining";
import PmiAcpTraining from "./Components/PmiAcpTraining";
import Prince2FoundationTraining from "./Components/Prince2FoundationTraining";
import PmiRmpTraining from "./Components/PmiRmpTraining";
import Prince2PractitionerTraining from "./Components/Prince2PractitionerTraining";
import AgileProjectManagement from "./Components/AgileProjectManagement";
import MicrosoftProject from "./Components/MicrosoftProject";
import BusinessAnalytics from "./Components/BusinessAnalytics";
import TableauAnalytics from "./Components/TableauAnalytics";
import RToolsAnalytics from "./Components/RToolsAnalytics";
import DataMiningTraining from "./Components/DataMiningTraining";
import DataOptimization from "./Components/DataOptimization";
import ContactUs from "./Components/ContactUs"; // ✅ Import ContactUs component
import Footer from "./Components/Footer";
import Careers from "./Components/Careers"; // ✅ Import Careers component
const App = () => {
  return (
    <>
      <BrowserRouter> {/* ✅ Only one router wrapper */}
        <Header />
        <Routes> {/* ✅ Routes instead of Router */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/web-designing" element={<WebDesigning />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} /> {/* ✅ Added MobileAppDevelopment route */} 
          <Route path="/digital-marketing" element={<DigitalMarketing />} /> {/* ✅ Added DigitalMarketing route */}
          <Route path="/security-systems" element={<SecuritySystems />} />  
          <Route path="/industrial-automation-services" element={<IndustrialAutomation />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/av-and-it-systems" element={<AVAndITSystems />} /> {/* ✅ Added AVAndITSystems route */}
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/customer-experience-cpq" element={<CustomerExperienceCPQ />} />
          <Route path="/supply-chain-optimization" element={<SupplyChainOptimization  />} />  
          <Route path="/big-data-and-analytics" element={<BigDataAndAnalytics />} /> 
          <Route path="/mobility-and-ux" element={<MobilityAndUX />} />  
          <Route path="/ai-and-ml" element={<AiAndMl />} />  
          <Route path="/robotic-process-automation" element={<RoboticProcessAutomation />} />  
          <Route path="/internet-of-things" element={<InternetOfThings />} />  
          <Route path="/human-capital-management" element={<HumanCapitalManagement />} />  
          <Route path="/pmp-training" element={<PmpTraining />} />  
          <Route path="/pmi-capm-training" element={<CapmTraining />} />  
          <Route path="/pmi-acp-training" element={<PmiAcpTraining />} />  
          <Route path="/prince2-foundation-training" element={<Prince2FoundationTraining />} />  
          <Route path="/pmi-rmp-training" element={<PmiRmpTraining />} />  
          <Route path="/prince2-practitioner-training" element={<Prince2PractitionerTraining />} />  
          <Route path="/agile-project-management-training" element={<AgileProjectManagement />} />  
          <Route path="/microsoft-project-training" element={<MicrosoftProject />} />  
          <Route path="/business-analytics-training" element={<BusinessAnalytics />} />  
          <Route path="/tableau-training" element={<TableauAnalytics />} />  
          <Route path="/r-tools-training" element={<RToolsAnalytics />} /> 
          <Route path="/data-mining-training" element={<DataMiningTraining />} /> 
          <Route path="/data-optimization-training" element={<DataOptimization />} /> 
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/careers" element={<Careers />} /> 


        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;