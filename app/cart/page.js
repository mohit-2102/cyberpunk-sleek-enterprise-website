'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaTrash } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// ✅ Dynamically import react-select to avoid hydration mismatch
const Select = dynamic(() => import('react-select'), { ssr: false });

export default function CartPage() {
  const { cartItems, removeFromCart, addToCart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    selectedService: '',
    description: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const availableServices = [
    { slug: 'api-security-assessment', name: 'API Security Assessment' },
    { slug: 'business-impact-analysis-bia', name: 'Business Impact Analysis (BIA)' },
    { slug: 'cloud-security-assessment', name: 'Cloud Security Assessment' },
    { slug: 'compliance-review-audit', name: 'Compliance Review/ Audit' },
    { slug: 'cybersecurity-maturity-assessment', name: 'Cybersecurity Maturity Assessment' },
    { slug: 'data-flow-trust-boundary-assessment', name: 'Data Flow mapping and Trust Boundary Assessment' },
    { slug: 'data-governance-assessment', name: 'Data Governance Assessment' },
    { slug: 'digital-forensic-services', name: 'Digital Forensic Services' },
    { slug: 'digital-personal-data-protection-act-compliance', name: 'Compliance to The Digital Personal Data Protection Act of 2023' },
    { slug: 'gap-assessment-as-per-the-regulatory-standards-and-guidelines', name: 'Gap Assessment as per the Regulatory Standards and guidelines' },
    { slug: 'information-security-training', name: 'Information security Training and Awareness' },
    { slug: 'it-environment-review-iso27001', name: 'IT environment Compliance Review and Implementation with ISO/IEC 27001:2022' },
    { slug: 'it-environment-review', name: 'IT Environment Review' },
    { slug: 'mobile-application-security-assessment', name: 'Mobile Application Security Assessment' },
    { slug: 'policies-and-sops-development', name: 'Policies/SOP’s Development' },
    { slug: 'ransomware-readiness', name: 'Ransomware Readiness' },
    { slug: 'red-teaming', name: 'Red Teaming' },
    { slug: 'risk-assessment', name: 'Risk Assessment' },
    { slug: 'secure-configuration-review', name: 'Secure Configuration (Baseline) Review and Documentation' },
    { slug: 'simulate-social-engineering-attacks', name: 'Simulate Social Engineering Attacks' },
    { slug: 'soc-maturity-assessment', name: 'Security operations center (SOC) Maturity Assessment' },
    { slug: 'third-party-risk-management', name: 'Third-Party Risk Management (TPRM)' },
    { slug: 'threat-modelling', name: 'Threat Modelling' },
    { slug: 'vulnerability-assessment-penetration-testing', name: 'Vulnerability Assessment and Penetration Testing (VAPT)' },
    { slug: 'web-application-security-assessment', name: 'Web Application Security Assessment' },
  ];

  const serviceOptions = availableServices.filter(services => !cartItems.some(item => item.slug === services.slug))
  .map(service => ({
    value: service.slug,
    label: service.name,
  }));

  const handleAddService = () => {
  if (selectedOption && !cartItems.some(item => item.slug === selectedOption.value)) {
    const service = availableServices.find(s => s.slug === selectedOption.value);
    addToCart(service);
    setSelectedOption(null); // ✅ Clears the dropdown
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email regex check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setShowModal(true);
  };

  const confirmSend = async () => {
    setShowModal(false);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, cartItems }),
      });

      if (!res.ok) throw new Error('Failed to send request');

      alert('Request sent successfully!');
    } catch (error) {
      console.error(error);
      alert('There was an error sending your request.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 px-3 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white p-6 mb-6 border border-gray-200 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Service Request</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2"
                value={formData.email || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
              {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                <p className="text-red-500 text-sm">Invalid email format</p>
              )}
            </div>

            {/* Organization */}
            <div>
              <label className="block font-semibold mb-1">Organization</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2"
                value={formData.organization}
                onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
                required
              />
            </div>

            {/* Optional Description */}
            <div>
              <label className="block font-semibold mb-1">Description (Optional)</label>
              <textarea
                className="w-full border rounded px-3 py-2"
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Add any specific notes or requirements..."
              />
            </div>

            {/* Selected Cart Items */}
            <div>
              <label className="block font-semibold mb-1">Selected Services</label>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">No services selected yet.</p>
              ) : (
                <ul className="space-y-2">
                  {cartItems.map((item) => (
                    <li key={item.slug} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span>{item.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.slug)}
                        className="text-red-500 cursor-pointer hover:underline text-sm"
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Add More Services with React Select */}
            <div>
              <label className="block font-semibold mb-1">Add More Services</label>
              <div className="flex flex-col items-center sm:flex-row gap-2">

              {/* Select */}
              <div className='w-full flex-1'>

              <Select
                options={serviceOptions}
                placeholder="Select a service"
                className="flex-1"
                classNamePrefix="react-select"
                isSearchable={true}
                value={selectedOption} // ✅ controlled value
                onChange={(option) => setSelectedOption(option)} // ✅ just set, don't add
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: '#d1d5db',
                    borderRadius: '0.375rem',
                    padding: '2px',
                    minHeight: '40px',
                  }),
                  menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
              </div>
            
              {/* ✅ Add Button */}
              <button
                type="button"
                onClick={handleAddService}
                className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add
              </button>
                </div>
            </div>


            {/* Submit */}
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Submit Request
            </button>
          </form>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4 ">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Confirm Your Request</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Organization:</strong> {formData.organization}</p>
            {formData.description && (
              <p><strong>Description:</strong> {formData.description}</p>
            )}
            <div className="mt-3">
              <strong>Services:</strong>
              <ul className="list-disc ml-6 mt-1">
                {cartItems.map(item => (
                  <li key={item.slug}>{item.name}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmSend}
                className="px-4 py-2 bg-green-600 text-white cursor-pointer rounded hover:bg-green-700"
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}



// 'use client';

// import { useState } from 'react';
// import { useCart } from '@/context/CartContext';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { FaTrash } from 'react-icons/fa';

// export default function CartPage() {
//   const { cartItems, removeFromCart, addToCart } = useCart();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     organization: '',
//     selectedService: '',
//     description: '',
//   });

//   const [showModal, setShowModal] = useState(false);

//   const availableServices = [
//     { slug: 'api-security-assessment', name: 'API Security Assessment' },
//     { slug: 'business-impact-analysis-bia', name: 'Business Impact Analysis (BIA)' },
//     { slug: 'cloud-security-assessment', name: 'Cloud Security Assessment' },
//     { slug: 'compliance-review-audit', name: 'Compliance Review/ Audit' },
//     { slug: 'cybersecurity-maturity-assessment', name: 'Cybersecurity Maturity Assessment' },
//     { slug: 'data-flow-trust-boundary-assessment', name: 'Data Flow mapping and Trust Boundary Assessment' },
//     { slug: 'data-governance-assessment', name: 'Data Governance Assessment' },
//     { slug: 'digital-forensic-services', name: 'Digital Forensic Services' },
//     { slug: 'digital-personal-data-protection-act-compliance', name: 'Compliance to The Digital Personal Data Protection Act of 2023' },
//     { slug: 'gap-assessment-as-per-the-regulatory-standards-and-guidelines', name: 'Gap Assessment as per the Regulatory Standards and guidelines' },
//     { slug: 'information-security-training', name: 'Information security Training and Awareness' },
//     { slug: 'it-environment-review-iso27001', name: 'IT environment Compliance Review and Implementation with ISO/IEC 27001:2022' },
//     { slug: 'it-environment-review', name: 'IT Environment Review' },
//     { slug: 'mobile-application-security-assessment', name: 'Mobile Application Security Assessment' },
//     { slug: 'policies-and-sops-development', name: 'Policies/SOP’s Development' },
//     { slug: 'ransomware-readiness', name: 'Ransomware Readiness' },
//     { slug: 'red-teaming', name: 'Red Teaming' },
//     { slug: 'risk-assessment', name: 'Risk Assessment' },
//     { slug: 'secure-configuration-review', name: 'Secure Configuration (Baseline) Review and Documentation' },
//     { slug: 'simulate-social-engineering-attacks', name: 'Simulate Social Engineering Attacks' },
//     { slug: 'soc-maturity-assessment', name: 'Security operations center (SOC) Maturity Assessment' },
//     { slug: 'third-party-risk-management', name: 'Third-Party Risk Management (TPRM)' },
//     { slug: 'threat-modelling', name: 'Threat Modelling' },
//     { slug: 'vulnerability-assessment-penetration-testing', name: 'Vulnerability Assessment and Penetration Testing (VAPT)' },
//     { slug: 'web-application-security-assessment', name: 'Web Application Security Assessment' },
//   ];

//   const handleAddService = () => {
//     if (formData.selectedService && !cartItems.some(item => item.slug === formData.selectedService)) {
//       const service = availableServices.find(s => s.slug === formData.selectedService);
//       addToCart(service);
//       setFormData(prev => ({ ...prev, selectedService: '' }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(formData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     setShowModal(true);
//   };

//   const confirmSend = async () => {
//     setShowModal(false);
//     try {
//       const res = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...formData, cartItems }),
//       });

//       if (!res.ok) throw new Error('Failed to send request');

//       alert('Request sent successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('There was an error sending your request.');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 px-4 sm:px-6">
//         <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow">
//           <h1 className="text-xl sm:text-2xl font-bold mb-6">Service Request</h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block font-semibold mb-1">Name</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.name}
//                 onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block font-semibold mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.email || ''}
//                 onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//                 required
//               />
//               {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
//                 <p className="text-red-500 text-sm">Invalid email format</p>
//               )}
//             </div>

//             {/* Organization */}
//             <div>
//               <label className="block font-semibold mb-1">Organization</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.organization}
//                 onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
//                 required
//               />
//             </div>

//             {/* Optional Description */}
//             <div>
//               <label className="block font-semibold mb-1">Description (Optional)</label>
//               <textarea
//                 className="w-full border rounded px-3 py-2"
//                 rows="3"
//                 value={formData.description}
//                 onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
//                 placeholder="Add any specific notes or requirements..."
//               />
//             </div>

//             {/* Selected Cart Items */}
//             <div>
//               <label className="block font-semibold mb-1">Selected Services</label>
//               {cartItems.length === 0 ? (
//                 <p className="text-gray-500">No services selected yet.</p>
//               ) : (
//                 <ul className="space-y-2">
//                   {cartItems.map((item) => (
//                     <li key={item.slug} className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-2 rounded gap-2">
//                       <span>{item.name}</span>
//                       <button
//                         type="button"
//                         onClick={() => removeFromCart(item.slug)}
//                         className="text-red-500 cursor-pointer hover:underline text-sm flex items-center gap-1"
//                       >
//                         <FaTrash />
//                         <span className="sm:hidden"></span>
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Add More Services */}
//             <div>
//               <label className="block font-semibold mb-1">Add More Services</label>

//               {/* Mobile View: Native Select */}
//               <div className="sm:hidden">
//                 <select
//                   className="border rounded px-3 py-2 w-full"
//                   value={formData.selectedService}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, selectedService: e.target.value }))
//                   }
//                 >
//                   <option value="">Select a service</option>
//                   {availableServices.map((service) => (
//                     <option key={service.slug} value={service.slug}>
//                       {service.name}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   type="button"
//                   onClick={handleAddService}
//                   className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
//                 >
//                   Add
//                 </button>
//               </div>
                
//               {/* Desktop View: Styled Custom Dropdown */}
//               <div className="hidden sm:flex gap-2">
//                 <select
//                   className="border rounded px-3 py-2 flex-1"
//                   value={formData.selectedService}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, selectedService: e.target.value }))
//                   }
//                 >
//                   <option value="">Select a service</option>
//                   {availableServices.map((service) => (
//                     <option key={service.slug} value={service.slug}>
//                       {service.name}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   type="button"
//                   onClick={handleAddService}
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>


//             {/* Submit */}
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-lg sm:text-xl font-bold mb-4">Confirm Your Request</h2>
//             <p><strong>Name:</strong> {formData.name}</p>
//             <p><strong>Email:</strong> {formData.email}</p>
//             <p><strong>Organization:</strong> {formData.organization}</p>
//             {formData.description && (
//               <p><strong>Description:</strong> {formData.description}</p>
//             )}
//             <div className="mt-3">
//               <strong>Services:</strong>
//               <ul className="list-disc ml-6 mt-1">
//                 {cartItems.map(item => (
//                   <li key={item.slug}>{item.name}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400 w-full sm:w-auto"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmSend}
//                 className="px-4 py-2 bg-green-600 text-white cursor-pointer rounded hover:bg-green-700 w-full sm:w-auto"
//               >
//                 Send Request
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import { useCart } from '@/context/CartContext';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { FaTrash } from 'react-icons/fa';

// export default function CartPage() {
//   const { cartItems, removeFromCart, addToCart } = useCart();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     organization: '',
//     selectedService: '',
//     description: '',
//   });

//   const [showModal, setShowModal] = useState(false);

//   const availableServices = [
//     { slug: 'api-security-assessment', name: 'API Security Assessment' },
//     { slug: 'business-impact-analysis-bia', name: 'Business Impact Analysis (BIA)' },
//     { slug: 'cloud-security-assessment', name: 'Cloud Security Assessment' },
//     { slug: 'compliance-review-audit', name: 'Compliance Review/ Audit' },
//     { slug: 'cybersecurity-maturity-assessment', name: 'Cybersecurity Maturity Assessment' },
//     { slug: 'data-flow-trust-boundary-assessment', name: 'Data Flow mapping and Trust Boundary Assessment' },
//     { slug: 'data-governance-assessment', name: 'Data Governance Assessment' },
//     { slug: 'digital-forensic-services', name: 'Digital Forensic Services' },
//     { slug: 'digital-personal-data-protection-act-compliance', name: 'Compliance to The Digital Personal Data Protection Act of 2023' },
//     { slug: 'gap-assessment-as-per-the-regulatory-standards-and-guidelines', name: 'Gap Assessment as per the Regulatory Standards and guidelines' },
//     { slug: 'information-security-training', name: 'Information security Training and Awareness' },
//     { slug: 'it-environment-review-iso27001', name: 'IT environment Compliance Review and Implementation with ISO/IEC 27001:2022' },
//     { slug: 'it-environment-review', name: 'IT Environment Review' },
//     { slug: 'mobile-application-security-assessment', name: 'Mobile Application Security Assessment' },
//     { slug: 'policies-and-sops-development', name: 'Policies/SOP’s Development' },
//     { slug: 'ransomware-readiness', name: 'Ransomware Readiness' },
//     { slug: 'red-teaming', name: 'Red Teaming' },
//     { slug: 'risk-assessment', name: 'Risk Assessment' },
//     { slug: 'secure-configuration-review', name: 'Secure Configuration (Baseline) Review and Documentation' },
//     { slug: 'simulate-social-engineering-attacks', name: 'Simulate Social Engineering Attacks' },
//     { slug: 'soc-maturity-assessment', name: 'Security operations center (SOC) Maturity Assessment' },
//     { slug: 'third-party-risk-management', name: 'Third-Party Risk Management (TPRM)' },
//     { slug: 'threat-modelling', name: 'Threat Modelling' },
//     { slug: 'vulnerability-assessment-penetration-testing', name: 'Vulnerability Assessment and Penetration Testing (VAPT)' },
//     { slug: 'web-application-security-assessment', name: 'Web Application Security Assessment' },
//   ];

//   const handleAddService = () => {
//     if (formData.selectedService && !cartItems.some(item => item.slug === formData.selectedService)) {
//       const service = availableServices.find(s => s.slug === formData.selectedService);
//       addToCart(service);
//       setFormData(prev => ({ ...prev, selectedService: '' }));
//     }
//   };

 

// const handleSubmit = (e) => {
//   e.preventDefault();
//    // Email regex check
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(formData.email)) {
//     alert("Please enter a valid email address.");
//     return;
//   }
//   setShowModal(true); // Step 1: open modal
// };

// const confirmSend = async () => {
//   setShowModal(false);

//   try {
//     const res = await fetch('/api/send-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ ...formData, cartItems }),
//     });

//     if (!res.ok) throw new Error('Failed to send request');

//     alert('Request sent successfully!');
//   } catch (error) {
//     console.error(error);
//     alert('There was an error sending your request.');
//   }
// };



//   return (
//     <>
//       <Navbar />
//       <main className="pt-24 px-6">
//         <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
//           <h1 className="text-2xl font-bold mb-6">Service Request</h1>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name */}
//             <div>
//               <label className="block font-semibold mb-1">Name</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.name}
//                 onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block font-semibold mb-1">Email</label>
//               <input
//                 type="email"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.email || ''}
//                 onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
//                 required
//               />
//               {formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
//               <p className="text-red-500 text-sm">Invalid email format</p>
//             )}
//             </div>

//             {/* Organization */}
//             <div>
//               <label className="block font-semibold mb-1">Organization</label>
//               <input
//                 type="text"
//                 className="w-full border rounded px-3 py-2"
//                 value={formData.organization}
//                 onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
//                 required
//               />
//             </div>

//             {/* Optional Description */}
//             <div>
//               <label className="block font-semibold mb-1">Description (Optional)</label>
//               <textarea
//                 className="w-full border rounded px-3 py-2"
//                 rows="3"
//                 value={formData.description}
//                 onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
//                 placeholder="Add any specific notes or requirements..."
//               />
//             </div>

//             {/* Selected Cart Items */}
//             <div>
//               <label className="block font-semibold mb-1">Selected Services</label>
//               {cartItems.length === 0 ? (
//                 <p className="text-gray-500">No services selected yet.</p>
//               ) : (
//                 <ul className="space-y-2">
//                   {cartItems.map((item) => (
//                     <li key={item.slug} className="flex items-center justify-between bg-gray-100 p-2 rounded">
//                       <span>{item.name}</span>
//                       <button
//                         type="button"
//                         onClick={() => removeFromCart(item.slug)}
//                         className="text-red-500 cursor-pointer hover:underline text-sm"
//                       >
//                         <FaTrash />
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             {/* Add More Services */}
//             <div>
//               <label className="block font-semibold mb-1">Add More Services</label>
//               <div className="flex gap-2">
//                 <select
//                   className="border rounded px-3 py-2 flex-1"
//                   value={formData.selectedService}
//                   onChange={(e) => setFormData(prev => ({ ...prev, selectedService: e.target.value }))}
//                 >
//                   <option value="">Select a service</option>
//                   {availableServices.map(service => (
//                     <option key={service.slug} value={service.slug}>
//                       {service.name}
//                     </option>
//                   ))}
//                 </select>
//                 <button
//                   type="button"
//                   onClick={handleAddService}
//                   className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
//             >
//               Submit Request
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
//             <h2 className="text-xl font-bold mb-4">Confirm Your Request</h2>
//             <p><strong>Name:</strong> {formData.name}</p>
//             <p><strong>Email:</strong> {formData.email}</p>
//             <p><strong>Organization:</strong> {formData.organization}</p>
//             {formData.description && (
//               <p><strong>Description:</strong> {formData.description}</p>
//             )}
//             <div className="mt-3">
//               <strong>Services:</strong>
//               <ul className="list-disc ml-6 mt-1">
//                 {cartItems.map(item => (
//                   <li key={item.slug}>{item.name}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                   onClick={confirmSend}
//                   className="px-4 py-2 bg-green-600 text-white cursor-pointer rounded hover:bg-green-700"
//                 >
//                   Send Request
//                 </button>

//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// }
