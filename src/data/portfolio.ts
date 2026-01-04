import { BASE_PATH } from "@/lib/constants";

export const portfolioData = {
    personalInfo: {
        name: "Ammar Yasser AbdAllah Mohammad",
        title: "Licensed Pharmacist & Certified Medical Interpreter",
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
    ]
};
