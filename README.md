# Aurelia Medical Clinic — Premium Multi-Page Medical Website

> **Personalized Care. Better Health. Every Day.**  
> A complete, premium, responsive multi-page medical website built for doctors, private medical clinics, and healthcare practices in the **United States** and **India**.

---

## 🏥 Brand Overview

- **Brand Name:** AURELIA MEDICAL CLINIC
- **Tagline:** *"Personalized Care. Better Health. Every Day."*
- **Primary Markets:** United States (San Francisco Bay Area) & India (Indiranagar, Bengaluru)
- **Target Specialty Audience:** General Physicians, Cardiologists, Dermatologists, Orthopedic Doctors, Gynecologists, Pediatricians, and Multi-Specialty Clinics.

---

## 🌐 Website Architecture & Working Routes

| Route | Page Name | Description |
|---|---|---|
| `/` | **Home** | Hero section with unhurried care value proposition, doctor intro, 7 specialties, why choose clinic, 4-step care pathway, facilities, testimonials, FAQs, clinic locations, and booking CTA. |
| `/about` | **About the Doctor** | Dr. Evelyn Vance, MD, FACP profile, philosophy, academic pedigree, board certifications, fellowships, memberships, and clinical focus. |
| `/services` | **Our Services** | Overview of all 7 medical specialties with indicative duration, pricing, and diagnostic testing capabilities. |
| `/services/[slug]` | **Service Detail** | Dedicated sub-pages for all 7 specialties: General Consultation, Preventive Health Checkups, Dermatology, Cardiology, Orthopedics, Women's Health, and Pediatric Consultation. |
| `/conditions` | **Conditions We Treat** | Educational searchable medical directory with category filtering, recognized symptoms, and "When to Consult" physician guidance. |
| `/patient-information` | **Patient Information** | First visit guide, "What to Bring" checklist, 5-step in-clinic flow, clinic timings (US & India), and appointment policies. |
| `/appointments` | **Appointment Booking** | Interactive appointment booking interface with date/time slot selection, consultation format (in-person/video), form validation, and simulated confirmation receipts. |
| `/testimonials` | **Patient Testimonials** | Clearly labeled sample patient reviews demonstrating social proof, consultation satisfaction, and verified feedback standards. |
| `/blog` | **Health Resources / Blog** | Educational medical articles authored by Dr. Vance. |
| `/blog/[slug]` | **Individual Blog Articles** | 4 complete long-form evidence-based health articles with clinical takeaways, structured sections, and medical disclaimers. |
| `/contact` | **Contact & Location** | Dual clinic addresses (San Francisco & Bengaluru), interactive Google Maps embed with "Get Directions", direct phone numbers, and WhatsApp instant inquiry. |
| `/privacy-policy` | **Privacy Policy** | HIPAA and DPDP compliant patient health data confidentiality statement. |
| `/terms` | **Terms & Conditions** | Clinic policies, appointment notice, emergency medical disclaimer, and telehealth guidelines. |
| `/sitemap.xml` | **XML Sitemap** | Dynamic sitemap for search engine indexation. |
| `/robots.txt` | **Robots File** | Production robots crawler directives. |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom healthcare palette (Ivory `#FAF9F5`, Deep Navy `#102A43`, Muted Teal `#0D9488`, Medical Green `#10B981`)
- **Icons:** Lucide React
- **Typography:** Refined serif headings (`font-serif`) and clean legible sans-serif body (`font-sans`)
- **SEO & Structured Data:** OpenGraph tags, dynamic meta titles/descriptions, and Schema.org `MedicalClinic` JSON-LD structured data.

---

## ⚡ Functional Integrations Ready

1. **Appointment Booking (`/api/appointments`):**
   - Interactive date & time slot selection
   - Validates name, email, phone, and consultation format
   - Ready for Resend / SendGrid / EmailJS by configuring `RESEND_API_KEY` in `.env.local`

2. **WhatsApp Direct Inquiry:**
   - Floating WhatsApp button with prefilled greeting
   - Directly links to `https://wa.me/{phone}?text=...`

3. **Google Maps & Navigation:**
   - Directions link integrated for San Francisco and Bengaluru facilities

4. **Cookie & Privacy Consent:**
   - Non-intrusive bottom banner respecting user preferences for GA4 / Meta Pixel placeholders

---

## 🚀 Running the Project Locally

```bash
# Navigate to the project directory
cd aurelia-medical-clinic

# Run the development server
npm run dev
# The website will be available at http://localhost:3000

# Run production build
npm run build
npm start
```

---

## 📋 Customization Checklist for Onboarding a Real Doctor

- [ ] **Doctor Information:** Update `src/data/doctorData.ts` with the doctor's actual name, photo, qualifications, and medical council registration number.
- [ ] **Clinic Address & Phone:** Update `src/data/clinicData.ts` with actual practice phone numbers, WhatsApp line, and Google Maps coordinates.
- [ ] **Services & Pricing:** Adjust `src/data/servicesData.ts` to match the clinic's specific fee schedule and diagnostic equipment.
- [ ] **Email Provider:** Add `RESEND_API_KEY` or `EMAILJS_SERVICE_ID` to `.env.local` to receive real-time email notifications for appointments and inquiries.
- [ ] **Domain & Hosting:** Deploy directly to **Vercel**, **Netlify**, or AWS Amplify with one-click deployment.
