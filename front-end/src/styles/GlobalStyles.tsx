// styles/GlobalStyles.tsx

import React from "react";
import { Global, css } from "@emotion/react";

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");

        /* CSS Reset & Base Styles */
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* Scrollbar Styles */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #8b83ff 0%, #ff8ca3 100%);
        }

        /* Selection Styles */
        ::selection {
          background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
          color: white;
        }

        /* Typography */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          line-height: 1.2;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        button {
          cursor: pointer;
          font-family: inherit;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        /* Utility Classes */
        .gradient-text {
          background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-bg {
          background: linear-gradient(135deg, #6c63ff 0%, #ff6584 100%);
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .glass-effect-light {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.95);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(108, 99, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(108, 99, 255, 0.4);
          }
        }

        /* Animation Utility Classes */
        .animate-fade-in {
          animation: fadeIn 0.5s ease forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease forwards;
        }

        .animate-slide-down {
          animation: slideDown 0.6s ease forwards;
        }

        .animate-slide-left {
          animation: slideLeft 0.6s ease forwards;
        }

        .animate-slide-right {
          animation: slideRight 0.6s ease forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease forwards;
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 4s ease-in-out infinite;
        }

        /* Loading Shimmer Effect */
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.02) 25%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.02) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 2s ease-in-out infinite;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }
        }

        /* Responsive Text */
        .text-xs {
          font-size: 0.75rem;
        }
        .text-sm {
          font-size: 0.875rem;
        }
        .text-base {
          font-size: 1rem;
        }
        .text-lg {
          font-size: 1.125rem;
        }
        .text-xl {
          font-size: 1.25rem;
        }
        .text-2xl {
          font-size: 1.5rem;
        }
        .text-3xl {
          font-size: 1.875rem;
        }
        .text-4xl {
          font-size: 2.25rem;
        }
        .text-5xl {
          font-size: 3rem;
        }
        .text-6xl {
          font-size: 3.75rem;
        }

        @media (max-width: 768px) {
          .text-4xl {
            font-size: 1.875rem;
          }
          .text-5xl {
            font-size: 2.25rem;
          }
          .text-6xl {
            font-size: 2.5rem;
          }
        }

        /* Flex Utilities */
        .flex {
          display: flex;
        }
        .flex-col {
          flex-direction: column;
        }
        .items-center {
          align-items: center;
        }
        .justify-center {
          justify-content: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .gap-1 {
          gap: 0.25rem;
        }
        .gap-2 {
          gap: 0.5rem;
        }
        .gap-3 {
          gap: 0.75rem;
        }
        .gap-4 {
          gap: 1rem;
        }
        .gap-5 {
          gap: 1.25rem;
        }
        .gap-6 {
          gap: 1.5rem;
        }

        /* Grid Utilities */
        .grid {
          display: grid;
        }
        .grid-cols-2 {
          grid-template-columns: repeat(2, 1fr);
        }
        .grid-cols-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        .grid-cols-4 {
          grid-template-columns: repeat(4, 1fr);
        }

        @media (max-width: 768px) {
          .grid-cols-2,
          .grid-cols-3,
          .grid-cols-4 {
            grid-template-columns: 1fr;
          }
        }

        /* Spacing */
        .m-0 {
          margin: 0;
        }
        .m-1 {
          margin: 0.25rem;
        }
        .m-2 {
          margin: 0.5rem;
        }
        .m-3 {
          margin: 0.75rem;
        }
        .m-4 {
          margin: 1rem;
        }
        .m-5 {
          margin: 1.25rem;
        }
        .m-6 {
          margin: 1.5rem;
        }

        .p-0 {
          padding: 0;
        }
        .p-1 {
          padding: 0.25rem;
        }
        .p-2 {
          padding: 0.5rem;
        }
        .p-3 {
          padding: 0.75rem;
        }
        .p-4 {
          padding: 1rem;
        }
        .p-5 {
          padding: 1.25rem;
        }
        .p-6 {
          padding: 1.5rem;
        }

        /* Text Colors */
        .text-white {
          color: #ffffff;
        }
        .text-gray-100 {
          color: #f5f5f5;
        }
        .text-gray-200 {
          color: #e0e0e0;
        }
        .text-gray-300 {
          color: #bdbdbd;
        }
        .text-gray-400 {
          color: #9e9e9e;
        }
        .text-gray-500 {
          color: #757575;
        }
        .text-gray-600 {
          color: #616161;
        }
        .text-gray-700 {
          color: #424242;
        }

        .text-primary {
          color: #6c63ff;
        }
        .text-secondary {
          color: #ff6584;
        }
        .text-success {
          color: #4caf50;
        }
        .text-warning {
          color: #ffc107;
        }
        .text-danger {
          color: #ff4757;
        }

        /* Background Colors */
        .bg-primary {
          background: #6c63ff;
        }
        .bg-secondary {
          background: #ff6584;
        }
        .bg-dark {
          background: #0a0a0a;
        }
        .bg-darker {
          background: #1a1a1a;
        }
        .bg-dark-card {
          background: rgba(255, 255, 255, 0.03);
        }

        /* Border Radius */
        .rounded-none {
          border-radius: 0;
        }
        .rounded-sm {
          border-radius: 4px;
        }
        .rounded {
          border-radius: 8px;
        }
        .rounded-md {
          border-radius: 12px;
        }
        .rounded-lg {
          border-radius: 16px;
        }
        .rounded-xl {
          border-radius: 20px;
        }
        .rounded-2xl {
          border-radius: 24px;
        }
        .rounded-3xl {
          border-radius: 32px;
        }
        .rounded-full {
          border-radius: 9999px;
        }

        /* Shadows */
        .shadow-sm {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
        }
        .shadow {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .shadow-md {
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        }
        .shadow-lg {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }
        .shadow-xl {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .shadow-2xl {
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
        }
        .shadow-primary {
          box-shadow: 0 4px 20px rgba(108, 99, 255, 0.3);
        }
        .shadow-secondary {
          box-shadow: 0 4px 20px rgba(255, 101, 132, 0.3);
        }

        /* Transitions */
        .transition {
          transition: all 0.3s ease;
        }
        .transition-fast {
          transition: all 0.15s ease;
        }
        .transition-slow {
          transition: all 0.6s ease;
        }

        /* Hover Effects */
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-scale-sm:hover {
          transform: scale(1.02);
        }
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(108, 99, 255, 0.3);
        }
        .hover-lift:hover {
          transform: translateY(-4px);
        }

        /* Hide Scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Text Overflow */
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Screen Reader Only */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
