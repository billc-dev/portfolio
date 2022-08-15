import { m as motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Animate: FC<Props> = ({ children, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
