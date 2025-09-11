This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ cybersecurity-as-a-service.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ index.js
│  ├─ models
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ routes
│     ├─ blogRoutes.js
│     ├─ commentRoutes.js
│     └─ subscriberRoutes.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ index.js
│  ├─ models
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ routes
│     ├─ blogRoutes.js
│     ├─ commentRoutes.js
│     └─ subscriberRoutes.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  └─ subscriberController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  └─ subscriberRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ hash.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  └─ Comments.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  └─ subscriberController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  └─ subscriberRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ hash.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  └─ subscriberController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  └─ subscriberRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ hash.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```# website

```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  └─ subscriberController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  └─ Subscriber.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  └─ subscriberRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ lib
│  └─ mongodb.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ lib
│  └─ mongodb.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ lib
│  └─ mongodb.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     ├─ signup
│  │     │  └─ route.js
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ provider.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ lib
│  └─ mongodb.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ admin
│  │  └─ page.js
│  ├─ api
│  │  └─ auth
│  │     ├─ signup
│  │     │  └─ route.js
│  │     └─ [...nextauth]
│  │        └─ route.js
│  ├─ compliance-review.avif
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ provider.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  ├─ LogoutButton.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  └─ services
│     ├─ components
│     │  └─ CyberSecurityAsAService.js
│     └─ [slug]
│        ├─ components
│        │  ├─ APISecurityAssessment.js
│        │  ├─ BusinessImpactAnalysis.js
│        │  ├─ CloudSecurityAssessment.js
│        │  ├─ ComplianceReview.js
│        │  ├─ CybersecurityMaturityAssessment.js
│        │  ├─ DataFlowAndTrustAssessment.js
│        │  ├─ DataGovernanceAssessment.js
│        │  ├─ DigitalDataProtectionActCompliance.js
│        │  ├─ DigitalForensicServices.js
│        │  ├─ GapAssessment.js
│        │  ├─ InformationSecurityTraining.js
│        │  ├─ ISOReview.js
│        │  ├─ ITEnvironmentReview.js
│        │  ├─ MobileAppSecurityAssessment.js
│        │  ├─ PoliciesAndSOPsDevelopment.js
│        │  ├─ RansomwareReadiness.js
│        │  ├─ RedTeaming.js
│        │  ├─ RiskAssessment.js
│        │  ├─ SecureConfigurationReview.js
│        │  ├─ SocialEngineeringSimulation.js
│        │  ├─ SOCMaturityAssessment.js
│        │  ├─ ThirdPartyRiskManagement.js
│        │  ├─ ThreatModelling.js
│        │  ├─ VAPTAssessment.js
│        │  └─ WebAppSecurityAssessment.js
│        └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ researchController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  └─ authMiddleware.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Research.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ jsconfig.json
├─ lib
│  └─ mongodb.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ CyberPunk_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  └─ iso-27001.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ app
│  ├─ about
│  │  └─ page.js
│  ├─ admin
│  │  ├─ blogs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ dashboard
│  │  │  └─ page.js
│  │  ├─ iocs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ jobs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ layout.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ subscribers
│  │  │  └─ page.js
│  │  └─ users
│  │     └─ page.js
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ error
│  │  │  │  └─ page.js
│  │  │  ├─ signup
│  │  │  │  └─ route.js
│  │  │  ├─ verify-email
│  │  │  │  └─ route.js
│  │  │  └─ [...nextauth]
│  │  │     └─ route.js
│  │  └─ send-email
│  │     └─ route.js
│  ├─ careers
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ cart
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ contact
│  │  └─ page.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ provider.js
│  ├─ reset-password
│  │  └─ page.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  ├─ LogoutButton.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  ├─ services
│  │  ├─ components
│  │  │  └─ CyberSecurityAsAService.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ APISecurityAssessment.js
│  │     │  ├─ BusinessImpactAnalysis.js
│  │     │  ├─ CloudSecurityAssessment.js
│  │     │  ├─ ComplianceReview.js
│  │     │  ├─ CybersecurityMaturityAssessment.js
│  │     │  ├─ DataFlowAndTrustAssessment.js
│  │     │  ├─ DataGovernanceAssessment.js
│  │     │  ├─ DigitalDataProtectionActCompliance.js
│  │     │  ├─ DigitalForensicServices.js
│  │     │  ├─ GapAssessment.js
│  │     │  ├─ InformationSecurityTraining.js
│  │     │  ├─ ISOReview.js
│  │     │  ├─ ITEnvironmentReview.js
│  │     │  ├─ MobileAppSecurityAssessment.js
│  │     │  ├─ PoliciesAndSOPsDevelopment.js
│  │     │  ├─ RansomwareReadiness.js
│  │     │  ├─ RedTeaming.js
│  │     │  ├─ RiskAssessment.js
│  │     │  ├─ SecureConfigurationReview.js
│  │     │  ├─ SocialEngineeringSimulation.js
│  │     │  ├─ SOCMaturityAssessment.js
│  │     │  ├─ ThirdPartyRiskManagement.js
│  │     │  ├─ ThreatModelling.js
│  │     │  ├─ VAPTAssessment.js
│  │     │  └─ WebAppSecurityAssessment.js
│  │     ├─ page.js
│  │     └─ ServiceRenderer.js
│  └─ verify-email
│     └─ page.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ jobController.js
│  │  ├─ researchController.js
│  │  ├─ reviewController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ middleware
│  │  ├─ authMiddleware.js
│  │  └─ verifyAdmin.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Job.js
│  │  ├─ Research.js
│  │  ├─ Reviews.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ jobRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ reviewRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  ├─ uploadRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  ├─ uploads
│  │  ├─ 1754392773825-sample.avif
│  │  ├─ 1754392803390-screencapture-localhost-3000-admin-blogs-understanding-cyber-threat-intelligence-edit-2025-08-05-10_46_58.png
│  │  ├─ 1754392831476-sample1.avif
│  │  ├─ 1754393777336-sample1.avif
│  │  ├─ 1754394111850-sample1.avif
│  │  ├─ 1754394575078-sample1.avif
│  │  ├─ 1754396694956-sample1.avif
│  │  ├─ 1754452765057-sample2.avif
│  │  ├─ 1754453436836-sample1.avif
│  │  ├─ 1754453456414-sample2.avif
│  │  ├─ 1754453460767-sample1.avif
│  │  ├─ 1754453548038-sample2.avif
│  │  ├─ 1754453614080-sample2.avif
│  │  ├─ 1754453787181-sample2.avif
│  │  ├─ 1754453837163-sample2.avif
│  │  ├─ 1754455946360-sample2.avif
│  │  ├─ 1754456034629-sample1.avif
│  │  ├─ 1754466300799-sample1.avif
│  │  ├─ 1754466542390-researchimage.avif
│  │  ├─ 1754466893828-tab.avif
│  │  ├─ 1754466954629-tab.avif
│  │  ├─ 1754467165533-researchimage.avif
│  │  ├─ 1754472690584-sample2.avif
│  │  ├─ 1754480614136-tab.avif
│  │  ├─ 1754480622525-researchimage.avif
│  │  ├─ 1754480645323-researchimage.avif
│  │  ├─ 1754481009952-reimg2.avif
│  │  ├─ 1754481802382-researchimage.avif
│  │  ├─ 1754482352049-reimg2.avif
│  │  ├─ 1754482455449-sample2.avif
│  │  ├─ 1754559313052-reimg2.avif
│  │  └─ image-1754392449180-578119598.avif
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ admin
│  │  ├─ AdminLoginForm.js
│  │  ├─ AdminNavbar.js
│  │  ├─ BlogEditor.js
│  │  └─ logoutButton.js
│  ├─ Blogcard.js
│  ├─ BlogForm.js
│  ├─ Careers
│  │  ├─ JobCard.js
│  │  └─ JobDetail.js
│  ├─ CommentList.js
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ NavbarPortal.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ context
│  └─ CartContext.js
├─ hooks
│  ├─ useAOS.js
│  └─ useInView.js
├─ jsconfig.json
├─ lib
│  ├─ auth.js
│  ├─ mongodb.js
│  └─ tiptap
│     └─ CustomImage.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ About.avif
│  │  ├─ business-impact-analysis.avif
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ cybervahak_logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  ├─ iso-27001.png
│  │  └─ unemployment.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
├─ tailwind.config.js
└─ utils
   └─ constants.js

