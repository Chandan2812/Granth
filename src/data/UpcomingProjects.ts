// ******************velvet vista*****************
import velvetBroucher from "../assets/Project/velvet vista/VELVET VISTA BROCHURE CTC.pdf";
import velvetPaymentPlan from "../assets/Project/velvet vista/COST SHEET (VELVET VISTA) april 2025.pdf";
import VelvetVideo from "../assets/Project/velvet vista/video2.mp4";
import Hero1 from "../assets/Project/velvet vista/Screenshot 2025-06-03 152615.png";
import Hero2 from "../assets/Project/velvet vista/Screenshot 2025-06-03 152903.png";
import Hero3 from "../assets/Project/velvet vista/Screenshot 2025-06-03 152930.png";
import Hero4 from "../assets/Project/velvet vista/Screenshot 2025-06-03 152950.png";
import Hero5 from "../assets/Project/velvet vista/Screenshot 2025-06-03 153017.png";
import Hero6 from "../assets/Project/velvet vista/Screenshot 2025-06-03 153057.png";
import Hero7 from "../assets/Project/velvet vista/Screenshot 2025-06-03 153243.png";
import Hero8 from "../assets/Project/velvet vista/Screenshot 2025-06-03 154154.png";
import ReraImg from "../assets/Project/velvet vista/WhatsApp Image 2025-06-03 at 3.38.05 PM.jpeg";
import image1 from "../assets/Project/velvet vista/image1.png";
import image2 from "../assets/Project/velvet vista/image2.png";
import image3 from "../assets/Project/velvet vista/image3.png";
import image4 from "../assets/Project/velvet vista/image4.png";
import { GiWashingMachine } from "react-icons/gi";
import {
  ShieldCheck,
  Wifi,
  Car,
  Dumbbell,
  Leaf,
  Waves,
  Coffee,
  ConciergeBell,
  PersonStanding,
  Brush,
  Baby,
  User,
  BookOpenText,
  Luggage,
  Warehouse,
  Presentation,
  Plane,
} from "lucide-react";

