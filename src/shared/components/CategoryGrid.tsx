"use client";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Casual Jackets",
    img: "https://plus.unsplash.com/premium_photo-1707816501228-1d814ad62d7b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Workwear Jackets",
    img: "https://images.unsplash.com/photo-1624548140129-74786c5f1279?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Puffer Jackets",
    img: "https://plus.unsplash.com/premium_photo-1707928727870-62882e51f93d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Hoodies",
    img: "https://images.unsplash.com/photo-1603692019879-cc9748ed7ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((c) => (
        <motion.figure
          key={c.title}
          className="overflow-hidden rounded-2xl border bg-white shadow-md cursor-pointer"
          whileHover={{
            scale: 1.05,
            rotate: 1,
            boxShadow: `
              0px 10px 20px rgba(0,0,0,0.25),
              0px 6px 15px rgba(0, 150, 255, 0.3),
              0px 0px 20px rgba(0, 200, 255, 0.4)
            `,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}
        >
          <motion.img
            src={c.img}
            alt={c.title}
            className="h-40 w-full object-cover md:h-48"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <figcaption className="p-3 text-center font-semibold">
            {c.title}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
