export interface NavItem {
  label: string;
  href: string;
}

export interface QuickInfoItem {
  title: string;
  description: string;
  iconName: "Stethoscope" | "Activity" | "HeartPulse" | "MapPin";
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details?: string;
  iconName:
    | "Stethoscope"
    | "FlaskConical"
    | "Activity"
    | "Baby"
    | "HeartPulse"
    | "Brain"
    | "ShieldAlert"
    | "Scissors"
    | "Pill";
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: "HeartHandshake" | "UserCheck" | "Microscope" | "Award";
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export const quickInfoItems: QuickInfoItem[] = [
  {
    title: "Clinical Care",
    description: "Professional medical services focused on patient needs.",
    iconName: "Stethoscope",
  },
  {
    title: "Diagnostic Services",
    description: "Reliable clinical and diagnostic services.",
    iconName: "Activity",
  },
  {
    title: "Patient-Centered Care",
    description: "Compassionate care delivered with professionalism.",
    iconName: "HeartPulse",
  },
  {
    title: "Accessible Location",
    description: "Conveniently located in Mgbuoba, Port Harcourt.",
    iconName: "MapPin",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "general-medical-care",
    title: "General Medical Care",
    description:
      "Medical consultation, evaluation and treatment for common health conditions.",
    iconName: "Stethoscope",
    details:
      "Comprehensive outpatient consultations, routine wellness examinations, chronic disease management, and primary healthcare for individuals and families.",
  },
  {
    id: "laboratory-services",
    title: "Laboratory Services",
    description:
      "Clinical laboratory and diagnostic testing services.",
    iconName: "FlaskConical",
    details:
      "Prompt and accurate clinical laboratory testing including blood analysis, urinalysis, infection screening, and diagnostic profiles.",
  },
  {
    id: "diagnostic-services",
    title: "Diagnostic Services",
    description:
      "Clinical and diagnostic investigations to support medical assessment.",
    iconName: "Activity",
    details:
      "Modern diagnostic support designed to assist medical practitioners in accurate diagnosis and effective clinical decision-making.",
  },
  {
    id: "antenatal-maternal-care",
    title: "Antenatal & Maternal Care",
    description:
      "Healthcare support for expectant mothers.",
    iconName: "Baby",
    details:
      "Dedicated maternal health services including regular antenatal checkups, maternal wellness monitoring, and postpartum support.",
  },
  {
    id: "pediatric-care",
    title: "Pediatric Care",
    description:
      "Healthcare services for children.",
    iconName: "HeartPulse",
    details:
      "Gentle, specialized medical care for infants, children, and adolescents, covering common childhood illnesses and routine developmental checks.",
  },
  {
  id: "psychology-mental-health",
  title: "Psychology & Mental Health",
  description:
    "Assessment, diagnosis, counselling, therapy, and research-informed support for emotional, cognitive, behavioural, social, and interpersonal wellbeing.",
  iconName: "Brain",
  details:
    "Psychologists assess and diagnose behavioural, emotional and cognitive disorders, counsel clients, provide therapy, conduct research and apply theory relating to behaviour and mental processes. Psychologists help clients work toward the maintenance and enhancement of psychological, physical, intellectual, emotional, social and interpersonal functioning.",
},
  {
    id: "emergency-care",
    title: "Emergency Care",
    description:
      "Prompt medical attention for urgent healthcare needs.",
    iconName: "ShieldAlert",
    details:
      "Rapid triage and urgent medical intervention for acute symptoms, sudden illnesses, and healthcare emergencies.",
  },
  {
    id: "surgical-services",
    title: "Surgical Services",
    description:
      "Professional surgical care and related services.",
    iconName: "Scissors",
    details:
      "Surgical consultations, minor surgical procedures, and pre- and post-operative clinical care with strict sterile protocols.",
  },
  {
    id: "pharmacy-services",
    title: "Pharmacy Services",
    description:
      "Access to prescribed medications and pharmaceutical support.",
    iconName: "Pill",
    details:
      "On-site dispensary providing genuine, properly stored medications, dosage guidance, and professional pharmaceutical advice.",
  },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    title: "Compassionate Patient Care",
    description:
      "We treat every patient with empathy, dignity, and respect, prioritizing your comfort throughout your healthcare journey.",
    iconName: "HeartHandshake",
  },
  {
    title: "Professional Healthcare Services",
    description:
      "Our dedicated clinical staff adhere to rigorous medical standards to ensure safe, effective, and dependable treatment.",
    iconName: "UserCheck",
  },
  {
    title: "Clinical & Diagnostic Focus",
    description:
      "We emphasize accurate diagnostics and sound clinical practices to formulate precise and effective care plans.",
    iconName: "Microscope",
  },
  {
    title: "Commitment to Quality",
    description:
      "We are committed to continuous improvement, hygiene, patient safety, and clinical best practices at all times.",
    iconName: "Award",
  },
];
