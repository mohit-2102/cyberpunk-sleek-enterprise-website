import ServiceRenderer from './ServiceRenderer';

const serviceMetadata = {
  'cyber-security-as-a-service': {
    title: 'Cyber Security as a Service | CyberPunk',
    description: 'Comprehensive, scalable cybersecurity solutions tailored to protect your business from emerging threats.',
  },
  'compliance-review-audit': {
    title: 'Compliance Review & Audit | CyberPunk',
    description: 'Ensure your organization meets regulatory and industry compliance requirements with expert audits.',
  },
  'gap-assessment-as-per-the-regulatory-standards-and-guidelines': {
    title: 'Gap Assessment | CyberPunk',
    description: 'Identify compliance and security gaps against regulatory standards and industry best practices.',
  },
  'it-environment-review-iso27001': {
    title: 'IT Environment Review (ISO 27001) | CyberPunk',
    description: 'Comprehensive ISO 27001 review to strengthen your IT infrastructure’s security and compliance posture.',
  },
  'policies-and-sops-development': {
    title: 'Policies & SOPs Development | CyberPunk',
    description: 'Develop effective security policies and SOPs to ensure operational consistency and compliance.',
  },
  'information-security-training': {
    title: 'Information Security Training | CyberPunk',
    description: 'Empower your team with best practices and awareness to prevent security incidents.',
  },
  'data-governance-assessment': {
    title: 'Data Governance Assessment | CyberPunk',
    description: 'Evaluate and enhance your data governance practices for secure and compliant data handling.',
  },
  'digital-personal-data-protection-act-compliance': {
    title: 'DPDP Act Compliance | CyberPunk',
    description: 'Achieve compliance with India’s Digital Personal Data Protection Act through expert guidance.',
  },
  'cybersecurity-maturity-assessment': {
    title: 'Cybersecurity Maturity Assessment | CyberPunk',
    description: 'Assess and enhance your cybersecurity readiness with a structured maturity framework.',
  },
  'risk-assessment': {
    title: 'Risk Assessment | CyberPunk',
    description: 'Identify, analyze, and mitigate risks that could impact your business operations and data security.',
  },
  'ransomware-readiness': {
    title: 'Ransomware Readiness | CyberPunk',
    description: 'Evaluate your defenses and recovery plans to prevent and respond to ransomware attacks.',
  },
  'threat-modelling': {
    title: 'Threat Modelling | CyberPunk',
    description: 'Identify and mitigate potential threats early with structured threat modelling exercises.',
  },
  'business-impact-analysis-bia-digital-assets-platforms': {
    title: 'Business Impact Analysis (BIA) | CyberPunk',
    description: 'Understand the impact of disruptions on digital assets and platforms for better resilience planning.',
  },
  'third-party-risk-management': {
    title: 'Third-Party Risk Management | CyberPunk',
    description: 'Assess and manage cybersecurity risks posed by vendors and partners.',
  },
  'data-flow-trust-boundary-assessment': {
    title: 'Data Flow & Trust Boundary Assessment | CyberPunk',
    description: 'Map and secure data flows across trust boundaries to prevent unauthorized access.',
  },
  'red-teaming': {
    title: 'Red Teaming | CyberPunk',
    description: 'Simulated cyber attacks to test and improve your organization’s defense capabilities.',
  },
  'it-environment-review': {
    title: 'IT Environment Review | CyberPunk',
    description: 'Comprehensive review of your IT systems to ensure security and operational efficiency.',
  },
  'vulnerability-assessment-penetration-testing': {
    title: 'VAPT | CyberPunk',
    description: 'Identify and fix vulnerabilities through rigorous assessment and penetration testing.',
  },
  'secure-configuration-review': {
    title: 'Secure Configuration Review | CyberPunk',
    description: 'Review and harden your systems’ configurations to reduce the attack surface.',
  },
  'api-security-assessment': {
    title: 'API Security Assessment | CyberPunk',
    description: 'Secure APIs against vulnerabilities using OWASP API Top 10 & CSA guidelines.',
  },
  'web-application-security-assessment': {
    title: 'Web Application Security Assessment | CyberPunk',
    description: 'Evaluate and secure your web applications against common and advanced threats.',
  },
  'soc-maturity-assessment': {
    title: 'SOC Maturity Assessment | CyberPunk',
    description: 'Assess and enhance the effectiveness of your Security Operations Center.',
  },
  'digital-forensic-services': {
    title: 'Digital Forensic Services | CyberPunk',
    description: 'Investigate and analyze security incidents with advanced forensic techniques.',
  },
  'mobile-application-security-assessment': {
    title: 'Mobile App Security Assessment | CyberPunk',
    description: 'Identify and address vulnerabilities in mobile applications across platforms.',
  },
  'cloud-security-assessment': {
    title: 'Cloud Security Assessment | CyberPunk',
    description: 'Review and secure your cloud infrastructure to protect data and workloads.',
  },
  'simulate-social-engineering-attacks': {
    title: 'Social Engineering Simulation | CyberPunk',
    description: 'Test employee awareness and resilience against phishing and social engineering attacks.',
  },
};

// Default image URL for social sharing (update this with your real image URL)
const defaultSocialImage = 'https://CyberPunk.com/images/social-share.png';

export async function generateMetadata({ params }) {

    const { slug } = await params; // ✅ await here

  const meta = serviceMetadata[slug] || {
    title: 'Our Services | CyberPunk',
    description: 'Explore our cybersecurity services.',
  };

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://CyberPunk.com/services/${slug}`,
      siteName: 'CyberPunk',
      images: [
        {
          url: defaultSocialImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [defaultSocialImage],
      creator: '@YourCompany', // Replace with your Twitter handle
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ServiceRenderer slug={slug} />;
}



// import ServiceRenderer from './ServiceRenderer';

// const serviceMetadata = {
//   'cyber-security-as-a-service': {
//     title: 'Cyber Security as a Service | Your Company',
//     description: 'Comprehensive, scalable cybersecurity solutions tailored to protect your business from emerging threats.',
//   },
//   'compliance-review-audit': {
//     title: 'Compliance Review & Audit | Your Company',
//     description: 'Ensure your organization meets regulatory and industry compliance requirements with expert audits.',
//   },
//   'gap-assessment-as-per-the-regulatory-standards-and-guidelines': {
//     title: 'Gap Assessment | Your Company',
//     description: 'Identify compliance and security gaps against regulatory standards and industry best practices.',
//   },
//   'it-environment-review-iso27001': {
//     title: 'IT Environment Review (ISO 27001) | Your Company',
//     description: 'Comprehensive ISO 27001 review to strengthen your IT infrastructure’s security and compliance posture.',
//   },
//   'policies-and-sops-development': {
//     title: 'Policies & SOPs Development | Your Company',
//     description: 'Develop effective security policies and SOPs to ensure operational consistency and compliance.',
//   },
//   'information-security-training': {
//     title: 'Information Security Training | Your Company',
//     description: 'Empower your team with best practices and awareness to prevent security incidents.',
//   },
//   'data-governance-assessment': {
//     title: 'Data Governance Assessment | Your Company',
//     description: 'Evaluate and enhance your data governance practices for secure and compliant data handling.',
//   },
//   'digital-personal-data-protection-act-compliance': {
//     title: 'DPDP Act Compliance | Your Company',
//     description: 'Achieve compliance with India’s Digital Personal Data Protection Act through expert guidance.',
//   },
//   'cybersecurity-maturity-assessment': {
//     title: 'Cybersecurity Maturity Assessment | Your Company',
//     description: 'Assess and enhance your cybersecurity readiness with a structured maturity framework.',
//   },
//   'risk-assessment': {
//     title: 'Risk Assessment | Your Company',
//     description: 'Identify, analyze, and mitigate risks that could impact your business operations and data security.',
//   },
//   'ransomware-readiness': {
//     title: 'Ransomware Readiness | Your Company',
//     description: 'Evaluate your defenses and recovery plans to prevent and respond to ransomware attacks.',
//   },
//   'threat-modelling': {
//     title: 'Threat Modelling | Your Company',
//     description: 'Identify and mitigate potential threats early with structured threat modelling exercises.',
//   },
//   'business-impact-analysis-bia-digital-assets-platforms': {
//     title: 'Business Impact Analysis (BIA) | Your Company',
//     description: 'Understand the impact of disruptions on digital assets and platforms for better resilience planning.',
//   },
//   'third-party-risk-management': {
//     title: 'Third-Party Risk Management | Your Company',
//     description: 'Assess and manage cybersecurity risks posed by vendors and partners.',
//   },
//   'data-flow-trust-boundary-assessment': {
//     title: 'Data Flow & Trust Boundary Assessment | Your Company',
//     description: 'Map and secure data flows across trust boundaries to prevent unauthorized access.',
//   },
//   'red-teaming': {
//     title: 'Red Teaming | Your Company',
//     description: 'Simulated cyber attacks to test and improve your organization’s defense capabilities.',
//   },
//   'it-environment-review': {
//     title: 'IT Environment Review | Your Company',
//     description: 'Comprehensive review of your IT systems to ensure security and operational efficiency.',
//   },
//   'vulnerability-assessment-penetration-testing': {
//     title: 'VAPT | Your Company',
//     description: 'Identify and fix vulnerabilities through rigorous assessment and penetration testing.',
//   },
//   'secure-configuration-review': {
//     title: 'Secure Configuration Review | Your Company',
//     description: 'Review and harden your systems’ configurations to reduce the attack surface.',
//   },
//   'api-security-assessment': {
//     title: 'API Security Assessment | Your Company',
//     description: 'Secure APIs against vulnerabilities using OWASP API Top 10 & CSA guidelines.',
//   },
//   'web-application-security-assessment': {
//     title: 'Web Application Security Assessment | Your Company',
//     description: 'Evaluate and secure your web applications against common and advanced threats.',
//   },
//   'soc-maturity-assessment': {
//     title: 'SOC Maturity Assessment | Your Company',
//     description: 'Assess and enhance the effectiveness of your Security Operations Center.',
//   },
//   'digital-forensic-services': {
//     title: 'Digital Forensic Services | Your Company',
//     description: 'Investigate and analyze security incidents with advanced forensic techniques.',
//   },
//   'mobile-application-security-assessment': {
//     title: 'Mobile App Security Assessment | Your Company',
//     description: 'Identify and address vulnerabilities in mobile applications across platforms.',
//   },
//   'cloud-security-assessment': {
//     title: 'Cloud Security Assessment | Your Company',
//     description: 'Review and secure your cloud infrastructure to protect data and workloads.',
//   },
//   'simulate-social-engineering-attacks': {
//     title: 'Social Engineering Simulation | Your Company',
//     description: 'Test employee awareness and resilience against phishing and social engineering attacks.',
//   },
// };

// export async function generateMetadata({ params }) {
//   const meta = serviceMetadata[params.slug] || {
//     title: 'Our Services | Your Company',
//     description: 'Explore our cybersecurity services.',
//   };
//   return {
//     title: meta.title,
//     description: meta.description,
//   };
// }

// export default function Page({ params }) {
//   return <ServiceRenderer slug={params.slug} />;
// }
