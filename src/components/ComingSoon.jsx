import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, ExternalLink } from "lucide-react";

const ComingSoon = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Background dot pattern
  const DotPattern = ({ className }) => {
    return (
      <div
        className={`absolute ${className} opacity-30 pointer-events-none max-sm:opacity-20 md:opacity-20 dark:opacity-10`}
      >
        <div className="grid grid-cols-10 gap-6">
          {Array(60)
            .fill()
            .map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"
              />
            ))}
        </div>
      </div>
    );
  };

  // Animation to show content after page load
  useEffect(() => {
    setIsLoaded(true);

    // Auto-redirect after 30 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = "https://ethoscare.solutions";
    }, 20000);

    return () => clearTimeout(redirectTimer);
  }, []);

  // Handle redirect to main site
  const redirectToMainSite = () => {
    window.location.href = "https://ethoscare.solutions";
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center px-4 relative overflow-hidden py-24">
        {/* Gradient background */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 dark:from-blue-900/20 to-transparent" />

        {/* Dot patterns */}
        <DotPattern className="top-20 left-10" />
        <DotPattern className="bottom-20 right-10" />

        {/* Decorative circles */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-70" />

        <motion.div
          className="z-10 max-w-xl w-full p-8 md:p-12 bg-white dark:bg-neutral-800 shadow-xl rounded-2xl border border-gray-100 dark:border-neutral-700 relative"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Coming Soon overlay decoration */}
          <div className="absolute -top-10 right-10 text-7xl font-bold text-blue-50 dark:text-blue-900/20 select-none">
            Soon
          </div>

          {/* Content */}
          <div className="relative">
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Coming Soon
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  We're working on something amazing
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-8" variants={itemVariants}>
              <p className="text-gray-600 dark:text-gray-300">
                Working on something amazing, till then visit our main website.
                You will be automatically redirected in 20 seconds.
              </p>

              {/* Visit Main Website button */}
              <div className="text-center">
                <button
                  onClick={redirectToMainSite}
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Our Main Website
                </button>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-6 pt-2">
                <a
                  href="https://x.com/EthosCareCo"
                  className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                  </svg>
                </a>
              </div>

              {/* Contact info */}
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-6">
                <div className="flex justify-center items-center gap-2 mb-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:care@medicord.in"
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    care@medicord.in
                  </a>
                </div>
                <p>
                  &copy; {new Date().getFullYear()} EthosCare Solutions Pvt.
                  Ltd.. All rights reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ComingSoon;
