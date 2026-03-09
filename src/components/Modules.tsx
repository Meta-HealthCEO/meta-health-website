import { useState } from 'react';

const tabs = ['Practice Management', 'Hospital Management', 'Billing & Revenue', 'Clinical', 'AI & Analytics'] as const;

type Tab = typeof tabs[number];

const moduleGroups: Record<Tab, { name: string; desc: string }[]> = {
  'Practice Management': [
    { name: 'Electronic Health Records', desc: 'Comprehensive patient records with full clinical history, allergies, immunisations, and family history' },
    { name: 'Appointment Scheduling', desc: 'Multi-provider calendar with online booking, automated reminders, and waitlist management' },
    { name: 'Patient Registration', desc: 'Digital intake forms, ID verification, medical aid validation, and demographic capture' },
    { name: 'Document Management', desc: 'Digital filing, OCR scanning, e-signatures, and secure document sharing with patients' },
    { name: 'Patient Portal', desc: 'Self-service portal for appointments, results, scripts, messaging, and health records' },
    { name: 'Referral Management', desc: 'Electronic referrals with tracking, status updates, and referring provider communication' },
    { name: 'Multi-Location Management', desc: 'Centralised control across branches with location-specific scheduling and reporting' },
    { name: 'Staff & Role Management', desc: 'Granular role-based access control, staff scheduling, and credential tracking' },
    { name: 'Task Management', desc: 'Clinical and administrative task assignment, tracking, and escalation workflows' },
    { name: 'Communication Hub', desc: 'Secure messaging, SMS, email, and fax — all from one inbox with audit trails' },
  ],
  'Hospital Management': [
    { name: 'Admission, Discharge & Transfer', desc: 'Full ADT workflow with bed assignment, transfer orders, and discharge planning' },
    { name: 'Bed & Ward Management', desc: 'Real-time bed occupancy dashboard, bed turnover tracking, and ward allocation' },
    { name: 'Operating Theatre Management', desc: 'Theatre scheduling, surgical checklists, anaesthesia records, and post-op tracking' },
    { name: 'Pharmacy & Formulary', desc: 'Drug dispensing, inventory control, drug interaction checks, and formulary management' },
    { name: 'Nursing Workflows', desc: 'Nursing assessments, care plans, medication administration records, and shift handover' },
    { name: 'ICU & Critical Care', desc: 'High-acuity monitoring, ventilator tracking, fluid balance, and critical care scoring' },
    { name: 'Radiology (RIS/PACS)', desc: 'Imaging orders, radiology worklists, DICOM viewer integration, and report distribution' },
    { name: 'Laboratory Information System', desc: 'Lab orders, specimen tracking, results management, and reference range flagging' },
    { name: 'Blood Bank Management', desc: 'Blood product inventory, cross-matching, transfusion tracking, and donor management' },
    { name: 'Dietary & Nutrition', desc: 'Patient meal planning, dietary restrictions, nutritional assessment, and kitchen management' },
    { name: 'Mortuary Management', desc: 'Decedent registration, post-mortem scheduling, release management, and compliance' },
    { name: 'Emergency Department', desc: 'Triage workflows, trauma tracking, capacity management, and ambulance integration' },
  ],
  'Billing & Revenue': [
    { name: 'Medical Aid Billing', desc: 'Electronic claims submission to Discovery, Momentum, Bonitas, GEMS, and all SA medical aids' },
    { name: 'ICD-10 & CPT Coding', desc: 'AI-assisted diagnosis and procedure coding with validation and compliance checks' },
    { name: 'Real-Time Eligibility', desc: 'Instant medical aid membership verification, benefit checks, and pre-authorisation' },
    { name: 'Invoicing & Accounts', desc: 'Automated invoice generation, statement runs, and patient account management' },
    { name: 'Payment Processing', desc: 'Card payments, EFT, debit orders, and payment plan management with reconciliation' },
    { name: 'Revenue Cycle Management', desc: 'End-to-end claim lifecycle tracking from submission to remittance with rejection management' },
    { name: 'Accounts Receivable', desc: 'Aging analysis, debt collection workflows, write-off management, and bad debt tracking' },
    { name: 'Financial Reporting', desc: 'Revenue dashboards, provider production reports, payer mix analysis, and trend forecasting' },
    { name: 'Billing Macros', desc: 'Pre-configured billing templates for common procedures to speed up charge capture' },
    { name: 'Bank Reconciliation', desc: 'Automated matching of payments received against outstanding accounts and claims' },
  ],
  'Clinical': [
    { name: 'Clinical Notes & SOAP', desc: 'Structured and free-text clinical documentation with specialty-specific templates' },
    { name: 'e-Prescribing', desc: 'Electronic prescriptions with drug interaction checking, formulary lookup, and pharmacy integration' },
    { name: 'Clinical Templates', desc: 'Customisable templates for consultations, procedures, assessments, and specialty workflows' },
    { name: 'Vitals & Observations', desc: 'Vital sign recording, trending, and automated alerting for out-of-range values' },
    { name: 'Lab Orders & Results', desc: 'Electronic lab ordering with Ampath/Pathcare integration and automated result filing' },
    { name: 'Medical Certificates', desc: 'Digital sick notes, fitness certificates, and medical reports with e-signature' },
    { name: 'Chronic Disease Management', desc: 'Care plans, treatment protocols, medication adherence tracking, and outcome monitoring' },
    { name: 'Procedure Documentation', desc: 'Surgical and procedural notes, consent forms, checklists, and complication tracking' },
    { name: 'Point-of-Care Testing', desc: 'POCT result capture, quality control, and integration with clinical records' },
    { name: 'Telemedicine', desc: 'HD video consultations with screen sharing, digital prescriptions, and session recording' },
  ],
  'AI & Analytics': [
    { name: 'AI Clinical Documentation', desc: 'AI-generated SOAP notes from voice or text, reducing documentation time by 60%' },
    { name: 'AI Coding Assistant', desc: 'Automatic ICD-10 and CPT code suggestions from clinical notes with confidence scoring' },
    { name: 'Predictive Analytics', desc: 'Patient risk stratification, no-show prediction, and population health insights' },
    { name: 'AI Patient Assistant', desc: '24/7 AI chatbot for appointment booking, symptom triage, and patient education' },
    { name: 'Business Intelligence', desc: 'Custom dashboards, KPI tracking, provider benchmarking, and trend analysis' },
    { name: 'Clinical Decision Support', desc: 'Evidence-based alerts, drug interaction warnings, and care protocol recommendations' },
    { name: 'Remote Patient Monitoring', desc: 'Wearable and device data ingestion, automated alerts, and longitudinal tracking' },
    { name: 'Compliance & Audit', desc: 'POPIA audit trails, HPCSA compliance monitoring, and data access logging' },
  ],
};

export default function Modules() {
  const [activeTab, setActiveTab] = useState<Tab>('Practice Management');

  return (
    <section id="modules" className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-sky-600 uppercase tracking-wider mb-3">50+ Modules</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Enterprise depth, startup simplicity
          </h2>
          <p className="text-lg text-gray-500">
            Every module a healthcare facility needs — from a solo GP practice to a multi-department hospital.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-sky-300 hover:text-sky-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Module grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {moduleGroups[activeTab].map((m) => (
            <div key={m.name} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all duration-200">
              <h4 className="font-semibold text-gray-900 mb-1">{m.name}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          And many more. We're constantly adding new modules based on what healthcare providers need.
        </p>
      </div>
    </section>
  );
}
