// import Footer from "../components/Footer";
// import Navbar from "../components/Nav";
// // import { projectPageData } from "../data/PropertyData";
// import { useParams } from "react-router-dom";
// import video from "../assets/WhatsApp Video 2025-05-28 at 2.54.11 PM (1).mp4";
// import { useEffect, useRef, useState } from "react";
// import DownloadBrochureForm from "../components/DownloadBrochureForm";
// import DownloadPaymentPlan from "../components/DownloadPayment";

// import { MapPin } from "lucide-react";
// import PromptConsultation from "../components/PromptConsultation";
// import image1 from "../assets/projectHero/Screenshot 2025-06-03 152615.png";
// import image2 from "../assets/projectHero/Screenshot 2025-06-03 152903.png";
// import image3 from "../assets/projectHero/Screenshot 2025-06-03 152930.png";
// import image4 from "../assets/projectHero/Screenshot 2025-06-03 152950.png";
// import image5 from "../assets/projectHero/Screenshot 2025-06-03 153017.png";
// import image6 from "../assets/projectHero/Screenshot 2025-06-03 153057.png";
// import image7 from "../assets/projectHero/Screenshot 2025-06-03 153243.png";
// import image8 from "../assets/projectHero/Screenshot 2025-06-03 154154.png";

// import Layout1 from "../assets/image1.png";
// import Layout2 from "../assets/image2.png";
// import Layout3 from "../assets/image3.png";

// import rera from "../assets/WhatsApp Image 2025-06-03 at 3.38.05 PM.jpeg";
// import {
//   ShieldCheck,
//   Wifi,
//   Car,
//   Dumbbell,
//   Leaf,
//   Waves,
//   Coffee,
//   ConciergeBell,
//   PersonStanding,
//   Brush,
//   Baby,
//   Building2,
//   Hotel,
//   PercentCircle,
//   BedDouble,
//   Users,
//   Percent,
//   Volume2,
//   VolumeX,
// } from "lucide-react";
// import { GiWashingMachine } from "react-icons/gi";

// const images = [image1, image2, image3, image4, image5, image6, image7, image8];

// const features = [
//   { label: "Rental Management", icon: ConciergeBell },
//   { label: "Housekeeping", icon: Brush },
//   { label: "Laundry Services", icon: GiWashingMachine },
//   { label: "24/7 Security and CCTV", icon: ShieldCheck },
//   { label: "WiFi & DTH Ready", icon: Wifi },
//   { label: "Single Car Parks", icon: Car },
//   { label: "Landscaped Garden", icon: Leaf },
//   { label: "Swimming Pool", icon: Waves },
//   { label: "Fitness Centre", icon: Dumbbell },
//   { label: "Meditation Pavilion", icon: PersonStanding },
//   { label: "Café/Tea Bar", icon: Coffee },
//   { label: "Kids Play Area", icon: Baby },
// ];
// import { Projects } from "../data/UpcomingProjects";

// const ProjectDetails = () => {
//   const [showDownloadPopup, setShowDownloadPopup] = useState(false);
//   const [viewPayment, setViewPayment] = useState(false);
//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   const [isMuted, setIsMuted] = useState(true);
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % images.length);
//         setIsAnimating(false);
//       }, 2000);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };
//   const { key } = useParams();

//   const data =
//     (key &&
//       Object.entries(Projects).find(
//         ([k]) => k.toLowerCase() === key.toLowerCase()
//       )?.[1]) ||
//     null;

//   if (!data) return <div>Project not found</div>;

//   if (!data) return <div>Project not found</div>;
//   const layouts = [
//     { title: "Layout 1", image: Layout1 },
//     { title: "Layout 2", image: Layout2 },
//     { title: "Layout 3", image: Layout3 },
//   ];

//   const highlights = [
//     { icon: Building2, text: "Fully loaded serviced apartments" },
//     { icon: Hotel, text: "Managed by Royal Orchid Group of Hotels" },
//     {
//       icon: PercentCircle,
//       text: "12% assured pre-rentals till possession on the amount paid",
//     },
//     {
//       icon: ShieldCheck,
//       text: "Minimum 5% lease guarantee with rental escalation for 20 years",
//     },
//     { icon: BedDouble, text: "Free stay for 12 nights every year" },
//     {
//       icon: Users,
//       text: "One complimentary event per year for up to 500 guests",
//     },
//     {
//       icon: Percent,
//       text: "30% discount on F&B services across all GHD Group properties",
//     },
//   ];

//   const next = (current + 1) % images.length;

//   return (
//     <div className="bg-white dark:bg-black text-black dark:text-white font-sans">
//       <Navbar />

//       {/* Hero Section */}
//       <div className="relative w-full h-screen overflow-hidden">
//         <div
//           className="w-full h-full flex"
//           style={{
//             transform: `translateX(${isAnimating ? "-100%" : "0%"})`,
//             transition: isAnimating ? "transform 1s ease-in-out" : "none",
//           }}
//         >
//           <img
//             src={images[current]}
//             alt="current"
//             className="w-full h-full object-cover flex-shrink-0"
//             draggable="false"
//           />
//           <img
//             src={images[next]}
//             alt="next"
//             className="w-full h-full object-cover flex-shrink-0"
//             draggable="false"
//           />
//           <img
//             src={images[next]}
//             alt="current"
//             className="w-full h-full object-cover flex-shrink-0"
//             draggable="false"
//           />
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
//         {/* Welcome Section */}
//         <section className="max-w-7xl mx-auto px-6 py-16 space-y-16">
//           {/* Top: Text + Buttons + Video side by side */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//             {/* Left text + buttons */}
//             <div>
//               <h2 className="text-4xl font-extrabold text-[var(--primary-color)] mb-6">
//                 Welcome to Velvet Vista
//               </h2>
//               <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mb-8">
//                 Discover premium living with our studio, 1 BHK Standard, and 1
//                 BHK Premium apartments — fully furnished with modern interiors
//                 and high-end finishes. Managed by a top-tier hospitality group,
//                 Velvet Vista ensures a luxurious, hotel-like experience for
//                 residents and hands-free income for investors.
//               </p>
//               <div className="flex gap-6 flex-wrap">
//                 <button
//                   onClick={() => setShowDownloadPopup(true)}
//                   className="px-8 py-3 text-sm font-semibold rounded-lg bg-[var(--primary-color)] text-white shadow hover:bg-opacity-90 transition"
//                 >
//                   Download Brochure
//                 </button>
//                 <button
//                   onClick={() => setViewPayment(true)}
//                   className="px-8 py-3 text-sm font-semibold rounded-lg border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition"
//                 >
//                   View Payment Plan
//                 </button>
//               </div>
//             </div>

//             {/* Right video */}
//             <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 max-h-[400px]">
//               <button
//                 onClick={toggleMute}
//                 className="absolute top-4 left-4 z-20 p-3 bg-white/90 dark:bg-black/70 rounded-full shadow-md hover:bg-white dark:hover:bg-black transition"
//                 aria-label={isMuted ? "Unmute video" : "Mute video"}
//               >
//                 {isMuted ? (
//                   <VolumeX className="w-6 h-6 text-black dark:text-white" />
//                 ) : (
//                   <Volume2 className="w-6 h-6 text-black dark:text-white" />
//                 )}
//               </button>
//               <video
//                 ref={videoRef}
//                 src={video}
//                 className="w-full h-full object-cover rounded-xl"
//                 autoPlay
//                 muted={isMuted}
//                 loop
//                 playsInline
//               />
//             </div>
//           </div>

//           {/* Highlights section below full width */}
//           <div className=" mt-8">
//             <div className="md:bg-white md:dark:bg-neutral-900 shadow-md rounded-xl md:border border-gray-200 dark:border-gray-700 md:p-8">
//               <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
//                 Project Highlights
//               </h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 list-disc list-inside text-gray-900 dark:text-gray-200 text-base leading-relaxed">
//                 {highlights.map(({ text }, i) => (
//                   <li key={i}>
//                     {text.split(" ").map((word, idx) =>
//                       [
//                         "assured",
//                         "guarantee",
//                         "complimentary",
//                         "discount",
//                       ].includes(word.toLowerCase()) ? (
//                         <strong
//                           key={idx}
//                           className="text-[var(--primary-color)]"
//                         >
//                           {word}{" "}
//                         </strong>
//                       ) : (
//                         word + " "
//                       )
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </section>

//         {/* RERA Section */}
//         <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
//               Officially RERA Registered
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
//               We're proud to announce that{" "}
//               <strong className="text-[var(--primary-color)]">
//                 Velvet Vista by GHD Infra
//               </strong>{" "}
//               is now officially{" "}
//               <strong className="text-[var(--primary-color)]">
//                 RERA approved
//               </strong>
//               , offering complete transparency and legal assurance to all
//               homebuyers.
//             </p>
//             <p className="text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
//               <span className="font-semibold text-[var(--primary-color)]">
//                 RERA Registration No.: PRGO05252368
//               </span>
//             </p>
//             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
//               This certification safeguards your investment, guarantees timely
//               possession, and reflects our commitment to delivering trusted,
//               high-quality developments with full regulatory compliance.
//             </p>
//           </div>
//           <img
//             src={rera}
//             alt="RERA Certificate"
//             className="w-full max-w-sm rounded-xl shadow-lg"
//           />
//         </section>

//         {/* Features & Amenities */}
//         <section>
//           <h3 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
//             Features & Amenities
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             {layouts.map((layout, index) => (
//               <img
//                 key={index}
//                 src={layout.image}
//                 alt={layout.title}
//                 className="rounded-xl shadow-lg"
//               />
//             ))}
//           </div>
//         </section>

//         {/* Highlighted Features */}
//         <section>
//           <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {features.map(({ label, icon: Icon }, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 p-5 border rounded-xl bg-white dark:bg-neutral-900 shadow hover:shadow-md transition"
//               >
//                 <Icon className="w-6 h-6 text-[var(--primary-color)]" />
//                 <span className="text-gray-800 dark:text-gray-200 text-base">
//                   {label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Location & Map */}
//         <section className="grid md:grid-cols-2 gap-10 items-start">
//           <div>
//             <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
//               <MapPin className="w-5 h-5 text-green-600" />
//               Connectivity Of The Property
//             </h4>
//             <ul className="space-y-3 text-gray-800 dark:text-gray-300 text-base">
//               {[
//                 "25 minutes drive from Mopa Airport",
//                 "10 minutes drive from casino zone",
//                 "5 mins to Mall De Goa",
//                 "3 mins to NH66",
//                 "10 mins to Panjim City",
//                 "10 mins to nearby beaches",
//               ].map((text, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="mt-1 w-2 h-2 rounded-sm bg-[var(--primary-color)] shrink-0" />
//                   <span>{text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-full h-80 md:h-full">
//             {/* <iframe
//               src={data.connectivity.embeddedMapUrl}
//               className="w-full h-full rounded-xl border-none"
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe> */}
//           </div>
//         </section>
//       </div>

//       {/* Call to Action + Footer */}
//       <PromptConsultation />
//       <Footer />

//       {/* Modals */}
//       {showDownloadPopup && (
//         <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
//           <DownloadBrochureForm onClose={() => setShowDownloadPopup(false)} />
//         </div>
//       )}
//       {viewPayment && (
//         <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
//           <DownloadPaymentPlan onClose={() => setViewPayment(false)} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectDetails;
