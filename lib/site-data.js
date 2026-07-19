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
  ceo: '/founder_photo.png',
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
  {
    slug: 'machinery-equipments',
    icon: Truck, title: 'Machinery, Equipments',
    desc: 'Own fleet of 180+ imported and Indian heavy machines, crane rentals, and utility equipments.',
    img: '/mahchinery_services.png',
    hero: '/mahchinery_services.png',
    overview: [
      'Arroyo owns and operates a comprehensive fleet of over 180 imported and high-capacity Indian heavy machines, including heavy-duty cranes, excavators, piling rigs, and modern paving equipment. We maintain our fleet to the highest safety and performance standards to support rapid mobilization for large-scale operations.',
      'Our machinery fleet is backed by certified operators and a dedicated field maintenance team, ensuring maximum uptime and project continuity. From 500-tonne crawler cranes for industrial lift operations to high-reach concrete pumps, we provide reliable equipment deployment and full site support.',
      'All machines are systematically monitored through telemetry and GPS tracking to optimize fuel efficiency, track equipment health, and maximize on-site safety. Our preventative maintenance schedules are managed using digital logs, ensuring zero delays due to operational bottlenecks.',
      'Whether deploying heavy cranes for refinery structures or concrete mixers for highways, we ensure quick and efficient site deployment. Our extensive fleet allows us to run multiple large-scale operations in parallel, giving our clients a distinct speed advantage.'
    ],
    capabilities: [
      'Crawler cranes up to 500 T (Liebherr, Kobelco)',
      'Concrete boom pumps up to 63 m reach',
      'Excavators, backhoes, loaders (JCB, Volvo, CAT)',
      'Pavers, milling machines, road stabilisers',
      'Piling rigs, hydraulic and rotary',
      'Certified operators & AMC contracts',
    ],
    deliverables: [
      { k: '180+', v: 'Owned machines' },
      { k: '500 T', v: 'Max crane capacity' },
      { k: '99.2%', v: 'Fleet uptime' },
      { k: '24 hr', v: 'Mobilisation SLA' },
    ],
  },
  {
    slug: 'infrastructure',
    icon: Building2, title: 'Infrastructure',
    desc: 'Turnkey public and private infrastructure, drainage, utility networks, and township planning.',
    img: '/infrastructure_services.png',
    hero: '/infrastructure_services.png',
    overview: [
      'We specialize in the end-to-end planning, development, and execution of master-planned township, industrial park, and Special Economic Zone (SEZ) infrastructure. Our capabilities span major earthworks, internal road networks, smart utility routing, and large-capacity water supply systems.',
      'Arroyo coordinates complex civil design and execution, including storm-water drainage networks, sewage treatment systems, and high-voltage electrical distribution grids. By integrating advanced technology and durable materials, we create robust infrastructure built to handle future industrial and urban expansion.',
      'We integrate smart civil design, soil stabilization, and modern drainage techniques to prevent issues like waterlogging or electrical grid failures. Each infrastructure project is designed with modular routing, enabling simple future updates without major excavation.',
      'Our experience ranges from simple layout preparation to delivering complete industrial corridors and housing estates. We work closely with municipal authorities and private stakeholders to ensure seamless integration with local public utility grids.'
    ],
    capabilities: [
      'Township & industrial park master planning',
      'Internal roads & storm-water drainage',
      'Water treatment, distribution & sewage',
      'HT/LT electrical distribution',
      'Street lighting & smart-city systems',
      'Landscaping, boundary walls, security',
    ],
    deliverables: [
      { k: '₹10–400 Cr', v: 'Typical project size' },
      { k: '28', v: 'Townships delivered' },
      { k: '4,200 acre', v: 'Total developed' },
      { k: 'DBFOT', v: 'Model expertise' },
    ],
  },
  {
    slug: 'fuel-station',
    icon: Fuel, title: 'Fuel Station',
    desc: 'Lump-sum turnkey EPC projects of petrol pumps and retail outlets for PSU and private fuel companies.',
    img: '/fuel_station_services.png',
    hero: '/fuel_station_services.png',
    overview: [
      'As an empanelled contractor for major public sector oil companies like HPCL, IOCL, and BPCL, Arroyo has successfully constructed over 380 retail fuel outlets and gas stations across the nation. Our services cover everything from initial site development, civil engineering, canopy structures, and underground storage tank installations.',
      'We handle strict compliance and safety protocols, including statutory approvals from PESO (Petroleum and Explosives Safety Organisation), local fire departments, and environmental boards. Our stations are built to modern retail standards, featuring EV-charging infrastructure integration, automated fuel delivery systems, and durable retail building finishes.',
      'Our fuel retail solutions are fully integrated with industrial-grade piping, double-wall steel tanks, and high-precision dispensing pumps. We incorporate solar panels and smart monitoring systems to reduce station operating costs and carbon footprint.',
      'Arroyo maintains strict execution timelines, allowing our clients to commence commercial fuel sales quickly. Our dedicated support team provides continuous post-handover maintenance and structural audits to ensure safe, round-the-clock operations.'
    ],
    capabilities: [
      'Site development, canopy erection & underground tank installation',
      'Automation, POS, dispenser & CCTV integration',
      'Statutory approvals: PESO, Explosive, Fire NOC, Pollution Board',
      'Retail branding, glow signage & shop-in-shop civil work',
      'EV-ready electrical infrastructure & solar canopy add-ons',
      'Annual maintenance & retrofit contracts',
    ],
    deliverables: [
      { k: '45–60 days', v: 'Standard delivery' },
      { k: '₹3.5–12 Cr', v: 'Typical project size' },
      { k: '380+', v: 'Fuel stations delivered' },
      { k: '24×7', v: 'Post-handover support' },
    ],
  },
  {
    slug: 'oil-gas',
    icon: Waves, title: 'Oil & Gas',
    desc: 'Terminals, cross-country pipelines, LPG bottling plants, and mounded storage vessel construction.',
    img: '/oil_gas_services.png',
    hero: '/oil_gas_services.png',
    overview: [
      'Our Oil & Gas division delivers critical pipeline systems, petroleum storage terminals, LPG bottling plants, and mounded storage vessels. We adhere to rigorous international safety and engineering standards, executing cross-country pipeline laying, refinery utilities, and industrial pipe networks.',
      'We specialize in the fabrication and erection of high-pressure storage vessels and piping networks under API and ASME guidelines. With comprehensive testing processes, including radiography and hydrostatic testing, we ensure leak-proof installations and safe operation under high pressure.',
      'Our specialized safety protocols include fire deluge grids, gas leak detectors, and automated shutoff valves to prevent hazardous incidents. We utilize advanced metallurgical analysis and welding procedures to guarantee structural integrity under harsh environmental conditions.',
      'We provide complete EPC support from initial design validation to final pipeline charging and commissioning. Our long-standing partnerships with public oil companies reflect our technical capability and commitment to strict safety standards.'
    ],
    capabilities: [
      'Above-ground & mounded LPG storage tank farms',
      'Cross-country crude, product and gas pipeline laying',
      'Terminal automation & SCADA integration',
      'Fire-fighting systems (foam, water spray, deluge)',
      'Cathodic protection, corrosion monitoring, hot-tapping',
      'Refinery civil, mechanical & structural upgrades',
    ],
    deliverables: [
      { k: '₹20–250 Cr', v: 'Typical project size' },
      { k: 'API 650/653', v: 'Design standards' },
      { k: '65+', v: 'Oil & Gas projects' },
      { k: 'HAZOP', v: 'Safety framework' },
    ],
  },
  {
    slug: 'construction',
    icon: HardHat, title: 'Construction',
    desc: 'RCC plants, factories, warehouses, heavy industrial structures, and commercial building foundations.',
    img: '/construction_services.png',
    hero: '/construction_services.png',
    overview: [
      'Arroyo offers expert construction services for heavy industrial facilities, factory buildings, warehouses, and commercial spaces. Our experienced engineering team delivers pre-engineered buildings (PEB), RCC framed structures, and heavy machinery foundations tailored for high static and dynamic load operations.',
      'We manage projects from soil remediation and deep pile foundations to structural steel fabrication and erection. With full compliance to Indian and international building codes, our structures are optimized for safety, durability, and operational efficiency.',
      'Our industrial civil division incorporates high-grade concrete mixes, structural reinforcing, and moisture-proofing systems to ensure building longevity. We coordinate all MEP, HVAC, and fire protection layouts during the early design stages to prevent clashes on-site.',
      'From initial site clearance and earthmoving to the final architectural finishes, we handle every detail under a single-window contract. We emphasize speed, structural safety, and minimal environmental impact during construction.'
    ],
    capabilities: [
      'Foundation engineering — piling, rafts, caissons',
      'RCC & PEB structures up to 60 m spans',
      'Steel fabrication & erection',
      'Soil investigation, testing & remediation',
      'BIM-based structural modelling (Revit / Tekla)',
      'Retrofitting, seismic strengthening',
    ],
    deliverables: [
      { k: 'IS Codes', v: 'Full compliance' },
      { k: '40+', v: 'Civil engineers in-house' },
      { k: 'BIM', v: '3D coordinated design' },
      { k: '18 yrs', v: 'Design experience' },
    ],
  },
  {
    slug: 'road-sectors',
    icon: Route, title: 'Road Sectors',
    desc: 'National highways, state roads, segment bridges, flyovers, and modern bituminous paving projects.',
    img: '/road_sectors_services.png',
    hero: '/road_sectors_services.png',
    overview: [
      'Registered as a Class-1 contractor, Arroyo builds high-quality national highways, state highways, flyovers, and industrial access roads. We utilize advanced asphalt and concrete paving fleets to deliver smooth, durable, and highly resilience road surfaces that withstand heavy traffic loads.',
      'Our projects incorporate modern highway engineering elements, such as grade separators, precast segment bridges, underpasses, and comprehensive road safety infrastructure. We emphasize soil stabilization and robust base preparation to ensure long-term structural integrity and minimal maintenance requirements.',
      'We use high-grade bitumen and concrete pavement mixes designed to resist heavy wear and tear, reducing annual maintenance expenses. Our engineering processes are optimized for quick base laying, minimizing traffic disruptions during road widening.',
      'Our specialized highway teams ensure all road signs, barriers, and smart monitoring grids conform to national guidelines. We focus on building modern, weather-resistant roads that improve connectivity and fuel transport efficiency.'
    ],
    capabilities: [
      'Bituminous & rigid (concrete) pavements',
      'Highway widening & strengthening',
      'Grade separators, underpasses, ROB / RUB',
      'Toll plazas, wayside amenities',
      'Modern paving fleet: Vogele, Wirtgen, Bomag',
      'Traffic management & road safety works',
    ],
    deliverables: [
      { k: '₹30–500 Cr', v: 'Typical project size' },
      { k: 'NHAI Cat-A', v: 'Empanelment' },
      { k: '780 km', v: 'Roads delivered' },
      { k: '20+', v: 'PWD registrations' },
    ],
  },
];

