import {
  Fuel, Factory, HardHat, Building2, Waves, TrafficCone, Truck,
  Wrench, ShieldCheck, Award, Users, Clock, MapPin, PackageCheck,
  Gauge, Headphones, Zap, Cog, Hammer, Landmark, Layers, Route,
  Mountain, Cpu, Briefcase,
} from 'lucide-react';

export const IMG = {
  hero: 'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=2400&q=80',
  heroAlt: 'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=2400&q=80',
  about: 'https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?auto=format&fit=crop&w=1600&q=80',
  aboutAlt: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1600&q=80',
  ceo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  refinery1: 'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?auto=format&fit=crop&w=1600&q=80',
  refinery2: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?auto=format&fit=crop&w=1600&q=80',
  refinery3: 'https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?auto=format&fit=crop&w=1600&q=80',
  refinery4: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1600&q=80',
  refinery5: 'https://images.pexels.com/photos/4883682/pexels-photo-4883682.jpeg?auto=compress&cs=tinysrgb&w=1600',
  bridge1: 'https://images.unsplash.com/photo-1529926691761-20fb82067c71?auto=format&fit=crop&w=1600&q=80',
  bridge2: 'https://images.unsplash.com/photo-1691149210746-c6bbb40f4bf6?auto=format&fit=crop&w=1600&q=80',
  bridge3: 'https://images.unsplash.com/photo-1592415029085-796b9f1ca5cb?auto=format&fit=crop&w=1600&q=80',
  bridge4: 'https://images.unsplash.com/photo-1723271901087-d7f11d9e8bfc?auto=format&fit=crop&w=1600&q=80',
  industry1: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1600&q=80',
  industry2: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=1600&q=80',
  industry3: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?auto=format&fit=crop&w=1600&q=80',
  machine1: 'https://images.unsplash.com/photo-1642927778267-4e8b787b325a?auto=format&fit=crop&w=1600&q=80',
  machine2: 'https://images.unsplash.com/photo-1603814744174-115311ad645e?auto=format&fit=crop&w=1600&q=80',
  machine3: 'https://images.unsplash.com/photo-1580901369227-308f6f40bdeb?auto=format&fit=crop&w=1600&q=80',
};

export const services = [
  { icon: Fuel, title: 'Fuel Station Construction', desc: 'End-to-end EPC delivery of petrol pumps and retail fuel outlets for HPCL, IOCL, BPCL and private operators.', img: IMG.refinery3, tag: 'EPC' },
  { icon: Waves, title: 'Oil & Gas Infrastructure', desc: 'Design and installation of tank farms, pipelines, terminals and refinery utility systems.', img: IMG.refinery1, tag: 'Energy' },
  { icon: Factory, title: 'Industrial Construction', desc: 'Turnkey construction of factories, warehouses and heavy industrial facilities.', img: IMG.industry1, tag: 'Industrial' },
  { icon: HardHat, title: 'Civil Engineering', desc: 'Structural design and civil execution for high-load industrial and commercial complexes.', img: IMG.about, tag: 'Civil' },
  { icon: Route, title: 'Road Construction', desc: 'National highway, state road and internal-road construction with modern paving technology.', img: IMG.bridge2, tag: 'Highways' },
  { icon: Landmark, title: 'Bridge Construction', desc: 'Cable-stayed, girder and cantilever bridges engineered for decades of service.', img: IMG.bridge1, tag: 'Bridges' },
  { icon: Truck, title: 'Heavy Machinery', desc: 'Fleet of cranes, excavators, pavers and rigs backed by certified operators.', img: IMG.machine1, tag: 'Equipment' },
  { icon: PackageCheck, title: 'Equipment Supply', desc: 'Sourcing and supply of industrial equipment, fittings and specialised components.', img: IMG.machine2, tag: 'Supply' },
  { icon: Building2, title: 'Infrastructure Development', desc: 'Master-planned public and private infrastructure — utilities, drainage, roads and lighting.', img: IMG.industry2, tag: 'Infra' },
  { icon: Cog, title: 'EPC Projects', desc: 'Engineering, procurement and construction on a single-window turnkey basis.', img: IMG.refinery2, tag: 'Turnkey' },
];

export const industries = [
  { icon: Waves, name: 'Oil & Gas', img: IMG.refinery1 },
  { icon: Fuel, name: 'Retail Fuel Stations', img: IMG.refinery3 },
  { icon: Landmark, name: 'Government', img: IMG.bridge3 },
  { icon: Building2, name: 'Infrastructure', img: IMG.industry2 },
  { icon: Factory, name: 'Industrial', img: IMG.industry1 },
  { icon: Briefcase, name: 'Commercial', img: IMG.industry3 },
  { icon: Route, name: 'Roadways', img: IMG.bridge2 },
  { icon: Cpu, name: 'Manufacturing', img: IMG.machine2 },
];

export const whyChoose = [
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'ISO-aligned QA/QC at every stage of the project lifecycle.' },
  { icon: Users, title: 'Experienced Engineers', desc: 'A senior team of civil, mechanical & structural engineers.' },
  { icon: MapPin, title: 'PAN-India Presence', desc: 'Executing projects across 40+ cities in 18+ states.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Milestone-driven execution with contractual SLAs.' },
  { icon: Wrench, title: 'Latest Equipment', desc: 'A modern fleet of imported cranes, pavers & rigs.' },
  { icon: HardHat, title: 'Safety First', desc: 'Zero-harm culture with OHSAS-aligned safety protocols.' },
  { icon: Gauge, title: 'Cost Efficiency', desc: 'Optimised BOQ and vendor consolidation reduce project cost.' },
  { icon: Headphones, title: '24×7 Support', desc: 'Dedicated project managers reachable around the clock.' },
];

