export function generateMetadata({ params }) {
    const metadataMap = {
        'compliance-review-audit': {
            title: 'Compliance Review & Audit Services - CyberPunk',
            description: 'Conduct thorough compliance audits to ensure your organization meets regulatory and cybersecurity standards.',
        },
        'gap-assessment-as-per-the-regulatory-standards-and-guidelines': {
            title: 'Gap Assessment Services - CyberPunk',
            description: 'Identify and bridge cybersecurity gaps based on RBI, SEBI, IRDAI, and NHB guidelines.',
        },
        'it-environment-review-iso27001': {
            title: 'ISO/IEC 27001:2022 IT Environment Review - CyberPunk',
            description: 'Evaluate and implement ISO/IEC 27001:2022 controls in your IT environment.',
        },
        'policies-and-sops-development': {
            title: 'Policies & SOPs Development - CyberPunk',
            description: 'Develop regulatory-compliant policies and SOPs under RBI, SEBI, IRDAI, and DPDP Act.',
        },
        'information-security-training': {
            title: 'Information Security Training & Awareness - CyberPunk',
            description: 'Empower employees with monthly threat updates and interactive cybersecurity training.',
        },
        'data-governance-assessment': {
            title: 'Data Governance Assessment - CyberPunk',
            description: 'Assess and optimize your PII management, privacy policies, and security frameworks.',
        },
        'digital-personal-data-protection-act-compliance': {
            title: 'DPDP Act 2023 Compliance - CyberPunk',
            description: 'Ensure full compliance with India’s Digital Personal Data Protection Act of 2023.',
        },
        'cybersecurity-maturity-assessment': {
            title: 'Cybersecurity Maturity Assessment - CyberPunk',
            description: 'Evaluate your cybersecurity posture using NIST & CMMI frameworks.',
        },
        'risk-assessment': {
            title: 'Cybersecurity Risk Assessment - CyberPunk',
            description: 'Identify and prioritize threats to your organization using ISO 27005 and NIST SP 800-30.',
        },
        'ransomware-readiness': {
            title: 'Ransomware Readiness Assessment - CyberPunk',
            description: 'Simulate ransomware attack vectors and strengthen defenses with MITRE ATT&CK.',
        },
        'threat-modelling': {
            title: 'Threat Modelling Services - CyberPunk',
            description: 'Use STRIDE and PASTA to analyze threats and build tailored defense strategies.',
        },
        'business-impact-analysis-bia-digital-assets-platforms': {
            title: 'Business Impact Analysis for Digital Assets - CyberPunk',
            description: 'Assess and reduce the impact of cyber incidents using ISO/IEC 27031 and NIST SP 800-34.',
        },
        'third-party-risk-management': {
            title: 'Third-Party Risk Management (TPRM) - CyberPunk',
            description: 'Evaluate risks associated with vendors and partners in your cybersecurity ecosystem.',
        },
        'data-flow-trust-boundary-assessment': {
            title: 'Data Flow & Trust Boundary Assessment - CyberPunk',
            description: 'Map and secure sensitive data flows across trust zones in your IT architecture.',
        },
        'red-teaming': {
            title: 'Red Teaming Simulation Services - CyberPunk',
            description: 'Simulate real-world attacks to test your detection and response capabilities.',
        },
        'it-environment-review': {
            title: 'IT Environment Security Review - CyberPunk',
            description: 'Assess your IT systems for vulnerabilities, compliance, and operational gaps.',
        },
        'vulnerability-assessment-penetration-testing': {
            title: 'VAPT Services - CyberPunk',
            description: 'Uncover and fix vulnerabilities via OWASP-guided penetration testing.',
        },
        'secure-configuration-review': {
            title: 'Secure Configuration Review - CyberPunk',
            description: 'Audit baseline security configurations and implement hardening best practices.',
        },
        'api-security-assessment': {
            title: 'API Security Assessment - CyberPunk',
            description: 'Test your APIs for OWASP vulnerabilities, misconfigurations, and access control flaws.',
        },
        'web-application-security-assessment': {
            title: 'Web Application Security Testing - CyberPunk',
            description: 'Assess your web apps against OWASP Top 10 and advanced exploitation techniques.',
        },
        'soc-maturity-assessment': {
            title: 'SOC Maturity Assessment - CyberPunk',
            description: 'Evaluate and enhance your Security Operations Center’s monitoring and response capabilities.',
        },
        'digital-forensic-services': {
            title: 'Digital Forensics & Incident Response - CyberPunk',
            description: 'Investigate, analyze, and respond to cyber incidents with expert digital forensics.',
        },
        'mobile-application-security-assessment': {
            title: 'Mobile App Security Assessment - CyberPunk',
            description: 'Audit iOS & Android apps for reverse engineering, insecure storage, and network risks.',
        },
        'cloud-security-assessment': {
            title: 'Cloud Security Assessment - CyberPunk',
            description: 'Audit AWS, Azure, and GCP environments for misconfigurations and compliance gaps.',
        },
        'simulate-social-engineering-attacks': {
            title: 'Social Engineering Attack Simulation - CyberPunk',
            description: 'Simulate phishing, vishing, and impersonation attacks to test human risk exposure.',
        },

    };
    return (
        metadataMap[params.slug] || {
            title: 'Service Not Found - CyberPunk',
            description: 'Requested service page does not exist.',
        }
    );
}