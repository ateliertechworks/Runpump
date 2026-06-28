export const PRODUCTS = [
  {
<<<<<<< HEAD
    id: 1,
    name: "RAN Agri Monoblock",
    category: "Agricultural",
    tagline: "Backbone of Indian Farming",
    image: "https://img.sanishtech.com/u/18f7c3de65aa86b2c82081ebf85f4cb1.jpg",
    specs: {
      hp: 1,
      flowRate: 1200,
      head: 25,
      phase: "Single Phase",
      rpm: 2880,
      application: "Irrigation & Agriculture"
    },
    features: ["ISI Marked", "Thermal Overload Protection", "Corrosion Resistant"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Single Phase Vertical Openwell Pump",
    category: "Submersible",
    tagline: "Deep Well Power",
    image: "https://img.sanishtech.com/u/7be86e5246f2c78e89c4770ed164cb2f.jpg",
    specs: {
      hp: 2,
      flowRate: 2000,
      head: 60,
      phase: "Single Phase",
      rpm: 3000,
      application: "Borewells & Deep Wells"
    },
    features: ["Stainless Steel Bowl", "Sand Fighter Technology", "Auto Start/Stop"],
    badge: "Popular"
  },
  {
    id: 3,
    name: "Borewell Submersible Pump",
    category: "Submersible",
    tagline: "Heavy Duty Deep Earth Power",
    image: "https://img.sanishtech.com/u/9b3d4beaef98aa8d5621f6221aa908a6.jpg",
    specs: {
      hp: 5,
      flowRate: 5000,
      head: 90,
      phase: "Three Phase",
      rpm: 2900,
      application: "Agriculture & Industry"
    },
    features: ["6-inch Bore Compatible", "3-Phase Motor", "High Efficiency Impeller"],
    badge: "Industrial"
  },
  {
    id: 4,
    name: "Single / Three Phase Centrifugal Monobloc Pump",
    category: "Surface",
    tagline: "Instant Pressure Power",
    image: "https://img.sanishtech.com/u/44c58d3a7a8d928c3d7c95c7ae71de79.jpg",
    specs: {
      hp: 0.5,
      flowRate: 800,
      head: 30,
      phase: "Single Phase",
      rpm: 2880,
      application: "Domestic Water Supply"
    },
    features: ["Self-Priming", "Compact Design", "Pressure Gauge Included"],
    badge: "Home Use"
  },
  {
    id: 5,
    name: "Single Phase Self Priming Mini Monobloc",
    category: "Industrial",
    tagline: "Industrial Grade Flow",
    image: "https://img.sanishtech.com/u/9ab073efeee8ef28ce0a755641e30a2c.jpg",
    specs: {
      hp: 10,
      flowRate: 15000,
      head: 40,
      phase: "Three Phase",
      rpm: 1450,
      application: "Industrial Processing"
    },
    features: ["Cast Iron Body", "Mechanical Seal", "Back Pullout Design"],
    badge: "Heavy Duty"
  },
  {
    id: 6,
    name: "Single Stage Mini Monobloc",
    category: "Solar",
    tagline: "Sun-Powered Water Freedom",
    image: "https://img.sanishtech.com/u/450301a10d50c376b289f04ff2cfc517.jpg",
    specs: {
      hp: 2,
      flowRate: 2500,
      head: 50,
      phase: "DC Solar",
      rpm: 3000,
      application: "Solar Irrigation"
    },
    features: ["MPPT Controller", "No Electricity Needed", "PM Subsidy Eligible"],
    badge: "Eco Green"
  },
  {
    id: 7,
    name: "Self Priming Centrifugal Jet Pumpsets",
    category: "Solar",
    tagline: "Maximum Solar Output",
    image: "https://img.sanishtech.com/u/4d6aa47b503212d09fb0208ff8f292cc.jpg",
    specs: {
      hp: 5,
      flowRate: 6000,
      head: 70,
      phase: "DC Solar",
      rpm: 2900,
      application: "Large Farm Irrigation"
    },
    features: ["High Efficiency Panels Compatible", "BLDC Motor", "Government Subsidy"],
    badge: "Premium Solar"
  },
  {
    id: 8,
    name: "Centrifugal Monobloc Pump",
    category: "Agricultural",
    tagline: "Open Well Warrior",
    image: "https://img.sanishtech.com/u/b03eaddcfb9596dfd170ab084bedc8b5.jpg",
    specs: {
      hp: 3,
      flowRate: 4000,
      head: 35,
      phase: "Single Phase",
      rpm: 2880,
      application: "Open Wells & Canals"
    },
    features: ["Vortex Impeller", "Self-Priming", "Flood Proof"],
    badge: "Reliable"
  },
  {
    id: 9,
    name: "RAN Pressure Booster",
    category: "Domestic",
    tagline: "Never Low Pressure Again",
    image: "https://img.sanishtech.com/u/d6ccb0044abb2f5e6ea75959ac73c935.jpg",
    specs: {
      hp: 0.5,
      flowRate: 600,
      head: 45,
      phase: "Single Phase",
      rpm: 2880,
      application: "Apartments & Homes"
    },
    features: ["Variable Speed Drive", "Silent Operation", "Auto Pressure Control"],
    badge: "Smart Home"
  },
  {
    id: 10,
    name: "Vertical Openwell Submersible Pump",
    category: "Industrial",
    tagline: "Tough on Wastewater",
    image: "https://img.sanishtech.com/u/215ba76302c0cc38c2dbf8fcc4dfcd95.jpg",
    specs: {
      hp: 7.5,
      flowRate: 12000,
      head: 20,
      phase: "Three Phase",
      rpm: 1450,
      application: "Sewage & Drainage"
    },
    features: ["Anti-Clog Impeller", "Submersible Grade IP68", "Auto Float Switch"],
    badge: "Industrial"
  },
  {
    id: 11,
    name: "Vertical Openwell Submersible Pump",
    category: "Specialty",
    tagline: "When Every Second Counts",
    image: "https://img.sanishtech.com/u/bccffdc2123a78eeafeee5a27192b2a8.jpg",
    specs: {
      hp: 15,
      flowRate: 20000,
      head: 80,
      phase: "Three Phase",
      rpm: 1450,
      application: "Fire Protection Systems"
    },
    features: ["BIS Certified", "Diesel Backup Compatible", "Auto Start Panel"],
    badge: "Safety First"
  },
  {
    id: 12,
    name: "Control Panels",
    category: "Construction",
    tagline: "Keep Sites Dry",
    image: "https://img.sanishtech.com/u/740a94a9cf1628f3f64837389a744f5b.jpg",
    specs: {
      hp: 5,
      flowRate: 18000,
      head: 15,
      phase: "Three Phase",
      rpm: 1450,
      application: "Construction & Mining"
    },
    features: ["Portable Design", "High Volume Discharge", "Solids Handling"],
    badge: "Construction"
  },
  {
    id: 13,
    name: "Stainless Steel Borewell Submersible Pump",
    category: "Submersible",
    tagline: "Deep Reach Reliability",
    image: "https://img.sanishtech.com/u/0f6f24522c1939ee0d2fe10e609bd02a.jpg",
    specs: {
      hp: 3,
      flowRate: 3500,
      head: 120,
      phase: "Single Phase",
      rpm: 2900,
      application: "Deep Borewells 300ft+"
    },
    features: ["Stainless Steel Housing", "Long Life Bearings", "Surge Protection"],
    badge: "Deep Well"
  },
  {
    id: 14,
    name: "Vertical Monobloc Dewatering Submersible Pump",
    category: "Industrial",
    tagline: "Seamless Pipeline Integration",
    image: "https://img.sanishtech.com/u/11d657bb47c08ab2b210015e00ec90e8.jpg",
    specs: {
      hp: 7.5,
      flowRate: 10000,
      head: 50,
      phase: "Three Phase",
      rpm: 2900,
      application: "HVAC & Process Plants"
    },
    features: ["Compact Inline Design", "High Efficiency Motor", "Easy Maintenance"],
    badge: "Industrial"
  },
   {
    id: 14,
    name: "Dewatering pumps",
    category: "Industrial",
    tagline: "Seamless Pipeline Integration",
    image: "https://img.sanishtech.com/u/ebacc0765900b0d566c0b29e27e5c120.jpg",
    specs: {
      hp: 7.5,
      flowRate: 10000,
      head: 50,
      phase: "Three Phase",
      rpm: 2900,
      application: "HVAC & Process Plants"
    },
    features: ["Compact Inline Design", "High Efficiency Motor", "Easy Maintenance"],
    badge: "Industrial"
  },
   {
    id: 14,
    name: "Sewage pumps",
    category: "Industrial",
    tagline: "Seamless Pipeline Integration",
    image: "https://img.sanishtech.com/u/7cac27c72271b67b1d30ef3cdb42940b.jpg",
    specs: {
      hp: 7.5,
      flowRate: 10000,
      head: 50,
      phase: "Three Phase",
      rpm: 2900,
      application: "HVAC & Process Plants"
    },
    features: ["Compact Inline Design", "High Efficiency Motor", "Easy Maintenance"],
    badge: "Industrial"
  },
  {
    id: 15,
    name: "Three Phase Openwell Submersible Pump",
    category: "Agricultural",
    tagline: "Maximum Farm Performance",
    image: "https://img.sanishtech.com/u/815518a7bb43ce7efb0b6fd72a695c73.jpg",
    specs: {
      hp: 5,
      flowRate: 7500,
      head: 30,
      phase: "Three Phase",
      rpm: 2880,
      application: "Large Scale Agriculture"
    },
    features: ["5HP 3-Phase Motor", "Heavy Duty Impeller", "10 Year Warranty"],
    badge: "Top Performer"
=======
    "id": 1,
    "name": "V4 Submersible Borewell Pumps",
    "category": "Borewell Submersible Pumps",
    "tagline": "High Efficiency Deep Well Submersible Pumps",
    "image": "https://img.sanishtech.com/u/9b3d4beaef98aa8d5621f6221aa908a6.jpg",
    "specs": {
      "hp": 7.5,
      "flowRate": 400,
      "head": 400,
      "phase": "Single / Three Phase",
      "rpm": 2880,
      "application": "Deep water lifting, Agriculture",
      "powerRange": "0.5 HP to 7.5 HP",
      "phaseVoltageRange": "180 to 240 V (1Ph) / 380 to 415 V (3Ph)",
      "speedRange": "2880 RPM",
      "headRange": "10 Mtr to 400 Mtr",
      "dischargeRange": "10 lpm to 400 lpm",
      "deliverySize": "25, 32, 40, 50 & 65 mm",
      "impeller": "Stainless Steel / Virgin Noryl",
      "casing": "SS / CI",
      "bearing": "Carbon Pad with Segment Bearing"
    },
    "features": [
      "Longer life sleeve and thrust bearings",
      "High pump efficiency",
      "Low power consumption",
      "CNC precision manufacturing",
      "Water cooled rewindable motor",
      "Easy dismantling and repair",
      "High quality SS/Noryl impellers",
      "Noiseless operation",
      "Dynamically balanced rotating parts",
      "Works in wide voltage fluctuation"
    ],
    "badge": "Reliable"
  },
  {
    "id": 2,
    "name": "V6 Borewell Pumps",
    "category": "Borewell Submersible Pumps",
    "tagline": "Premium Design Borewell Submersibles",
    "image": "https://img.sanishtech.com/u/0f6f24522c1939ee0d2fe10e609bd02a.jpg",
    "specs": {
      "hp": 25,
      "flowRate": 1600,
      "head": 400,
      "phase": "Three Phase",
      "rpm": 2880,
      "application": "Civil & Industrial Water Supply",
      "powerRange": "3 HP to 25 HP",
      "phaseVoltageRange": "380 to 415 V Three Phase",
      "speedRange": "2880 RPM",
      "headRange": "9 Mtr to 400 Mtr",
      "dischargeRange": "40 lpm to 1600 lpm",
      "deliverySize": "40, 50, 65 & 80 mm",
      "impeller": "Stainless Steel",
      "casing": "CI / SS",
      "bearing": "Carbon Pad with Segment Bearing"
    },
    "features": [
      "Premium motor construction",
      "Minimum vibration",
      "Longer life",
      "Sand resistant bushes",
      "Superior FG 260 castings",
      "High performance thrust bearings",
      "High pump efficiency",
      "Low operating cost",
      "Reliable non-return valve",
      "High durability"
    ],
    "badge": "Heavy Duty"
  },
  {
    "id": 3,
    "name": "Dewatering Pumps",
    "category": "Dewatering & Sewage Pumps",
    "tagline": "Efficient Wastewater & Sump Drainage",
    "image": "https://img.sanishtech.com/u/11d657bb47c08ab2b210015e00ec90e8.jpg",
    "specs": {
      "hp": 2,
      "flowRate": 400,
      "head": 12,
      "phase": "Single / Three Phase",
      "rpm": 2850,
      "application": "Residential drainage, Sump drainage",
      "powerRange": "0.5 HP to 2 HP",
      "phaseVoltageRange": "Single / Three Phase",
      "speedRange": "2850 RPM",
      "headRange": "4 Mtr to 12 Mtr",
      "dischargeRange": "100 to 400 lpm",
      "deliverySize": "32 / 50 mm",
      "impeller": "Cast Iron / SS",
      "motorHousing": "Cast Iron / SS"
    },
    "features": [
      "Dry type submersible induction motor",
      "Stainless steel body",
      "Chemical resistant coating",
      "Thermal overload protector",
      "Built-in capacitor",
      "Water leakage protection",
      "Anti-clogging impeller",
      "Float switch enabled"
    ],
    "badge": "Efficient"
  },
  {
    "id": 4,
    "name": "Sewage Pumps",
    "category": "Dewatering & Sewage Pumps",
    "tagline": "High Flow Sewage and Drainage Systems",
    "image": "https://img.sanishtech.com/u/7cac27c72271b67b1d30ef3cdb42940b.jpg",
    "specs": {
      "hp": 2,
      "flowRate": 400,
      "head": 22,
      "phase": "Single / Three Phase",
      "rpm": 2850,
      "application": "Hotels, Houses, Municipal sewage",
      "powerRange": "0.5 HP to 2 HP",
      "phaseVoltageRange": "Single / Three Phase",
      "speedRange": "2850 RPM",
      "headRange": "4 Mtr to 22 Mtr",
      "dischargeRange": "20 to 400 lpm",
      "deliverySize": "32 / 50 mm",
      "impeller": "Vortex, Cutter, Channel, Spiral, Semi-open",
      "motorHousing": "Cast Iron / SS"
    },
    "features": [
      "Energy efficient",
      "Dry run protection",
      "Auto ON/OFF",
      "Heavy duty body",
      "Cutter design",
      "Non-clogging impeller",
      "High efficiency",
      "Waterproof cable"
    ],
    "badge": "Anti-Clog"
  },
  {
    "id": 5,
    "name": "Openwell Submersible Pumps",
    "category": "Openwell Submersible Pumps",
    "tagline": "Compact Submersible Power for Domestic Needs",
    "image": "https://img.sanishtech.com/u/7be86e5246f2c78e89c4770ed164cb2f.jpg",
    "specs": {
      "hp": 2,
      "flowRate": 150,
      "head": 36,
      "phase": "Single Phase",
      "rpm": 2880,
      "application": "Lifting water from sump to overhead tanks",
      "powerRange": "0.5 HP to 2 HP",
      "phaseVoltageRange": "Single Phase 200 to 240 v",
      "speedRange": "2880 Rpm",
      "headRange": "6 Mtr to 36 Mtr",
      "dischargeRange": "60 lpm to 150 lpm",
      "deliverySize": "25, 32, 40 & 50 mm",
      "body": "Stainless steel 202 / 304",
      "rotor": "Aluminium Pressure Die Casting"
    },
    "features": [
      "Rigid Cast iron casing",
      "Water lubricated carbon Journal bushed and SS + Carbon Thrust Bearing",
      "Advanced water cooled Motor Designs",
      "Easy to Dismantle and Repair.",
      "Delivery Size: 25, 32, 40 & 50 mm",
      "Body: Stainless steel 202 / 304",
      "Rotor: Aluminium Pressure Die Casting"
    ],
    "badge": "Popular"
  },
  {
    "id": 6,
    "name": "Horizontal Openwell Pumps",
    "category": "Openwell Submersible Pumps",
    "tagline": "High Yield Openwell Solutions",
    "image": "https://img.sanishtech.com/u/815518a7bb43ce7efb0b6fd72a695c73.jpg",
    "specs": {
      "hp": 10,
      "flowRate": 1800,
      "head": 60,
      "phase": "Single / Three Phase",
      "rpm": 2900,
      "application": "Public water supply, Agriculture, Deep Wells",
      "powerRange": "3 HP to 10 HP",
      "phaseVoltageRange": "180 - 240 V (1Ph) / 350 - 415 V (3Ph)",
      "speedRange": "2900 Rpm",
      "headRange": "8 Mtr to 60 Mtrs",
      "dischargeRange": "25 lpm to 1800 lpm",
      "deliverySize": "50, 65, 75, 80 MM",
      "impeller": "Cast Iron Impellers",
      "shaft": "SS Shaft"
    },
    "features": [
      "Designed to operate under wide voltage fluctuations",
      "Two water lubricated Carbon Bearings used for longer life",
      "Can be used as a submersible pump in the openwell",
      "No need to separate Footvalve.",
      "Delivery Size: 50, 65, 75, 80 MM",
      "Impeller: Cast Iron Impellers",
      "Shaft: SS Shaft"
    ],
    "badge": "Heavy Duty"
  },
  {
    "id": 7,
    "name": "Vertical Openwell Pumps",
    "category": "Openwell Submersible Pumps",
    "tagline": "Robust Vertical Submersibles for Irrigation",
    "image": "https://img.sanishtech.com/u/215ba76302c0cc38c2dbf8fcc4dfcd95.jpg",
    "specs": {
      "hp": 7.5,
      "flowRate": 1050,
      "head": 90,
      "phase": "Three Phase",
      "rpm": 2850,
      "application": "Pumping water from openwell, River for Agriculture",
      "powerRange": "3 HP to 7.5 HP",
      "phaseVoltageRange": "380 to 415 V Three phase",
      "speedRange": "2850 RPM",
      "headRange": "90 Mtr",
      "dischargeRange": "180 lpm to 1050 lpm",
      "deliverySize": "50, 65, 75 & 80 MM",
      "casingImpeller": "CI",
      "bearing": "Carbon pad with segment Bearing",
      "rotor": "Copper Brazed Rotor"
    },
    "features": [
      "Energy efficient Motors and Pumps",
      "Three layer protection to avoid sand entry into Motor",
      "Sand proof design of Mechanical Seal Rings",
      "Increased water volume for better cooling",
      "Delivery Size: 50, 65, 75 & 80 MM",
      "Casing & Impeller: CI",
      "Rotor: Copper Brazed Rotor"
    ],
    "badge": "Industrial"
  },
  {
    "id": 8,
    "name": "Centrifugal Monoblock Pumps",
    "category": "Openwell Submersible Pumps",
    "tagline": "Centrifugal Openwell Pumping Solutions",
    "image": "https://img.sanishtech.com/u/18f7c3de65aa86b2c82081ebf85f4cb1.jpg",
    "specs": {
      "hp": 15,
      "flowRate": 2500,
      "head": 70,
      "phase": "Single / Three Phase",
      "rpm": 2880,
      "application": "Agriculture, Farms, Industrial service",
      "powerRange": "0.5 HP to 15 HP",
      "phaseVoltageRange": "200-240V 1Ph / 380-415V 3Ph",
      "speedRange": "1440 / 2880 RPM",
      "headRange": "6 Mtr to 70 Mtr",
      "dischargeRange": "50 lpm to 2500 lpm",
      "deliverySize": "40, 50, 65 & 80 MM",
      "impeller": "Cast Iron, Noryl / Brass",
      "shaft": "Stainless steel 410 / EN8"
    },
    "features": [
      "Specially designed for wide voltage operation",
      "Dynamically balanced rotating parts",
      "Double sealed ball bearings",
      "Unicasing type pumps eliminate air locking problems",
      "Delivery Size: 40, 50, 65 & 80 MM",
      "Impeller: Cast Iron, Noryl / Brass",
      "Shaft: Stainless steel 410 / EN8"
    ],
    "badge": "Versatile"
  },
  {
    "id": 9,
    "name": "Horizontal Multistage Pressure Booster Pump",
    "category": "Pressure Boosting Pumps",
    "tagline": "Consistent Water Pressure System",
    "image": "https://img.sanishtech.com/u/d6ccb0044abb2f5e6ea75959ac73c935.jpg",
    "specs": {
      "hp": 2,
      "flowRate": 140,
      "head": 50,
      "phase": "Single Phase",
      "rpm": 2880,
      "application": "Residential buildings, Hotels",
      "powerRange": "0.5 HP to 2 HP",
      "phaseVoltageRange": "220V Single Phase",
      "speedRange": "2880 RPM",
      "headRange": "6 Mtr to 50 Mtr",
      "dischargeRange": "20 to 140 lpm",
      "pressureRange": "2 to 6.6 bar",
      "tankSize": "24L / 35L / 60L"
    },
    "features": [
      "Reliable operation",
      "Automatic ON/OFF",
      "Low power consumption",
      "Uniform pressure",
      "Dry run protection",
      "Y-Strainer",
      "Corrosion protection",
      "SS impellers"
    ],
    "badge": "Smart Home"
  },
  {
    "id": 10,
    "name": "Smart Pressure Booster Pump",
    "category": "Pressure Boosting Pumps",
    "tagline": "Smart and Compact Pressure Solutions",
    "image": "https://img.sanishtech.com/u/44c58d3a7a8d928c3d7c95c7ae71de79.jpg",
    "specs": {
      "hp": 1,
      "flowRate": 50,
      "head": 32,
      "phase": "Single Phase",
      "rpm": 2880,
      "application": "Water supply, Fountains, Hotels",
      "powerRange": "0.5 HP to 1 HP",
      "phaseVoltageRange": "Single Phase",
      "speedRange": "2880 RPM",
      "headRange": "6 Mtr to 32 Mtr",
      "dischargeRange": "6 to 50 lpm",
      "tankSize": "2L"
    },
    "features": [
      "TEFC construction",
      "Even pressure",
      "Noiseless operation",
      "Easy installation",
      "High durability",
      "Corrosion resistant"
    ],
    "badge": "Compact"
  },
  {
    "id": 11,
    "name": "Smart Mini Monobloc Pump",
    "category": "Self Priming Monobloc Pumps",
    "tagline": "Compact and Efficient Suction Power",
    "image": "https://img.sanishtech.com/u/9ab073efeee8ef28ce0a755641e30a2c.jpg",
    "specs": {
      "hp": 1,
      "flowRate": 60,
      "head": 45,
      "phase": "Single Phase",
      "rpm": 2800,
      "application": "Domestic water supply, Villas",
      "powerRange": "0.5 HP to 1 HP",
      "phaseVoltageRange": "Single Phase 200-240V",
      "speedRange": "1440 / 2800 RPM",
      "headRange": "5 to 45 Mtr",
      "dischargeRange": "10 to 60 lpm",
      "maxSuctionLift": "6 Meters",
      "suctionDeliverySize": "25 mm"
    },
    "features": [
      "High efficiency",
      "Low power consumption",
      "Thermal overload protection",
      "Double sealed bearings",
      "Minimum vibration",
      "Wide voltage range",
      "Noiseless operation",
      "Compact design",
      "Portable design",
      "Easy repair"
    ],
    "badge": "Mini Power"
  },
  {
    "id": 12,
    "name": "Smart Max Monobloc Pump",
    "category": "Self Priming Monobloc Pumps",
    "tagline": "Maximum Suction Power",
    "image": "https://img.sanishtech.com/u/450301a10d50c376b289f04ff2cfc517.jpg",
    "specs": {
      "hp": 1,
      "flowRate": 60,
      "head": 45,
      "phase": "Single Phase",
      "rpm": 2800,
      "application": "Water circulation systems",
      "powerRange": "0.5 HP to 1 HP",
      "phaseVoltageRange": "Single Phase 200-240V",
      "speedRange": "1440 / 2800 RPM",
      "headRange": "5 to 45 Mtr",
      "dischargeRange": "10 to 60 lpm",
      "maxSuctionLift": "6 Meters",
      "suctionDeliverySize": "25 mm"
    },
    "features": [
      "High efficiency",
      "Low power consumption",
      "Thermal overload protection",
      "Double sealed bearings",
      "Minimum vibration",
      "Wide voltage range",
      "Noiseless operation",
      "Compact design",
      "Portable design",
      "Easy repair"
    ],
    "badge": "High Suction"
  },
  {
    "id": 13,
    "name": "Slow Speed Super Suction Pump",
    "category": "Self Priming Monobloc Pumps",
    "tagline": "Deep Suction and Silent Operation",
    "image": "https://img.sanishtech.com/u/b03eaddcfb9596dfd170ab084bedc8b5.jpg",
    "specs": {
      "hp": 1,
      "flowRate": 60,
      "head": 45,
      "phase": "Single Phase",
      "rpm": 1440,
      "application": "Gardens, Fountains",
      "powerRange": "0.5 HP to 1 HP",
      "phaseVoltageRange": "Single Phase 200-240V",
      "speedRange": "1440 / 2800 RPM",
      "headRange": "5 to 45 Mtr",
      "dischargeRange": "10 to 60 lpm",
      "maxSuctionLift": "6 Meters",
      "suctionDeliverySize": "25 mm"
    },
    "features": [
      "High efficiency",
      "Low power consumption",
      "Thermal overload protection",
      "Double sealed bearings",
      "Minimum vibration",
      "Wide voltage range",
      "Noiseless operation",
      "Compact design",
      "Portable design",
      "Easy repair"
    ],
    "badge": "Super Suction"
>>>>>>> 3b14275 ( rework for the product info)
  }
];

export const WHATSAPP_NUMBER = "919999999999"; // Replace with actual number

export const buildWhatsAppUrl = (productName, type, customMessage = "") => {
  let message = "";
  if (customMessage) {
    message = customMessage;
  } else if (type === "book") {
    message = `Hello RAN Pump! 🌊\n\nI would like to *Book* the *${productName}*.\n\nPlease confirm availability and pricing.\n\nThank you!`;
  } else if (type === "inquire") {
    message = `Hello RAN Pump! 🌊\n\nI have an *Inquiry* regarding the *${productName}*.\n\nCould you please share detailed specifications and pricing?\n\nThank you!`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const buildSupportWhatsAppUrl = (category, message, product = "") => {
  const productText = product ? ` for the *${product}*` : "";
  const fullMessage = `Hello RAN Pump! 🔧\n\nI require a *${category}*${productText}.\n\n${message ? `Details: ${message}` : "Please provide assistance."}\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
<<<<<<< HEAD
};
=======
};
>>>>>>> 3b14275 ( rework for the product info)
