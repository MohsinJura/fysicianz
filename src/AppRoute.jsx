import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Title from "./Title";

import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Blogs from "./Pages/Blogs";

import PCMH from "./Pages/Services/PCMH";
import OutOfNetwork_Billing from "./Pages/Services/OutOfNetwork_Billing";
import PatientBilling from "./Pages/Services/PatientBilling";
import QualityPayment from "./Pages/Services/QualityPayment";
import PracticeManagement from "./Pages/Services/PracticeManagement";
import CodingServices from "./Pages/Services/CodingServices";
import EnrollmentServices from "./Pages/Services/EnrollmentServices";
import DanialManagement from "./Pages/Services/DanialManagement";
import MedicalBilling from "./Pages/Services/MedicalBilling";
import AccountsReceivable from "./Pages/Services/AccountsReceivable";
import RCMSoftware from "./Pages/Services/RCMSoftware";
import VirtualAssistant from "./Pages/Services/VirtualAssistant";
import IncentiveProgram from "./Pages/Services/IncentiveProgram";
import MedicalAudit from "./Pages/Services/MedicalAudit";
import DigitalMarketing from "./Pages/Services/DigitalMarketing";
import PracticeReporting from "./Pages/Services/PracticeReporting";
import ScrollTop from "./ScrollTop";
import Services from "./Pages/Services";
import PolicyPage from "./Pages/PrivacyPolicy";

export default function AppRoute() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route element={<AppLayout />}>

          <Route path= '/' element= {<Title title="Home - Fysicianz"><Home /></Title>} />
          <Route path= '/abouts' element= {<Title title="About Us - Fysicianz"><AboutUs /></Title>} />
          <Route path= '/contacts' element= {<Title title="Contact Us - Fysicianz"><ContactUs /></Title>} />
          <Route path= '/blogs' element= {<Title title="Blogs - Fysicianz"><Blogs /></Title>} />
          <Route path= '/privacy' element= {<Title title="PrivacyPolicy - Fysicianz"><PolicyPage /></Title>} />
          <Route path= '/services' element= {<Title title="Services - Fysicianz"><Services /></Title>} />
          <Route path= '/services/amb' element= {<Title title="AMBS - Fysicianz"><MedicalBilling /></Title>} />
          <Route path= '/services/mc' element= {<Title title="MCS - Fysicianz"><CodingServices /></Title>} />
          <Route path= '/services/ce' element= {<Title title="C&ES - Fysicianz"><EnrollmentServices /></Title>} />
          <Route path= '/services/arf' element= {<Title title="ARFS - Fysicianz"><AccountsReceivable /></Title>} />
          <Route path= '/services/dms' element= {<Title title="DMS - Fysicianz"><DanialManagement /></Title>} />
          <Route path= '/services/ofnmb' element= {<Title title="Out-of-network - Fysicianz"><OutOfNetwork_Billing /></Title>} />
          <Route path= '/services/pb' element= {<Title title="Patient Billing - Fysicianz"><PatientBilling /></Title>} />
          <Route path= '/services/qpp' element= {<Title title="QPP - Fysicianz"><QualityPayment /></Title>} />
          <Route path= '/services/pcmh' element= {<Title title="PCMH - Fysicianz"><PCMH /></Title>} />
          <Route path= '/services/pm' element= {<Title title="Practice Management - Fysicianz"><PracticeManagement /></Title>} />
          <Route path= '/services/rcms' element= {<Title title="RCM Software - Fysicianz"><RCMSoftware /></Title>} />
          <Route path= '/services/va' element= {<Title title="Virtual Assistants - Fysicianz"><VirtualAssistant /></Title>} />
          <Route path= '/services/ip' element= {<Title title="Incentive Programs - Fysicianz"><IncentiveProgram /></Title>} />
          <Route path= '/services/ma' element= {<Title title="Medical Audit - Fysicianz"><MedicalAudit /></Title>} />
          <Route path= '/services/dm' element= {<Title title="Digital Marketing - Fysicianz"><DigitalMarketing /></Title>} />
          <Route path= '/services/pr' element= {<Title title="Practice Reporting - Fysicianz">< PracticeReporting /></Title>} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

