import { BASE_PATH } from "@/lib/constants";

export const portfolioData = {
    personalInfo: {
        name: "Ammar Yasser AbdAllah Mohammad",
        title: "Pharmacist | Medical Interpreter (EN–AR) | Community Health & Equity Advocate",
        bio: "Licensed Pharmacist and Certified Medical Interpreter with interdisciplinary experience in healthcare delivery, public health initiatives, and cross-cultural medical communication.\n\nDemonstrated leadership in community-based public health programs, health promotion campaigns, and international student engagement, with a strong commitment to health equity, access to care, and evidence-based practice.\n\nExperienced in working across healthcare systems, multidisciplinary teams, and diverse populations, contributing to effective service delivery, informed decision-making, and improved patient and community outcomes.",
        email: "pharm.ammar.y@gmail.com",
        phone: "(+20) 1030390303",
        address: "Sixth of October, Giza, Egypt",
        whatsapp: "+201028115566",
        nationality: "Egyptian",
        dob: "01/01/1993",
        website: "https://ammaryascer.github.io/protfolio/",
        linkedin: "https://linkedin.com/in/ammar-yasser"
    },
    skills: [
        "Medication Safety",
        "Rational Drug Use",
        "Patient Counseling",
        "Strategic Planning",
        "Stakeholder Engagement",
        "Team Coordination",
        "Community Health Promotion",
        "Intercultural Communication",
        "HIPAA Compliance",
        "e-Health Technologies"
    ],
    education: [
        {
            degree: "Bachelor of Pharmacy (BPharm)",
            institution: "Faculty of Pharmacy, Capital University (Previously: Helwan University)",
            year: "",
            description: [
                "Comprehensive training in pharmaceutical sciences, pharmacology, toxicology, and biomedical sciences.",
                "Foundations in clinical pharmacy, pharmacotherapy, and pharmacy practice.",
                "Knowledge of quality assurance, Good Manufacturing Practice (GMP), and pharmaceutical regulations."
            ]
        },
        {
            degree: "Credential Evaluation",
            institution: "World Education Services (WES)",
            year: "05/11/2025",
            description: "Bachelor of Pharmacy degree evaluated and determined to be equivalent to a Canadian four-year Bachelor’s degree."
        }
    ],
    experience: [
        {
            role: "Pharmacy Manager",
            company: "Magdy Abdeen Pharmacy",
            period: "01/01/2024 - Current",
            description: [
                "Managed end-to-end community pharmacy operations, ensuring continuous service delivery and regulatory compliance.",
                "Oversaw safe medication dispensing and pharmacy staff performance, providing patient counseling and health education.",
                "Applied principles of medication safety, ethical practice, healthcare management, and continuous service improvement."
            ]
        },
        {
            role: "Remote Medical Interpreter (English–Arabic)",
            company: "GLOBO Language Solutions, LLC",
            period: "01/07/2022 - Current",
            description: [
                "Provided remote medical interpretation services enabling effective communication between LEP patients and providers.",
                "Delivered accurate and bilingual medical interpretation while adhering to clinical terminology standards.",
                "Maintained strict privacy, ethical conduct, and regulatory compliance (HIPAA)."
            ]
        },
        {
            role: "National and Local Officer",
            company: "Egyptian Pharmaceutical Students' Federation (EPSF)",
            period: "2013 - 2016",
            description: [
                "Held multiple senior leadership positions culminating in President of EPSF Helwan.",
                "Led and implemented public health initiatives including national blood donation activities.",
                "Actively contributed to the Student Exchange Program (SEP) and promoted intercultural communication.",
                "Represented EPSF in national and international events."
            ]
        }
    ],
    projects: [
        {
            title: "Public Health Awareness Campaigns",
            description: "Led and implemented community-based campaigns (blood donation, hepatitis, breast cancer) improving health literacy.",
            tags: ["Public Health", "Leadership", "Volunteering"],
            link: "#",
            image: `${BASE_PATH}/epsf groub image.jpg`
        },
        {
            title: "Student Exchange Program",
            description: "Coordinated exchange activities, supporting incoming international students and promoting intercultural mobility.",
            tags: ["Exchange", "Education", "Culture"],
            link: "#",
            image: `${BASE_PATH}/epsf i am taking image.jpg`
        }
    ],
    qualifications: [
        { year: "Active", title: "Eastern Mediterranean Pharmaceutical Symposium (EMPS)", issuer: "Organizer/Participant" },
        { year: "Annual", title: "National Congresses & Symposia", issuer: "EPSF" },
        { year: "Various", title: "Step on the Way & 3D of Science", issuer: "Scientific Initiatives" }
    ],
    testimonials: [
        {
            name: "Sarah Jenkins",
            role: "Supervisor",
            company: "LanguageLine Solutions",
            content: "Ammar consistently demonstrates exceptional medical terminology knowledge and cultural sensitivity. His ability to navigate complex medical scenarios with precision is outstanding."
        },
        {
            name: "Dr. Ahmed Hassan",
            role: "Chief Pharmacist",
            company: "19011 Pharmacies",
            content: "A dedicated professional who combines pharmaceutical expertise with excellent communication skills. Ammar was a key asset to our team in providing patient counseling."
        },
        {
            name: "Michael Chen",
            role: "Operations Manager",
            company: "GLOBO",
            content: "Reliable, professional, and accurate. Ammar has maintained one of the highest quality ratings in our Arabic interpretation team."
        }
    ],
    languages: [
        {
            language: "Arabic",
            proficiency: "Native",
            level: 100,
            description: "Mother Tongue"
        },
        {
            language: "English",
            proficiency: "Proficient (C2)",
            level: 95,
            description: "Listening: C2, Reading: C2, Spoken: C2"
        }
    ],
    publicHealth: [
        {
            title: "Hepatitis C (HCV) Awareness & Prevention Program",
            description: "Nationwide community-based initiative addressing HCV prevention, early detection, and health literacy.",
            role: "Program Initiator & Lead Organizer",
            duration: "2015 – Present",
            scope: "Nationwide, multi-site, diverse communities",
            sdg: "SDG 3 – Good Health and Well-being | SDG 10 – Reduced Inequalities",
            details: {
                context: "Hepatitis C has historically represented a major public health burden in Egypt, requiring sustained community education to promote prevention, screening, and access to care.",
                actions: [
                    "Designed and established the core framework for long-term HCV awareness programming within EPSF",
                    "Planned and implemented multi-year initiatives across university and community settings",
                    "Developed educational content on transmission, prevention, screening, and treatment options",
                    "Coordinated volunteer teams and supervised on-ground outreach activities"
                ],
                impact: [
                    "Improved community awareness of HCV prevention and screening",
                    "Contributed to national hepatitis elimination efforts through grassroots engagement",
                    "Supported linkage to screening and care through community education"
                ],
                sustainability: "Program structure institutionalized within EPSF and continues to be implemented annually beyond initial leadership tenure.",
                partnerships: [
                    "Egyptian Pharmaceutical Students’ Federation (EPSF) local and national structures",
                    "Host institutions and community stakeholders"
                ]
            },
            gallery: [
                "Campaign sessions",
                "On-ground outreach activities",
                "Educational materials",
                "Community engagement events"
            ],
            evidence: [
                "Certificates of participation and leadership",
                "Official EPSF documentation",
                "Event records and reports",
                "External references where available"
            ]
        },
        {
            title: "National Blood Donation Awareness & Mobilization Campaigns",
            description: "Long-term collaboration with national health authorities to strengthen voluntary blood donation.",
            role: "Program Designer, Campaign Coordinator & Volunteer Mobilizer",
            duration: "2015 – Present",
            scope: "Nationwide, university & community settings",
            sdg: "SDG 3 – Good Health and Well-being | SDG 10 – Reduced Inequalities",
            details: {
                context: "Maintaining an adequate and safe blood supply requires continuous public engagement, trust-building, and voluntary donor mobilization.",
                actions: [
                    "Designed the foundation of long-term blood donation programming within EPSF",
                    "Coordinated annual campaigns in cooperation with the Egyptian Ministry of Health and the National Blood Bank",
                    "Organized outreach activities accompanied by mobile blood donation units at campaign sites",
                    "Mobilized student volunteers and community participants across multiple locations",
                    "Supported on-site operations, donor flow management, and engagement activities"
                ],
                impact: [
                    "Campaign periods associated with an estimated 25–30% increase in blood donations at participating sites",
                    "Improved public understanding of blood donation safety, eligibility, and importance",
                    "Strengthened community trust in national blood services"
                ],
                sustainability: "Program model institutionalized within EPSF and continues to be implemented annually. Regular voluntary blood donor for over 10 years, demonstrating sustained personal commitment to community service.",
                partnerships: [
                    "Egyptian Ministry of Health",
                    "National Blood Bank",
                    "Egyptian Pharmaceutical Students’ Federation (EPSF)"
                ]
            },
            gallery: [
                "Blood drives",
                "Mobile blood bank units",
                "Donor engagement activities",
                "Volunteer teams in action"
            ],
            evidence: [
                "Certificates and acknowledgments",
                "Blood bank collaboration documentation",
                "Official event records",
                "Media or public links where available"
            ]
        },
        {
            title: "Comprehensive Public Health Awareness Programs",
            subtitle: "(Diabetes, Breast Cancer, HIV, Pneumonia, Smoking Cessation, and Related Topics)",
            description: "Integrated multi-topic initiatives addressing communicable and non-communicable diseases through sustained community education.",
            role: "Program Designer & Lead Organizer",
            duration: "2015 – Present",
            scope: "Nationwide, multi-topic, diverse communities",
            sdg: "SDG 3 – Good Health and Well-being | SDG 10 – Reduced Inequalities",
            details: {
                context: "Effective public health control requires continuous education to reduce stigma, promote prevention, and encourage early healthcare engagement across multiple priority health areas.",
                actions: [
                    "Designed and established long-term awareness programming across multiple public health themes, including: Diabetes prevention, Breast cancer screening, HIV prevention, Pneumonia awareness, Smoking cessation",
                    "Adapted health messaging to different community needs, age groups, and cultural contexts",
                    "Coordinated volunteer teams and campaign logistics across multiple sites and settings"
                ],
                impact: [
                    "Improved health literacy across multiple disease areas",
                    "Encouraged preventive behaviors and earlier healthcare seeking",
                    "Contributed to stigma reduction and informed decision-making in sensitive health topics"
                ],
                sustainability: "Program structures embedded within EPSF activities and continue to be implemented annually.",
                partnerships: [
                    "Egyptian Pharmaceutical Students’ Federation (EPSF)",
                    "Host institutions and community stakeholders"
                ]
            },
            gallery: [
                "Mixed campaign albums tagged by topic",
                "Educational sessions",
                "Community outreach activities"
            ],
            evidence: [
                "Certificates",
                "Posters and educational materials",
                "Event records",
                "External documentation where available"
            ]
        }
    ]
};