```# cyberpunk-sleek-enterprise-website-

```
CyberPunk
├─ .dockerignore
├─ app
│  ├─ about
│  │  └─ page.js
│  ├─ admin
│  │  ├─ blogs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ dashboard
│  │  │  └─ page.js
│  │  ├─ iocs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ jobs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ layout.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ subscribers
│  │  │  └─ page.js
│  │  └─ users
│  │     └─ page.js
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ error
│  │  │  │  ├─ ErrorPageClient.js
│  │  │  │  └─ page.js
│  │  │  ├─ signup
│  │  │  │  └─ route.js
│  │  │  ├─ verify-email
│  │  │  │  └─ route.js
│  │  │  └─ [...nextauth]
│  │  │     └─ route.js
│  │  └─ send-email
│  │     └─ route.js
│  ├─ careers
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ cart
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ contact
│  │  └─ page.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ provider.js
│  ├─ reset-password
│  │  ├─ page.js
│  │  └─ ResetPageClient.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  ├─ LogoutButton.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  ├─ services
│  │  ├─ components
│  │  │  └─ CyberSecurityAsAService.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ APISecurityAssessment.js
│  │     │  ├─ BusinessImpactAnalysis.js
│  │     │  ├─ CloudSecurityAssessment.js
│  │     │  ├─ ComplianceReview.js
│  │     │  ├─ CybersecurityMaturityAssessment.js
│  │     │  ├─ DataFlowAndTrustAssessment.js
│  │     │  ├─ DataGovernanceAssessment.js
│  │     │  ├─ DigitalDataProtectionActCompliance.js
│  │     │  ├─ DigitalForensicServices.js
│  │     │  ├─ GapAssessment.js
│  │     │  ├─ InformationSecurityTraining.js
│  │     │  ├─ ISOReview.js
│  │     │  ├─ ITEnvironmentReview.js
│  │     │  ├─ MobileAppSecurityAssessment.js
│  │     │  ├─ PoliciesAndSOPsDevelopment.js
│  │     │  ├─ RansomwareReadiness.js
│  │     │  ├─ RedTeaming.js
│  │     │  ├─ RiskAssessment.js
│  │     │  ├─ SecureConfigurationReview.js
│  │     │  ├─ SocialEngineeringSimulation.js
│  │     │  ├─ SOCMaturityAssessment.js
│  │     │  ├─ ThirdPartyRiskManagement.js
│  │     │  ├─ ThreatModelling.js
│  │     │  ├─ VAPTAssessment.js
│  │     │  └─ WebAppSecurityAssessment.js
│  │     ├─ page.js
│  │     └─ ServiceRenderer.js
│  └─ verify-email
│     ├─ page.js
│     └─ VerifyEmailClient.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ jobController.js
│  │  ├─ researchController.js
│  │  ├─ reviewController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ Dockerfile
│  ├─ middleware
│  │  ├─ authMiddleware.js
│  │  └─ verifyAdmin.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Job.js
│  │  ├─ Research.js
│  │  ├─ Reviews.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ jobRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ reviewRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  ├─ uploadRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  ├─ uploads
│  │  ├─ 1754392773825-sample.avif
│  │  ├─ 1754392803390-screencapture-localhost-3000-admin-blogs-understanding-cyber-threat-intelligence-edit-2025-08-05-10_46_58.png
│  │  ├─ 1754392831476-sample1.avif
│  │  ├─ 1754393777336-sample1.avif
│  │  ├─ 1754394111850-sample1.avif
│  │  ├─ 1754394575078-sample1.avif
│  │  ├─ 1754396694956-sample1.avif
│  │  ├─ 1754452765057-sample2.avif
│  │  ├─ 1754453436836-sample1.avif
│  │  ├─ 1754453456414-sample2.avif
│  │  ├─ 1754453460767-sample1.avif
│  │  ├─ 1754453548038-sample2.avif
│  │  ├─ 1754453614080-sample2.avif
│  │  ├─ 1754453787181-sample2.avif
│  │  ├─ 1754453837163-sample2.avif
│  │  ├─ 1754455946360-sample2.avif
│  │  ├─ 1754456034629-sample1.avif
│  │  ├─ 1754466300799-sample1.avif
│  │  ├─ 1754466542390-researchimage.avif
│  │  ├─ 1754466893828-tab.avif
│  │  ├─ 1754466954629-tab.avif
│  │  ├─ 1754467165533-researchimage.avif
│  │  ├─ 1754472690584-sample2.avif
│  │  ├─ 1754480614136-tab.avif
│  │  ├─ 1754480622525-researchimage.avif
│  │  ├─ 1754480645323-researchimage.avif
│  │  ├─ 1754481009952-reimg2.avif
│  │  ├─ 1754481802382-researchimage.avif
│  │  ├─ 1754482352049-reimg2.avif
│  │  ├─ 1754482455449-sample2.avif
│  │  ├─ 1754559313052-reimg2.avif
│  │  └─ image-1754392449180-578119598.avif
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ admin
│  │  ├─ AdminLoginForm.js
│  │  ├─ AdminNavbar.js
│  │  ├─ BlogEditor.js
│  │  └─ logoutButton.js
│  ├─ Blogcard.js
│  ├─ BlogForm.js
│  ├─ Careers
│  │  ├─ JobCard.js
│  │  └─ JobDetail.js
│  ├─ CommentList.js
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ NavbarPortal.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ context
│  └─ CartContext.js
├─ docker-compose.yml
├─ Dockerfile
├─ hooks
│  ├─ useAOS.js
│  └─ useInView.js
├─ jsconfig.json
├─ lib
│  ├─ auth.js
│  ├─ mongodb.js
│  └─ tiptap
│     └─ CustomImage.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ About.avif
│  │  ├─ business-impact-analysis.avif
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ cybervahak-logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  ├─ iso-27001.png
│  │  └─ unemployment.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
├─ tailwind.config.js
└─ utils
   └─ constants.js