export const processSteps = [
  { n: '01', title: 'Consultation', desc: 'Feasibility study, site survey and requirement mapping.' },
  { n: '02', title: 'Planning', desc: 'Detailed project report, timelines, BOQ and cost engineering.' },
  { n: '03', title: 'Design', desc: 'Architectural, structural and MEP design with 3D visualisation.' },
  { n: '04', title: 'Engineering', desc: 'Procurement, vendor onboarding and pre-fabrication.' },
  { n: '05', title: 'Execution', desc: 'On-site construction with milestone reporting.' },
  { n: '06', title: 'Quality Inspection', desc: 'Third-party audits, testing and compliance certification.' },
  { n: '07', title: 'Handover', desc: 'Commissioning, documentation and post-handover support.' },
];

export const projectCategories = ['All', 'Fuel Stations', 'Roads', 'Bridges', 'Industrial', 'Oil & Gas'];

export const projects = [
  { title: 'HPCL Retail Outlet — NH-48 Corridor', cat: 'Fuel Stations', img: IMG.refinery3, loc: 'Gujarat', year: '2024', value: '₹4.2 Cr' },
  { title: 'Reliance Petrochemical Utility Yard', cat: 'Oil & Gas', img: IMG.refinery1, loc: 'Jamnagar', year: '2024', value: '₹28 Cr' },
  { title: 'Six-Lane Expressway — Package 3', cat: 'Roads', img: IMG.bridge2, loc: 'Maharashtra', year: '2023', value: '₹142 Cr' },
  { title: 'Cable-Stayed Bridge over Godavari', cat: 'Bridges', img: IMG.bridge1, loc: 'Andhra Pradesh', year: '2024', value: '₹96 Cr' },
  { title: 'Cement Plant Expansion — Unit II', cat: 'Industrial', img: IMG.industry1, loc: 'Rajasthan', year: '2023', value: '₹56 Cr' },
  { title: 'IOCL Terminal Tank Farm Upgrade', cat: 'Oil & Gas', img: IMG.refinery2, loc: 'Kandla', year: '2024', value: '₹34 Cr' },
  { title: 'Coastal Road Approach Viaduct', cat: 'Bridges', img: IMG.bridge4, loc: 'Karnataka', year: '2024', value: '₹78 Cr' },
  { title: 'BPCL Highway Fuel Complex', cat: 'Fuel Stations', img: IMG.refinery4, loc: 'Uttar Pradesh', year: '2023', value: '₹6.8 Cr' },
  { title: 'Steel Rolling Mill — Greenfield', cat: 'Industrial', img: IMG.industry2, loc: 'Odisha', year: '2022', value: '₹210 Cr' },
];

export const stats = [
  { n: 850, suffix: '+', label: 'Projects Delivered' },
  { n: 320, suffix: '+', label: 'Happy Clients' },
  { n: 42, suffix: '', label: 'Cities Served' },
  { n: 18, suffix: '+', label: 'Years of Experience' },
  { n: 240, suffix: '+', label: 'Engineers On-Roll' },
  { n: 180, suffix: '+', label: 'Owned Machines' },
];

export const testimonials = [
  {
    name: 'Rajesh Menon',
    role: 'General Manager — Retail, HPCL',
    quote: 'Arroyo delivered our highway fuel complex two weeks ahead of schedule with impeccable safety. They are now our preferred EPC partner for Western India.',
    rating: 5,
  },
  {
    name: 'Priya Deshmukh',
    role: 'Director, Aditya Infra',
    quote: 'Their design-to-execution discipline is world-class. The tank farm project was executed to the last millimetre of specification.',
    rating: 5,
  },
  {
    name: 'Vikram Shah',
    role: 'Project Director, PWD Maharashtra',
    quote: 'Very few contractors can handle bridge and road packages of this scale in India. Arroyo is one of them — reliable, professional and technically strong.',
    rating: 5,
  },
  {
    name: 'Sanjay Iyer',
    role: 'VP Operations, Reliance',
    quote: 'From civil BOQ to commissioning, Arroyo\'s engineering team is exceptional. Their PMO reporting is best-in-class.',
    rating: 5,
  },
];

export const faqs = [
  { q: 'What kind of projects does Arroyo Engineering handle?', a: 'We deliver end-to-end EPC, civil construction, oil & gas infrastructure, fuel station construction, road & bridge projects, industrial construction, and heavy machinery deployment — across public and private sectors in India.' },
  { q: 'Do you work across India?', a: 'Yes. Arroyo operates through 8 regional offices with active projects in 40+ cities across 18+ states. We can mobilise a full project team anywhere in India within 72 hours.' },
  { q: 'What certifications does the company hold?', a: 'We are ISO 9001, ISO 14001 and OHSAS 18001 aligned. Our fuel station division is empanelled with HPCL, IOCL and BPCL, and our infra division is registered with NHAI and multiple state PWDs.' },
  { q: 'How do I request a quote?', a: 'Use the Get Quote button, fill the contact form on this page, or call +91-98765-43210 / WhatsApp us. A senior estimator will revert within 24 business hours.' },
  { q: 'What is your typical project turnaround?', a: 'A standard retail fuel outlet is delivered in 45–60 days. Large EPC or bridge packages follow contractually agreed milestone schedules — we have never breached an agreed critical milestone in the last 5 years.' },
  { q: 'Do you support post-handover maintenance?', a: 'Yes. Every project includes a 12-month defect liability period and optional AMC packages for civil, mechanical and electrical systems.' },
];

export const clientLogos = [
  'HPCL', 'IOCL', 'BPCL', 'Reliance', 'NHAI', 'L&T', 'ONGC', 'GAIL', 'PWD', 'Adani', 'Tata', 'JSW', 'Aditya Birla', 'Vedanta',
];
