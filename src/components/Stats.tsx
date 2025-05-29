import { Award, Handshake, ThumbsUp, Users, HomeIcon } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const statsData = [
  {
    icon: <HomeIcon className="w-6 h-6 text-indigo-600" />,
    value: 7,
    suffix: "+",
    label: "Years of Excellence",
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-500" />,
    value: 20,
    suffix: "+",
    label: "Prestigious Awards",
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-green-500" />,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    icon: <Handshake className="w-6 h-6 text-blue-500" />,
    value: 50,
    suffix: "+",
    label: "Strategic Partnerships",
  },
  {
    icon: <Users className="w-6 h-6 text-rose-500" />,
    value: 1000,
    suffix: "+",
    label: "Happy Clients",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-6 py-4 rounded-full border dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900 shadow-sm"
          >
            {item.icon}
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                {inView ? (
                  <CountUp
                    end={item.value}
                    duration={1.5}
                    suffix={item.suffix}
                  />
                ) : (
                  `0${item.suffix}`
                )}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
