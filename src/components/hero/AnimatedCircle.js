import { motion } from "framer-motion";
import { FaRegClock, FaRunning, FaThumbsUp, FaComments, FaPuzzlePiece, FaCode } from "react-icons/fa"; // Added FaCode for coding icon
import myProfile from "../../assets/images/12.jpg";

const cards = [
  { text: "On-Time Delivery", shape: "rounded-tl-3xl rounded-br-3xl", icon: <FaRegClock className="w-5 h-5 mr-2" /> },
  { text: "High Performance", shape: "rounded-xl", highlight: true, icon: <FaCode className="w-5 h-5 mr-2" /> }, // High performance card with FaCode icon
  { text: "Client Satisfaction", shape: "rounded-tr-3xl rounded-bl-3xl", icon: <FaThumbsUp className="w-5 h-5 mr-2" /> },
  { text: "Clear Communication", shape: "rounded-tl-3xl rounded-bl-3xl", icon: <FaComments className="w-5 h-5 mr-2" /> },
  { text: "Problem Solving", shape: "rounded-tr-3xl rounded-br-3xl", icon: <FaPuzzlePiece className="w-5 h-5 mr-2" /> }
];

export default function BusinessQualityBadges() {
  return (
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-10 md:mt-0 flex flex-col items-center justify-center">
      {/* Profile Image */}
      
      <div className="relative mb-8">
        <img
          src={myProfile}
          alt="Profile"
          width={140}
          height={140}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>

      {/* Arranged Card Layout */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {/* Row 1 */}
        <AnimatedCard {...cards[0]} index={0} alignment="right" />
        <AnimatedCard {...cards[2]} index={1} alignment="left" />
        
        {/* Centered Middle */}
        <div className="col-span-2 flex justify-center">
          <AnimatedCard {...cards[1]} index={2} center />
        </div>
        
        {/* Row 3 */}
        <AnimatedCard {...cards[3]} index={3} alignment="right" />
        <AnimatedCard {...cards[4]} index={4} alignment="left" />
      </div>
    </div>
  );
}

function AnimatedCard({ text, shape, index, center = false, highlight = false, icon }) {
  return (
    <motion.div
      className={`px-5 py-3 text-sm font-medium text-gray-800 shadow-sm border 
        ${highlight ? "bg-green-500 text-white" : "bg-orange-200"}  // High Performance has green bg
        ${shape} ${center ? "w-2/3 text-center" : "w-full text-center"}`}
      animate={{
        y: [0, -6, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: index * 0.3
        }
      }}
      whileHover={{
        backgroundColor: "#fb923c", // hover: orange-400
        color: "#ffffff",
        scale: 1.04,
        boxShadow: "0 8px 20px rgba(251, 146, 60, 0.4)"
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex items-center justify-center">
        {icon}
        <span>{text}</span>
      </div>
    </motion.div>
  );
}
