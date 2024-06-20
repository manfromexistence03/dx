"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Button } from "../ui/button";
import { Button } from "../button";
import VariantCarousel from "./variant-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function IntroText() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial="hidden"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Admin Panel that changes the way you use it.
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-6 text-lg leading-8"
          >
            A collection of handmade, free, and ready to use operations &
            variants operations for your next adminastration work.
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-10 flex items-center justify-center gap-x-6 "
          >
            <Link href="/universities" className="z-50">
              {/* <Button variant={"secondary"}>Admin Panel</Button> */}
              <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
                Admin Panel
              </Button>
            </Link>

            <Link href="https://www.upwork.com/freelancers/~01221bf135ed62b3b3" className="z-50">
              {/* <Button variant={"outline"}>
                MD MAHABUB HOSSAIN
              </Button> */}

              <Button variant="expandIcon" Icon={ArrowLeftIcon} iconPlacement="left" className="border border-input bg-background hover:bg-accent text-accent-foreground">
                Learn more
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-16 flow-root sm:mt-24">
        <motion.div
          className="rounded-md"
          initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
          animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="-m-2 rounded-xl  p-2 ring-1 ring-inset ring-primary/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl mb-5">
                  Admin Panel With High Level Customization.
                </h1>

                <VariantCarousel />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
