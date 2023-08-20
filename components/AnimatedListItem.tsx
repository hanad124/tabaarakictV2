import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";

interface AnimatedListItemProps {
  children: React.ReactNode;
}

const AnimatedListItem: React.FC<AnimatedListItemProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsVisible(false);
      // Wait for the slide transition to complete before setting isVisible to true
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    if (carouselRef.current) {
      carouselRef.current.carousel.on("select", handleSlideChange);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.carousel.off("select", handleSlideChange);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 500,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedListItem;