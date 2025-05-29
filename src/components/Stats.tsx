import { Award, Handshake, ThumbsUp, Users, HomeIcon } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const statsData = [
  {
    icon: <HomeIcon className="w-7 h-7 text-indigo-600" />,
    value: 7,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: <Award className="w-7 h-7 text-yellow-500" />,
    value: 20,
    suffix: "+",
    label: "Prestigious Awards",
  },
  {
    icon: <ThumbsUp className="w-7 h-7 text-green-500" />,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: <Handshake className="w-7 h-7 text-blue-500" />,
    value: 50,
    suffix: "+",
    label: "Strategic Partnerships",
  },
  {
    icon: <Users className="w-7 h-7 text-rose-500" />,
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        container.scrollLeft = scrollAmount += scrollStep;
      }
    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black text-black dark:text-white"
    >
      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {statsData.map((item, index) => (
          <StatCard key={index} item={item} inView={inView} />
        ))}
      </div>

      {/* Mobile Scrollable Carousel */}
      <div
        ref={scrollRef}
        className="md:hidden flex overflow-x-auto gap-4 no-scrollbar px-1"
      >
        {statsData.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-64">
            <StatCard item={item} inView={inView} />
          </div>
        ))}
      </div>
    </section>
  );
}

function StatCard({ item, inView }: { item: any; inView: boolean }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-xl bg-gray-100 dark:bg-neutral-900 shadow-sm border border-gray-200 dark:border-neutral-700 transition-all">
      <div className="shrink-0">{item.icon}</div>
      <div>
        <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {inView ? (
            <CountUp end={item.value} duration={1.5} suffix={item.suffix} />
          ) : (
            `0${item.suffix}`
          )}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
      </div>
    </div>
  );
}
