export const PRODUCTS = [
  {
    id: 1,
    name: "RAN Agri Monoblock",
    category: "Agricultural",
    tagline: "Backbone of Indian Farming",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
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
    name: "RAN Submersible V4",
    category: "Submersible",
    tagline: "Deep Well Power",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
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
    name: "RAN Submersible V6",
    category: "Submersible",
    tagline: "Heavy Duty Deep Earth Power",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
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
    name: "RAN Jet Pump",
    category: "Surface",
    tagline: "Instant Pressure Power",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
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
    name: "RAN Centrifugal Pro",
    category: "Industrial",
    tagline: "Industrial Grade Flow",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
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
    name: "RAN Solar Pump 2HP",
    category: "Solar",
    tagline: "Sun-Powered Water Freedom",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
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
    name: "RAN Solar Pump 5HP",
    category: "Solar",
    tagline: "Maximum Solar Output",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
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
    name: "RAN Openwell Pump",
    category: "Agricultural",
    tagline: "Open Well Warrior",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
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
    name: "RAN Sewage Pump",
    category: "Industrial",
    tagline: "Tough on Wastewater",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
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
    name: "RAN Fire Fighting Pump",
    category: "Specialty",
    tagline: "When Every Second Counts",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
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
    name: "RAN Dewatering Pump",
    category: "Construction",
    tagline: "Keep Sites Dry",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
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
    name: "RAN Borewell Compressor",
    category: "Submersible",
    tagline: "Deep Reach Reliability",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
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
    name: "RAN Inline Pump",
    category: "Industrial",
    tagline: "Seamless Pipeline Integration",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
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
    name: "RAN Agri 5HP Monoblock",
    category: "Agricultural",
    tagline: "Maximum Farm Performance",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
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
};