export const industries = [
  { icon: Waves, name: 'Oil & Gas', img: IMG.refinery1, desc: 'Refineries, terminals, tank farms and cross-country pipelines for HPCL, IOCL, BPCL and private downstream operators.' },
  { icon: Fuel, name: 'Retail Fuel Stations', img: IMG.refinery3, desc: 'Petrol pumps and highway fuel complexes for public sector oil companies and private retail operators.' },
  { icon: Landmark, name: 'Government', img: IMG.bridge3, desc: 'NHAI, PWD, CPWD and state government infrastructure projects — roads, bridges, buildings, water works.' },
  { icon: Building2, name: 'Infrastructure', img: IMG.industry2, desc: 'Townships, SEZs, industrial parks and public infrastructure delivered on EPC or PPP models.' },
  { icon: Factory, name: 'Industrial', img: IMG.industry1, desc: 'Steel, cement, chemicals, pharma and FMCG plant construction — greenfield and brownfield.' },
  { icon: Briefcase, name: 'Commercial', img: IMG.industry3, desc: 'Corporate campuses, warehouses, cold storage and specialised commercial facilities.' },
  { icon: Route, name: 'Roadways', img: IMG.bridge2, desc: 'National highways, state highways, expressways, city roads and internal industrial roads.' },
  { icon: Cpu, name: 'Manufacturing', img: IMG.machine2, desc: 'Manufacturing plants and heavy engineering facilities across automotive, aerospace, machinery.' },
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
  {
    slug: 'hpcl-retail-outlet-nh48',
    title: 'HPCL Retail Outlet — NH-48 Corridor', cat: 'Fuel Stations',
    img: IMG.refinery3, gallery: [IMG.refinery3, IMG.refinery4, IMG.industry3],
    loc: 'Gujarat', year: '2024', value: '₹4.2 Cr', client: 'Hindustan Petroleum Corp.', duration: '52 days',
    scope: 'Turnkey petrol pump construction on NH-48 corridor including canopy erection, UG tank installation, MS building, dispenser integration, statutory approvals and HPCL branding.',
  },
  {
    slug: 'reliance-petrochemical-utility-yard',
    title: 'Reliance Petrochemical Utility Yard', cat: 'Oil & Gas',
    img: IMG.refinery1, gallery: [IMG.refinery1, IMG.refinery2, IMG.refinery5],
    loc: 'Jamnagar', year: '2024', value: '₹28 Cr', client: 'Reliance Industries', duration: '9 months',
    scope: 'Civil, structural and mechanical works for utility yard expansion including cooling tower foundations, pipe-rack structures, sub-station civil and process water systems.',
  },
  {
    slug: 'six-lane-expressway-package-3',
    title: 'Six-Lane Expressway — Package 3', cat: 'Roads',
    img: IMG.bridge2, gallery: [IMG.bridge2, IMG.bridge4, IMG.bridge3],
    loc: 'Maharashtra', year: '2023', value: '₹142 Cr', client: 'NHAI', duration: '22 months',
    scope: 'Design and construction of 42 km six-lane expressway section including bituminous pavement, minor bridges, culverts, drains, road safety works and toll plaza approach.',
  },
  {
    slug: 'cable-stayed-bridge-godavari',
    title: 'Cable-Stayed Bridge over Godavari', cat: 'Bridges',
    img: IMG.bridge1, gallery: [IMG.bridge1, IMG.bridge3, IMG.bridge4],
    loc: 'Andhra Pradesh', year: '2024', value: '₹96 Cr', client: 'PWD Andhra Pradesh', duration: '18 months',
    scope: 'Design-build cable-stayed bridge with 320 m main span across the Godavari river including well foundations, pylons, stay cables and approach viaducts.',
  },
  {
    slug: 'cement-plant-expansion-unit-2',
    title: 'Cement Plant Expansion — Unit II', cat: 'Industrial',
    img: IMG.industry1, gallery: [IMG.industry1, IMG.industry2, IMG.industry3],
    loc: 'Rajasthan', year: '2023', value: '₹56 Cr', client: 'JSW Cement', duration: '14 months',
    scope: 'Civil, structural and MEP works for the second production line at a 2 MTPA cement plant including raw mill, kiln foundation, pre-heater tower and cement silos.',
  },
  {
    slug: 'iocl-terminal-tank-farm',
    title: 'IOCL Terminal Tank Farm Upgrade', cat: 'Oil & Gas',
    img: IMG.refinery2, gallery: [IMG.refinery2, IMG.refinery1, IMG.refinery4],
    loc: 'Kandla', year: '2024', value: '₹34 Cr', client: 'Indian Oil Corp.', duration: '10 months',
    scope: 'Tank farm expansion — four new above-ground storage tanks, associated foam-based fire-fighting network, pipeline manifolds and dyke wall construction as per OISD norms.',
  },
  {
    slug: 'coastal-road-approach-viaduct',
    title: 'Coastal Road Approach Viaduct', cat: 'Bridges',
    img: IMG.bridge4, gallery: [IMG.bridge4, IMG.bridge1, IMG.bridge2],
    loc: 'Karnataka', year: '2024', value: '₹78 Cr', client: 'PWD Karnataka', duration: '16 months',
    scope: '2.4 km approach viaduct for coastal road project executed using pre-cast segmental construction, launching gantry and heavy-lift cranes.',
  },
  {
    slug: 'bpcl-highway-fuel-complex',
    title: 'BPCL Highway Fuel Complex', cat: 'Fuel Stations',
    img: IMG.refinery4, gallery: [IMG.refinery4, IMG.refinery3, IMG.industry3],
    loc: 'Uttar Pradesh', year: '2023', value: '₹6.8 Cr', client: 'Bharat Petroleum', duration: '65 days',
    scope: 'Large-format highway fuel complex with 12 dispensing units, EV charging bays, food-court civil work, restrooms and BPCL retail branding.',
  },
  {
    slug: 'steel-rolling-mill-greenfield',
    title: 'Steel Rolling Mill — Greenfield', cat: 'Industrial',
    img: IMG.industry2, gallery: [IMG.industry2, IMG.industry1, IMG.machine1],
    loc: 'Odisha', year: '2022', value: '₹210 Cr', client: 'Confidential', duration: '19 months',
    scope: 'Greenfield 0.6 MTPA hot-rolling mill — heavy foundations, mill housing, EOT crane rails, utility piping, ETP, boundary and internal roads.',
  },
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
  { name: 'Rajesh Menon', role: 'General Manager — Retail, HPCL', quote: 'Arroyo delivered our highway fuel complex two weeks ahead of schedule with impeccable safety. They are now our preferred EPC partner for Western India.', rating: 5 },
  { name: 'Priya Deshmukh', role: 'Director, Aditya Infra', quote: 'Their design-to-execution discipline is world-class. The tank farm project was executed to the last millimetre of specification.', rating: 5 },
  { name: 'Vikram Shah', role: 'Project Director, PWD Maharashtra', quote: 'Very few contractors can handle bridge and road packages of this scale in India. Arroyo is one of them — reliable, professional and technically strong.', rating: 5 },
  { name: 'Sanjay Iyer', role: 'VP Operations, Reliance', quote: 'From civil BOQ to commissioning, Arroyo\'s engineering team is exceptional. Their PMO reporting is best-in-class.', rating: 5 },
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

export const milestones = [
  { y: '2007', t: 'Company Founded', d: 'Arroyo Engineering registered in Mumbai with a small civil team of 12 engineers.' },
  { y: '2010', t: 'First HPCL Contract', d: 'Empanelled with Hindustan Petroleum for retail fuel outlet construction across Gujarat.' },
  { y: '2013', t: 'Entered Oil & Gas', d: 'Delivered first tank farm expansion project for a major refinery.' },
  { y: '2016', t: 'NHAI Class-1 Contractor', d: 'Registered as NHAI Category-A contractor for highway construction.' },
  { y: '2019', t: 'Bridge Division Launched', d: 'Delivered first cable-stayed bridge — the Godavari crossing.' },
  { y: '2022', t: '500th Project Delivered', d: 'Crossed the half-a-thousand-project milestone across 30+ cities.' },
  { y: '2024', t: '850+ Projects', d: 'Present in 42 cities across India with 240+ engineers and a 180-strong fleet.' },
];
