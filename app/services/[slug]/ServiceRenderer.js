'use client';

import CyberSecurityAsAServicePage from '../components/CyberSecurityAsAService';
import ComplianceReview from './components/ComplianceReview';
import GapAssessment from './components/GapAssessment';
import ISOReview from './components/ISOReview';
import PoliciesAndSOPsDevelopment from './components/PoliciesAndSOPsDevelopment';
import InformationSecurityTraining from './components/InformationSecurityTraining';
import DataGovernanceAssessment from './components/DataGovernanceAssessment';
import DigitalDataProtectionActCompliance from './components/DigitalDataProtectionActCompliance';
import CybersecurityMaturityAssessment from './components/CybersecurityMaturityAssessment';
import RiskAssessment from './components/RiskAssessment';
import RansomwareReadiness from './components/RansomwareReadiness';
import ThreatModelling from './components/ThreatModelling';
import BusinessImpactAnalysis from './components/BusinessImpactAnalysis';
import ThirdPartyRiskManagement from './components/ThirdPartyRiskManagement';
import DataFlowAndTrustAssessment from './components/DataFlowAndTrustAssessment';
import RedTeaming from './components/RedTeaming';
import ITEnvironmentReview from './components/ITEnvironmentReview';
import VAPTAssessment from './components/VAPTAssessment';
import SecureConfigurationReview from './components/SecureConfigurationReview';
import APISecurityAssessment from './components/APISecurityAssessment';
import WebAppSecurityAssessment from './components/WebAppSecurityAssessment';
import SOCMaturityAssessment from './components/SOCMaturityAssessment';
import DigitalForensicServices from './components/DigitalForensicServices';
import MobileAppSecurityAssessment from './components/MobileAppSecurityAssessment';
import CloudSecurityAssessment from './components/CloudSecurityAssessment';
import SocialEngineeringSimulation from './components/SocialEngineeringSimulation';

export default function ServiceRenderer({ slug }) {
  const components = {
    'cyber-security-as-a-service': <CyberSecurityAsAServicePage />,
    'compliance-review-audit': <ComplianceReview />,
    'gap-assessment-as-per-the-regulatory-standards-and-guidelines': <GapAssessment />,
    'it-environment-review-iso27001': <ISOReview />,
    'policies-and-sops-development': <PoliciesAndSOPsDevelopment />,
    'information-security-training': <InformationSecurityTraining />,
    'data-governance-assessment': <DataGovernanceAssessment />,
    'digital-personal-data-protection-act-compliance': <DigitalDataProtectionActCompliance />,
    'cybersecurity-maturity-assessment': <CybersecurityMaturityAssessment />,
    'risk-assessment': <RiskAssessment />,
    'ransomware-readiness': <RansomwareReadiness />,
    'threat-modelling': <ThreatModelling />,
    'business-impact-analysis-bia-digital-assets-platforms': <BusinessImpactAnalysis />,
    'third-party-risk-management': <ThirdPartyRiskManagement />,
    'data-flow-trust-boundary-assessment': <DataFlowAndTrustAssessment />,
    'red-teaming': <RedTeaming />,
    'it-environment-review': <ITEnvironmentReview />,
    'vulnerability-assessment-penetration-testing': <VAPTAssessment />,
    'secure-configuration-review': <SecureConfigurationReview />,
    'api-security-assessment': <APISecurityAssessment />,
    'web-application-security-assessment': <WebAppSecurityAssessment />,
    'soc-maturity-assessment': <SOCMaturityAssessment />,
    'digital-forensic-services': <DigitalForensicServices />,
    'mobile-application-security-assessment': <MobileAppSecurityAssessment />,
    'cloud-security-assessment': <CloudSecurityAssessment />,
    'simulate-social-engineering-attacks': <SocialEngineeringSimulation />,
  };

  return components[slug] || (
    <div className="min-h-screen flex items-center justify-center text-center text-gray-600 px-4">
      <p className="text-lg">The requested service page was not found.</p>
    </div>
  );
}



