import velvetBroucher from "../assets/Project/velvet vista/VELVET VISTA BROCHURE CTC.pdf";
import velvetPaymentPlan from "../assets/Project/velvet vista/COST SHEET (VELVET VISTA) april 2025.pdf";
import VelvetVideo from "../assets/Project/velvet vista/walkThrough.mp4";
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
} from "lucide-react";

export const Projects = [
  {
    id: "velvet-vista",
    name: "Welcome to Velvet Vista",
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
      "Fully loaded serviced apartments",
      "12% assured pre-rentals till possession on the amount paid",
      "Free stay for 12 nights every year",
      "30% discount on F&B services across all GHD Group properties",
      "Managed by Royal Orchid Group of Hotels",
      "Minimum 5% lease guarantee with rental escalation for 20 years",
      "One complimentary event per year for up to 500 guests",
    ],
    rera: {
      title: "Officially RERA Registered",
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
      { label: "Wi-Fi in Premises", icon: Wifi },
      { label: "Single for Parks", icon: Car },
      { label: "Landscaped Gardens", icon: Leaf },
      { label: "Swimming Pool", icon: Waves },
      { label: "Multi-Purpose Courts", icon: Dumbbell },
      { label: "Meditation Pavilion", icon: PersonStanding },
      { label: "Café in the Club", icon: Coffee },
      { label: "Kids Play Area", icon: Baby },
    ],
    images: [image1, image2, image3],
    connectivity: {
      title: "Connectivity Of The Property",
      places: [
        "25 minutes drive from Mopa Airport",
        "10 minutes drive from casino zone",
        "5 mins to Mall De Goa",
        "3 mins to NH66",
        "10 mins to Panjim City",
        "10 mins to nearby beaches",
      ],
      embeddedMapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.789818600066!2d73.9965998748892!3d15.387865185197214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba9beb557f0d%3A0xb92a1fbc1dbc32af!2sGranth%20Vihar!5e0!3m2!1sen!2sin!4v1749032037328!5m2!1sen!2sin",
    },
  },
];