// ********************sky-park*********************
import sky1 from "../assets/Project/sky park/Screenshot 2025-06-10 160513.png";
import sky2 from "../assets/Project/sky park/Screenshot 2025-06-10 160930.png";
import sky3 from "../assets/Project/sky park/Screenshot 2025-06-10 160713.png";
import sky4 from "../assets/Project/sky park/Screenshot 2025-06-10 160823.png";
import sky5 from "../assets/Project/sky park/Screenshot 2025-06-10 160839.png";
import sky6 from "../assets/Project/sky park/Screenshot 2025-06-10 160854.png";
import sky7 from "../assets/Project/sky park/Screenshot 2025-06-10 160958.png";
import skyparkBrochure from "../assets/Project/sky park/SKY PARK BROCHURE P.pdf";
import skyPaymentPlan from "../assets/Project/sky park/COST SHEET (SKY PARK)april new.pdf";
import skyAminitiesImg1 from "../assets/Project/sky park/Untitled design (7).png";
import skyAminitiesImg2 from "../assets/Project/sky park/Untitled design (8).png";
import skyAminitiesImg3 from "../assets/Project/sky park/Untitled design (9).png";
import skyAminitiesImg4 from "../assets/Project/sky park/Untitled design (6).png";
export const Projects = [
  {
    id: "velvet-vista",
    name: "VELVET VISTA",
    bannerImages: [Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8],
    description:
      "Discover premium living with our studio, 1 BHK Standard, and 1 BHK Premium apartments — fully furnished with modern interiors and high-end finishes. Managed by a top-tier hospitality group, Velvet Vista ensures a luxurious, hotel-like experience for residents and hands-free income for investors.",
    projectHighlights: [
      {
        place: "Goa",
      },

      {
        title: "Download Brochure",
        file: velvetBroucher,
      },
      {
        title: "Payment Plan",
        file: velvetPaymentPlan,
      },
      {
        videoUrl: VelvetVideo,
      },
    ],
    highlights: [
      "<span class='text-[var(--primary-color)]'>Fully loaded</span> serviced apartments",
      "<span class='text-[var(--primary-color)]'>Attractive</span> payment plans",
      "<span class='text-[var(--primary-color)]'>12% assured pre-rentals</span> till possession on the amount paid",
      "<span class='text-[var(--primary-color)]'>Free stay for 12 nights</span> every year",
      "<span class='text-[var(--primary-color)]'>30% discount on F&B</span> services across all GHD Group properties",
      "Managed by <span class='text-[var(--primary-color)]'>Royal Orchid Group of Hotels</span>",
      "<span class='text-[var(--primary-color)]'>Minimum 5% lease guarantee</span> with rental escalation for 20 years",
      "<span class='text-[var(--primary-color)]'>One complimentary</span> event per year for up to 500 guests",
    ],

    rera: {
      title: "RERA APPROVED PROJECT",
      text1:
        "We're proud to announce that Velvet Vista by GHD Infra is now officially RERA approved, offering complete transparency and legal assurance to all homebuyers.",
      registrationId: "P51700055053",
      text2:
        "This certification safeguards your investment, guarantees timely possession, and reflects our commitment to delivering trusted, high-quality developments with full regulatory compliance.",
      registered: true,
      image: ReraImg,
    },
    featuresAndAmenities: [
      { label: "Rental Management", icon: ConciergeBell },
      { label: "Housekeeping", icon: Brush },
      { label: "Laundry Services", icon: GiWashingMachine },
      { label: "24/7 Security and CCTV", icon: ShieldCheck },
      { label: "Wi-Fi", icon: Wifi },
      { label: "Valet parking", icon: Car },
      { label: "Landscaped Gardens", icon: Leaf },
      { label: "Infinity Swimming Pool", icon: Waves },
      { label: "Multi-Purpose Courts", icon: Dumbbell },
      { label: "Meditation & Wellness ", icon: PersonStanding },
      { label: "Café in the Club", icon: Coffee },
      { label: "Kids Play Area", icon: Baby },
    ],
    images: [image1, image2, image3, image4],
    connectivity: {
      title: "CONNECTIVITY TO THE PROJECT",
      places: [
        "25 minutes drive from <span class='text-[var(--primary-color)]'>MOPA AIRPORT</span>",
        "10 minutes drive from <span class='text-[var(--primary-color)]'>CASINO ZONE</span>",
        "5 mins to <span class='text-[var(--primary-color)]'>MALL DE GOA</span>",
        "3 mins to <span class='text-[var(--primary-color)]'>NH66</span>",
        "10 mins to <span class='text-[var(--primary-color)]'>PANJIM CITY</span>",
        "10 mins to nearby <span class='text-[var(--primary-color)]'>BEACHES</span>",
      ],
      embeddedMapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.612739097844!2d73.8375154!3d15.516502099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc013f4c8c04f%3A0x89cba9fd382b48bf!2sPenha%20de%20Franc%2C%20Goa!5e0!3m2!1sen!2sin!4v1749554174197!5m2!1sen!2sin",
    },
  },
  {
    id: "sky-park",
    name: "SKY PARK ",
    bannerImages: [sky1, sky2, sky3, sky4, sky5, sky6, sky7],
    description:
      "Discover a coastal haven where luxury meets convenience. Studio, 1 BHK & 2 BHK residences in a premium 9-floor high-rise with views of a beautifully spread *central waterbody & swimming pool",
    projectHighlights: [
      {
        place: "Goa",
      },

      {
        title: "Download Brochure",
        file: skyparkBrochure,
      },
      {
        title: "Payment Plan",
        file: skyPaymentPlan,
      },
      {
        videoUrl: "",
      },
    ],
    highlights: [
      "Premium<span class='text-[var(--primary-color)]'>9-Storey Towers </span>",
      " Waterbody & Swimming Pool<span class='text-[var(--primary-color)]'> View Apartments</span>",
      " Beachside Living - <span class='text-[var(--primary-color)]'>Major Beaches 5–10 mins away </span>",
      "<span class='text-[var(--primary-color)]'>Located Directly on NH66</span> – Excellent Road Access ",
      "<span class='text-[var(--primary-color)]'>Thoughtfully Designed Studio</span>, 1 BHK & 2 BHK Units ",
      ,
    ],

    featuresAndAmenities: [
      { label: "24-hour reception", icon: User },
      { label: "Library", icon: BookOpenText },
      { label: "Laundry Services", icon: GiWashingMachine },
      { label: "24/7 Security and CCTV", icon: ShieldCheck },
      { label: "Luggage storage", icon: Luggage },
      { label: "Accessible rooms", icon: Warehouse },
      { label: "Meeting facilities", icon: Presentation },
      { label: "Airport transfer service ", icon: Plane },
      { label: "Café in the Club", icon: Coffee },
      { label: "Spa & wellness centre", icon: PersonStanding },
    ],
    images: [
      skyAminitiesImg1,
      skyAminitiesImg2,
      skyAminitiesImg3,
      skyAminitiesImg4,
    ],
    connectivity: {
      title: "PRIME CONNECTIVITY :",
      places: [
        "5 mins to<span class='text-[var(--primary-color)]'> MADGOAN MARKET</span>",
        "10 mins to drive from <span class='text-[var(--primary-color)]'>BEACHES</span>",
        "12 mins to to <span class='text-[var(--primary-color)]'>RAILWAY STATION</span>",
        "20 mins to <span class='text-[var(--primary-color)]'>WILDLIFE SANCTUARIES</span>",
        "25 mins to <span class='text-[var(--primary-color)]'>AIRPORT</span>",
        "30 mins to nearby <span class='text-[var(--primary-color)]'>PANJIM CITY</span>",
      ],
      embeddedMapUrl:
        "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3848.429291375244!2d73.952444!3d15.298887999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDE3JzU2LjAiTiA3M8KwNTcnMDguOCJF!5e0!3m2!1sen!2sin!4v1749553814875!5m2!1sen!2sin",
    },
  },
];