```
```
CyberPunk
├─ .dockerignore
├─ app
│  ├─ about
│  │  └─ page.js
│  ├─ admin
│  │  ├─ blogs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ dashboard
│  │  │  └─ page.js
│  │  ├─ iocs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ jobs
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ layout.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  ├─ create
│  │  │  │  └─ page.js
│  │  │  ├─ page.js
│  │  │  └─ [slug]
│  │  │     ├─ edit
│  │  │     │  └─ page.js
│  │  │     └─ page.js
│  │  ├─ subscribers
│  │  │  └─ page.js
│  │  └─ users
│  │     └─ page.js
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ error
│  │  │  │  ├─ ErrorPageClient.js
│  │  │  │  └─ page.js
│  │  │  ├─ signup
│  │  │  │  └─ route.js
│  │  │  ├─ verify-email
│  │  │  │  └─ route.js
│  │  │  └─ [...nextauth]
│  │  │     └─ route.js
│  │  └─ send-email
│  │     └─ route.js
│  ├─ careers
│  │  ├─ page.js
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ cart
│  │  └─ page.js
│  ├─ compliance-review.avif
│  ├─ contact
│  │  └─ page.js
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.js
│  ├─ page.js
│  ├─ products
│  │  └─ [slug]
│  │     └─ page.js
│  ├─ provider.js
│  ├─ reset-password
│  │  ├─ page.js
│  │  └─ ResetPageClient.js
│  ├─ resources
│  │  ├─ iocs
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  ├─ page.js
│  │  ├─ research
│  │  │  └─ [slug]
│  │  │     └─ page.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ Comments.js
│  │     │  ├─ LogoutButton.js
│  │     │  └─ SignupModal.js
│  │     └─ page.js
│  ├─ services
│  │  ├─ components
│  │  │  └─ CyberSecurityAsAService.js
│  │  └─ [slug]
│  │     ├─ components
│  │     │  ├─ APISecurityAssessment.js
│  │     │  ├─ BusinessImpactAnalysis.js
│  │     │  ├─ CloudSecurityAssessment.js
│  │     │  ├─ ComplianceReview.js
│  │     │  ├─ CybersecurityMaturityAssessment.js
│  │     │  ├─ DataFlowAndTrustAssessment.js
│  │     │  ├─ DataGovernanceAssessment.js
│  │     │  ├─ DigitalDataProtectionActCompliance.js
│  │     │  ├─ DigitalForensicServices.js
│  │     │  ├─ GapAssessment.js
│  │     │  ├─ InformationSecurityTraining.js
│  │     │  ├─ ISOReview.js
│  │     │  ├─ ITEnvironmentReview.js
│  │     │  ├─ MobileAppSecurityAssessment.js
│  │     │  ├─ PoliciesAndSOPsDevelopment.js
│  │     │  ├─ RansomwareReadiness.js
│  │     │  ├─ RedTeaming.js
│  │     │  ├─ RiskAssessment.js
│  │     │  ├─ SecureConfigurationReview.js
│  │     │  ├─ SocialEngineeringSimulation.js
│  │     │  ├─ SOCMaturityAssessment.js
│  │     │  ├─ ThirdPartyRiskManagement.js
│  │     │  ├─ ThreatModelling.js
│  │     │  ├─ VAPTAssessment.js
│  │     │  └─ WebAppSecurityAssessment.js
│  │     ├─ page.js
│  │     └─ ServiceRenderer.js
│  └─ verify-email
│     ├─ page.js
│     └─ VerifyEmailClient.js
├─ backend
│  ├─ config
│  │  └─ db.js
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ blogController.js
│  │  ├─ commentController.js
│  │  ├─ iocController.js
│  │  ├─ jobController.js
│  │  ├─ researchController.js
│  │  ├─ reviewController.js
│  │  ├─ subscriberController.js
│  │  └─ userController.js
│  ├─ Dockerfile
│  ├─ middleware
│  │  ├─ authMiddleware.js
│  │  └─ verifyAdmin.js
│  ├─ models
│  │  ├─ Admin.js
│  │  ├─ Blog.js
│  │  ├─ Comment.js
│  │  ├─ IoC.js
│  │  ├─ Job.js
│  │  ├─ Research.js
│  │  ├─ Reviews.js
│  │  ├─ Subscriber.js
│  │  └─ User.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ authRoutes.js
│  │  ├─ blogRoutes.js
│  │  ├─ commentRoutes.js
│  │  ├─ debugRoutes.js
│  │  ├─ iocRoutes.js
│  │  ├─ jobRoutes.js
│  │  ├─ researchRoutes.js
│  │  ├─ reviewRoutes.js
│  │  ├─ subscriberRoutes.js
│  │  ├─ uploadRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  ├─ test-db.js
│  ├─ uploads
│  │  ├─ 1754392773825-sample.avif
│  │  ├─ 1754392803390-screencapture-localhost-3000-admin-blogs-understanding-cyber-threat-intelligence-edit-2025-08-05-10_46_58.png
│  │  ├─ 1754392831476-sample1.avif
│  │  ├─ 1754393777336-sample1.avif
│  │  ├─ 1754394111850-sample1.avif
│  │  ├─ 1754394575078-sample1.avif
│  │  ├─ 1754396694956-sample1.avif
│  │  ├─ 1754452765057-sample2.avif
│  │  ├─ 1754453436836-sample1.avif
│  │  ├─ 1754453456414-sample2.avif
│  │  ├─ 1754453460767-sample1.avif
│  │  ├─ 1754453548038-sample2.avif
│  │  ├─ 1754453614080-sample2.avif
│  │  ├─ 1754453787181-sample2.avif
│  │  ├─ 1754453837163-sample2.avif
│  │  ├─ 1754455946360-sample2.avif
│  │  ├─ 1754456034629-sample1.avif
│  │  ├─ 1754466300799-sample1.avif
│  │  ├─ 1754466542390-researchimage.avif
│  │  ├─ 1754466893828-tab.avif
│  │  ├─ 1754466954629-tab.avif
│  │  ├─ 1754467165533-researchimage.avif
│  │  ├─ 1754472690584-sample2.avif
│  │  ├─ 1754480614136-tab.avif
│  │  ├─ 1754480622525-researchimage.avif
│  │  ├─ 1754480645323-researchimage.avif
│  │  ├─ 1754481009952-reimg2.avif
│  │  ├─ 1754481802382-researchimage.avif
│  │  ├─ 1754482352049-reimg2.avif
│  │  ├─ 1754482455449-sample2.avif
│  │  ├─ 1754559313052-reimg2.avif
│  │  └─ image-1754392449180-578119598.avif
│  └─ utils
│     ├─ hash.js
│     └─ mailer.js
├─ components
│  ├─ admin
│  │  ├─ AdminLoginForm.js
│  │  ├─ AdminNavbar.js
│  │  ├─ BlogEditor.js
│  │  └─ logoutButton.js
│  ├─ Blogcard.js
│  ├─ BlogForm.js
│  ├─ Careers
│  │  ├─ JobCard.js
│  │  └─ JobDetail.js
│  ├─ CommentList.js
│  ├─ ContactForm.js
│  ├─ CustomerProblem.js
│  ├─ Footer.js
│  ├─ Hero.js
│  ├─ HowItWorks.js
│  ├─ Navbar.js
│  ├─ NavbarPortal.js
│  ├─ SuccessMetrics.js
│  ├─ Testimonials.js
│  └─ WhatWeOffer.js
├─ context
│  └─ CartContext.js
├─ docker-compose.yml
├─ Dockerfile
├─ hooks
│  ├─ useAOS.js
│  └─ useInView.js
├─ jsconfig.json
├─ lib
│  ├─ auth.js
│  ├─ mongodb.js
│  └─ tiptap
│     └─ CustomImage.js
├─ metadata.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animations
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ About.avif
│  │  ├─ business-impact-analysis.avif
│  │  ├─ compliance-review.png
│  │  ├─ cta-handshake.jpg
│  │  ├─ cybervahak-logo.png
│  │  ├─ facebook.png
│  │  ├─ google.png
│  │  ├─ icon-dashboard.png
│  │  ├─ icon-evaluation.png
│  │  ├─ icon-governance.png
│  │  ├─ icon-handholding.png
│  │  ├─ icon-risk.png
│  │  ├─ icon-war-room.png
│  │  ├─ image1.png
│  │  ├─ iso-27001.png
│  │  └─ unemployment.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ styles
│  └─ animations.css
├─ tailwind.config.js
└─ utils
   └─ constants.js

```