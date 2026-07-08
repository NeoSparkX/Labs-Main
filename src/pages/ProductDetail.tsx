import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { storeProducts, StoreProduct } from "@/data/storeProducts";
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Globe, Check, Star, Shield, Zap } from "lucide-react";

// ── Browser Detection ─────────────────────────────────────────────────────────
const useBrowser = () => {
  const [browser, setBrowser] = useState("chrome");
  useEffect(() => {
    const ua = navigator.userAgent;
    if (ua.match(/firefox|fxios/i)) setBrowser("firefox");
    else if (ua.match(/edg/i)) setBrowser("edge");
    else setBrowser("chrome");
  }, []);
  return browser;
};

// ── Google Play Badge ─────────────────────────────────────────────────────────
const GooglePlayBadge = ({ onClick }: { onClick: () => void }) => (
  <button onClick={onClick} className="w-fit inline-flex items-center gap-3 bg-[#f2f4f7] hover:bg-[#e2e6ea] text-black px-5 py-3 rounded-[14px] transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200/60 group">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466 511.98" className="w-7 h-7 shrink-0 transition-transform group-hover:scale-105 duration-300">
      <g fillRule="nonzero">
        <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
        <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
        <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
        <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
      </g>
    </svg>
    <div className="flex flex-col items-start justify-center text-left">
      <span className="text-[9px] leading-[1.1] text-gray-500 font-bold tracking-[0.05em] uppercase">GET IT ON</span>
      <span className="text-[18px] leading-[1.1] font-semibold text-gray-900 tracking-tight">Google Play</span>
    </div>
  </button>
);

// ── Browser Extension CTAs ────────────────────────────────────────────────────
const ExtensionCTA = ({ product }: { product: StoreProduct }) => {
  const browser = useBrowser();

  const FirefoxBtn = () => (
    <a href={product.firefoxAddonUrl || "#"} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm text-white border border-[#FF7139]/30 hover:border-[#FF7139] transition-all" style={{ background: "rgba(255,113,57,0.1)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 shrink-0">
        <defs>
          <radialGradient id="ff-g" cx="210%" cy="-100%" r="290%">
            <stop offset=".1" stopColor="#ffe226"/>
            <stop offset=".79" stopColor="#ff7139"/>
          </radialGradient>
          <radialGradient id="ff-c" cx="49%" cy="40%" r="128%" gradientTransform="matrix(.82 0 0 1 .088 0)">
            <stop offset=".3" stopColor="#960e18"/>
            <stop offset=".35" stopColor="#b11927" stopOpacity=".74"/>
            <stop offset=".43" stopColor="#db293d" stopOpacity=".34"/>
            <stop offset=".5" stopColor="#f5334b" stopOpacity=".09"/>
            <stop offset=".53" stopColor="#ff3750" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="ff-d" cx="48%" cy="-12%" r="140%">
            <stop offset=".13" stopColor="#fff44f"/>
            <stop offset=".53" stopColor="#ff980e"/>
          </radialGradient>
          <radialGradient id="ff-e" cx="22.76%" cy="110.11%" r="100%">
            <stop offset=".35" stopColor="#3a8ee6"/>
            <stop offset=".67" stopColor="#9059ff"/>
            <stop offset="1" stopColor="#c139e6"/>
          </radialGradient>
          <radialGradient id="ff-f" cx="52%" cy="33%" r="59%" gradientTransform="scale(.9 1)">
            <stop offset=".21" stopColor="#9059ff" stopOpacity="0"/>
            <stop offset=".97" stopColor="#6e008b" stopOpacity=".6"/>
          </radialGradient>
          <radialGradient id="ff-b" cx="87.4%" cy="-12.9%" r="128%" gradientTransform="matrix(.8 0 0 1 .178 .129)">
            <stop offset=".13" stopColor="#ffbd4f"/>
            <stop offset=".28" stopColor="#ff980e"/>
            <stop offset=".47" stopColor="#ff3750"/>
            <stop offset=".78" stopColor="#eb0878"/>
            <stop offset=".86" stopColor="#e50080"/>
          </radialGradient>
          <radialGradient id="ff-h" cx="84%" cy="-41%" r="180%">
            <stop offset=".11" stopColor="#fff44f"/>
            <stop offset=".46" stopColor="#ff980e"/>
            <stop offset=".72" stopColor="#ff3647"/>
            <stop offset=".9" stopColor="#e31587"/>
          </radialGradient>
          <radialGradient id="ff-i" cx="16.1%" cy="-18.6%" r="348.8%" gradientTransform="scale(1 .47) rotate(84 .279 -.297)">
            <stop offset="0" stopColor="#fff44f"/>
            <stop offset=".3" stopColor="#ff980e"/>
            <stop offset=".57" stopColor="#ff3647"/>
            <stop offset=".74" stopColor="#e31587"/>
          </radialGradient>
          <radialGradient id="ff-j" cx="18.9%" cy="-42.5%" r="238.4%">
            <stop offset=".14" stopColor="#fff44f"/>
            <stop offset=".48" stopColor="#ff980e"/>
            <stop offset=".66" stopColor="#ff3647"/>
            <stop offset=".9" stopColor="#e31587"/>
          </radialGradient>
          <radialGradient id="ff-k" cx="159.3%" cy="-44.72%" r="313.1%">
            <stop offset=".09" stopColor="#fff44f"/>
            <stop offset=".63" stopColor="#ff980e"/>
          </radialGradient>
          <linearGradient id="ff-a" x1="87.25%" y1="15.5%" x2="9.4%" y2="93.1%">
            <stop offset=".05" stopColor="#fff44f"/>
            <stop offset=".37" stopColor="#ff980e"/>
            <stop offset=".53" stopColor="#ff3647"/>
            <stop offset=".7" stopColor="#e31587"/>
          </linearGradient>
          <linearGradient id="ff-l" x1="80%" y1="14%" x2="18%" y2="84%">
            <stop offset=".17" stopColor="#fff44f" stopOpacity=".8"/>
            <stop offset=".6" stopColor="#fff44f" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484a120.249 120.249 0 00-66.142 25.488 71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.913c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.08 12.7-2.365 15-.022.177-.032.347-.053.524a229.066 229.066 0 00-3.9 33.157c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zM201.716 354.447c1.124.537 2.18 1.124 3.334 1.639.048.033.114.07.163.1a126.191 126.191 0 01-3.497-1.739zm55.053-144.93zm198.131-30.59l-.032-.233c.012.085.027.174.04.259z" fill="url(#ff-a)" />
        <path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-b)" />
        <path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0-.058.011.048.036.226.012.085.027.174.04.259 22.675 61.47 10.322 123.978-7.479 162.175-27.539 59.1-94.215 119.67-198.576 116.716C136.1 454.651 36.766 370.988 18.223 261.41c-3.379-17.28 0-26.054 1.7-40.084-2.071 10.816-2.86 13.94-3.9 33.157 0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746z" fill="url(#ff-c)" />
        <path d="M361.922 194.6c.524.368 1 .734 1.493 1.1a130.706 130.706 0 00-22.31-29.112C266.4 91.892 321.516 4.626 330.811.194c.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.051 0 84.289 24.77 105.301 61.487z" fill="url(#ff-d)" />
        <path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-e)" />
        <path d="M256.772 209.514c-.393 5.978-21.514 26.593-28.9 26.593-68.339 0-79.432 41.335-79.432 41.335 3.027 34.81 27.261 63.475 56.611 78.643 1.339.692 2.694 1.317 4.05 1.935a132.768 132.768 0 007.059 2.886 106.743 106.743 0 0031.271 6.031c119.78 5.618 142.986-143.194 56.545-186.408 22.137-3.85 45.115 5.053 57.947 14.067-21.012-36.714-60.25-61.484-105.3-61.484-2.85 0-5.641.235-8.442.429a120.249 120.249 0 00-66.142 25.488c3.664 3.1 7.8 7.244 16.514 15.828 16.302 16.067 58.13 32.705 58.219 34.657z" fill="url(#ff-f)" />
        <path d="M170.829 151.036a244.042 244.042 0 014.981 3.3 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7 1.155-.033 36.014-.66 53.543 10.732z" fill="url(#ff-g)" />
        <path d="M18.223 261.41C36.766 370.988 136.1 454.651 248.855 457.844c104.361 2.954 171.037-57.62 198.576-116.716 17.8-38.2 30.154-100.7 7.479-162.175l-.008-.026-.032-.233c-.025-.178-.04-.284-.036-.226 0 .039.015.136.047.4 8.524 55.661-19.79 109.584-64.051 146.044l-.133.313c-86.245 70.223-168.774 42.368-185.484 30.966a144.108 144.108 0 01-3.5-1.743c-50.282-24.029-71.054-69.838-66.6-109.124-42.457 0-56.934-35.809-56.934-35.809s38.119-27.179 88.358-3.541c46.53 21.893 90.228 3.543 90.233 3.541-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 282.929 282.929 0 00-4.981-3.3c-17.528-11.392-52.388-10.765-53.543-10.735h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.442 26.919c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-8.65 37.842-4.44 57.199z" fill="url(#ff-h)" />
        <path d="M341.105 166.587a130.706 130.706 0 0122.31 29.112c1.323.994 2.559 1.985 3.608 2.952 54.482 50.2 25.936 121.2 23.807 126.26 44.261-36.46 72.575-90.383 64.051-146.044C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1-9.291 4.428-64.407 91.694 10.298 166.389z" fill="url(#ff-i)" />
        <path d="M367.023 198.651c-1.049-.967-2.285-1.958-3.608-2.952-.489-.368-.969-.734-1.493-1.1-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1 16.71 11.4 99.239 39.257 185.484-30.966l.133-.313c2.129-5.054 30.675-76.057-23.807-126.258z" fill="url(#ff-j)" />
        <path d="M148.439 277.443s11.093-41.335 79.432-41.335c7.388 0 28.509-20.615 28.9-26.593s-43.7 18.352-90.233-3.541c-50.239-23.638-88.358 3.541-88.358 3.541s14.477 35.809 56.934 35.809c-4.453 39.286 16.319 85.1 66.6 109.124 1.124.537 2.18 1.124 3.334 1.639-29.348-15.169-53.582-43.834-56.609-78.644z" fill="url(#ff-k)" />
        <path d="M478.711 166.353c-10.445-25.124-31.6-52.248-48.212-60.821 13.52 26.505 21.345 53.093 24.335 72.936 0 .039.015.136.047.4C427.706 111.135 381.627 83.823 344 24.355c-1.9-3.007-3.805-6.022-5.661-9.2a73.716 73.716 0 01-2.646-4.972A43.7 43.7 0 01332.1.677a.626.626 0 00-.546-.644.818.818 0 00-.451 0c-.034.012-.084.051-.12.065-.053.021-.12.069-.176.1.027-.036.083-.117.1-.136-60.37 35.356-80.85 100.761-82.732 133.484 2.8-.194 5.592-.429 8.442-.429 45.053 0 84.291 24.77 105.3 61.484-12.832-9.014-35.81-17.917-57.947-14.067 86.441 43.214 63.235 192.026-56.545 186.408a106.743 106.743 0 01-31.271-6.031 134.51 134.51 0 01-7.059-2.886c-1.356-.618-2.711-1.243-4.05-1.935.048.033.114.07.163.1a144.108 144.108 0 01-3.5-1.743c1.124.537 2.18 1.124 3.334 1.639-29.35-15.168-53.584-43.833-56.611-78.643 0 0 11.093-41.335 79.432-41.335 7.388 0 28.509-20.615 28.9-26.593-.089-1.952-41.917-18.59-58.223-34.656-8.713-8.584-12.85-12.723-16.514-15.828a71.355 71.355 0 00-6.225-4.7 111.338 111.338 0 01-.674-58.732c-24.688 11.241-43.89 29.01-57.85 44.7h-.111c-9.527-12.067-8.855-51.873-8.312-60.184-.114-.515-7.107 3.63-8.023 4.255a175.073 175.073 0 00-23.486 20.12 210.478 210.478 0 00-22.435 26.916c0 .012-.007.026-.011.038 0-.013.007-.026.011-.038a202.838 202.838 0 00-32.247 72.805c-.115.521-.212 1.061-.324 1.586-.452 2.116-2.486 12.853-2.77 15.156-.022.177.021-.176 0 0a279.565 279.565 0 00-3.544 33.53c0 .41-.025.816-.025 1.227C16 388.418 123.6 496 256.324 496c118.865 0 217.56-86.288 236.882-199.63.407-3.076.733-6.168 1.092-9.271 4.777-41.21-.53-84.525-15.587-120.746zm-23.841 12.341c.012.085.027.174.04.259l-.008-.026-.032-.233z" fill="url(#ff-l)" />
      </svg>
      Add via Firefox Addon</a>
  );

  const EdgeBtn = () => (
    <a href={product.edgeAddonUrl || "#"} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm text-white border border-[#0078D7]/30 hover:border-[#0078D7] transition-all" style={{ background: "rgba(0,120,215,0.1)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 shrink-0">
        <defs>
          <radialGradient id="edge-b" cx="161.8" cy="68.9" r="95.4" gradientTransform="matrix(1 0 0 -.95 0 248.8)" gradientUnits="userSpaceOnUse">
            <stop offset=".7" stopOpacity="0"/>
            <stop offset=".9" stopOpacity=".5"/>
            <stop offset="1"/>
          </radialGradient>
          <radialGradient id="edge-d" cx="-340.3" cy="63" r="143.2" gradientTransform="matrix(.15 -.99 -.8 -.12 176.6 -125.4)" gradientUnits="userSpaceOnUse">
            <stop offset=".8" stopOpacity="0"/>
            <stop offset=".9" stopOpacity=".5"/>
            <stop offset="1"/>
          </radialGradient>
          <radialGradient id="edge-e" cx="113.4" cy="570.2" r="202.4" gradientTransform="matrix(-.04 1 2.13 .08 -1179.5 -106.7)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#35c1f1"/>
            <stop offset=".1" stopColor="#34c1ed"/>
            <stop offset=".2" stopColor="#2fc2df"/>
            <stop offset=".3" stopColor="#2bc3d2"/>
            <stop offset=".7" stopColor="#36c752"/>
          </radialGradient>
          <radialGradient id="edge-f" cx="376.5" cy="568" r="97.3" gradientTransform="matrix(.28 .96 .78 -.23 -303.8 -148.5)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#66eb6e"/>
            <stop offset="1" stopColor="#66eb6e" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="edge-a" x1="63.3" y1="84" x2="241.7" y2="84" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0c59a4"/>
            <stop offset="1" stopColor="#114a8b"/>
          </linearGradient>
          <linearGradient id="edge-c" x1="157.3" y1="161.4" x2="46" y2="40.1" gradientTransform="matrix(1 0 0 -1 0 266)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1b9de2"/>
            <stop offset=".2" stopColor="#1595df"/>
            <stop offset=".7" stopColor="#0680d7"/>
            <stop offset="1" stopColor="#0078d4"/>
          </linearGradient>
        </defs>
        <path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" style={{fill:'url(#edge-a)'}}/>
        <path d="M235.7 195.5a93.7 93.7 0 0 1-10.6 4.7 101.9 101.9 0 0 1-35.9 6.4c-47.3 0-88.5-32.5-88.5-74.3a31.5 31.5 0 0 1 16.4-27.3c-42.8 1.8-53.8 46.4-53.8 72.5 0 74 68.1 81.4 82.8 81.4 7.9 0 19.8-2.3 27-4.6l1.3-.4a128.3 128.3 0 0 0 66.6-52.8 4 4 0 0 0-5.3-5.6Z" transform="translate(-4.6 -5)" style={{isolation:'isolate',opacity:.35,fill:'url(#edge-b)'}}/>
        <path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" style={{fill:'url(#edge-c)'}}/>
        <path d="M110.3 246.3A79.2 79.2 0 0 1 87.6 225a80.7 80.7 0 0 1 29.5-120c3.2-1.5 8.5-4.1 15.6-4a32.4 32.4 0 0 1 25.7 13 31.9 31.9 0 0 1 6.3 18.7c0-.2 24.5-79.6-80-79.6-43.9 0-80 41.6-80 78.2a130.2 130.2 0 0 0 12.1 56 128 128 0 0 0 156.4 67 75.5 75.5 0 0 1-62.8-8Z" transform="translate(-4.6 -5)" style={{opacity:.41,fill:'url(#edge-d)',isolation:'isolate'}}/>
        <path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" style={{fill:'url(#edge-e)'}}/>
        <path d="M157 153.8c-.9 1-3.4 2.5-3.4 5.6 0 2.6 1.7 5.2 4.8 7.3 14.3 10 41.4 8.6 41.5 8.6a59.6 59.6 0 0 0 30.3-8.3 61.4 61.4 0 0 0 30.4-52.9c.3-22.4-8-37.3-11.3-43.9C228 28.8 182.3 5 132.6 5a128 128 0 0 0-128 126.2c.5-36.5 36.8-66 80-66 3.5 0 23.5.3 42 10a72.6 72.6 0 0 1 30.9 29.3c6.1 10.6 7.2 24.1 7.2 29.5s-2.7 13.3-7.8 19.9Z" transform="translate(-4.6 -5)" style={{fill:'url(#edge-f)'}}/>
      </svg>
      Add to Edge
    </a>
  );

  const ChromeBtn = () => (
    <a href={product.chromeStoreUrl || "#"} target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm text-white border border-white/20 hover:border-white/50 transition-all" style={{ background: "rgba(255,255,255,0.05)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5 shrink-0">
        <defs>
          <linearGradient id="chrome-a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#d93025"/>
            <stop offset="1" stopColor="#ea4335"/>
          </linearGradient>
          <linearGradient id="chrome-b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fcc934"/>
            <stop offset="1" stopColor="#fbbc04"/>
          </linearGradient>
          <linearGradient id="chrome-c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#1e8e3e"/>
            <stop offset="1" stopColor="#34a853"/>
          </linearGradient>
        </defs>
        <circle cx="24" cy="23.9947" r="12" style={{fill:'#fff'}}/>
        <path d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z" style={{fill:'none'}}/>
        <path d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z" style={{fill:'url(#chrome-a)'}}/>
        <circle cx="24" cy="24" r="9.5" style={{fill:'#1a73e8'}}/>
        <path d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z" style={{fill:'url(#chrome-b)'}}/>
        <path d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z" style={{fill:'url(#chrome-c)'}}/>
      </svg>
      Add via Chrome Web Store
    </a>
  );

  return (
    <div className="flex flex-wrap gap-3">
      {browser === "firefox" ? <FirefoxBtn /> : browser === "edge" ? <EdgeBtn /> : <ChromeBtn />}
      {browser !== "firefox" && <FirefoxBtn />}
      {browser !== "edge" && <EdgeBtn />}
      {browser !== "chrome" && <ChromeBtn />}
    </div>
  );
};

// ── Screenshot Gallery ────────────────────────────────────────────────────────
const Screenshots = ({ product }: { product: StoreProduct }) => {
  const [active, setActive] = useState(0);
  const isMobile = product.type === "mobile";

  return (
    <div>
      {/* Main preview */}
      <div className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[hsl(220_15%_5%)] mb-4 ${isMobile ? "max-w-xs mx-auto" : "w-full"}`} style={{ aspectRatio: isMobile ? "9/19" : "16/9" }}>
        <AnimatePresence mode="wait">
          <motion.img key={active} src={product.screenshots[active]} alt={`${product.name} screenshot ${active + 1}`}
            className={`absolute inset-0 w-full h-full ${isMobile ? "object-contain p-2" : "object-cover object-top"}`}
            initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <button onClick={() => setActive((a) => (a - 1 + product.screenshots.length) % product.screenshots.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => setActive((a) => (a + 1) % product.screenshots.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {product.screenshots.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all duration-300 ${i === active ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30"}`} />
          ))}
        </div>
      </div>

      <div className={`flex gap-2 ${isMobile ? "justify-center" : ""}`}>
        {product.screenshots.map((img, i) => (
          <button key={i} onClick={() => setActive(i)} className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${i === active ? "border-white/60 opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}
            style={{ width: isMobile ? 48 : 96, height: isMobile ? 80 : 54 }}>
            <img src={img} alt={`${product.name} screenshot thumbnail ${i + 1}`} className={`w-full h-full ${isMobile ? "object-contain" : "object-cover object-top"}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

// ── Star Rating ───────────────────────────────────────────────────────────────
const StarRating = ({ rating, large }: { rating: number; large?: boolean }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} viewBox="0 0 20 20" fill="none" className={large ? "w-5 h-5" : "w-3.5 h-3.5"}>
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.62l5.34-.78L10 1z"
          fill={s <= Math.round(rating) ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth="1.5" />
      </svg>
    ))}
  </div>
);

// ── App Icon ──────────────────────────────────────────────────────────────────
const AppIcon = ({ product, size }: { product: StoreProduct; size: string }) => (
  <div className={`${size} flex items-center justify-center shadow-xl shrink-0 rounded-3xl overflow-hidden`}>
    <img src={product.logoPath} alt={product.name} className="w-full h-full object-cover" />
  </div>
);

// ── Type Badge ────────────────────────────────────────────────────────────────
const TypeBadge = ({ type }: { type: StoreProduct["type"] }) => {
  const config = {
    web: { label: "Web App", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    mobile: { label: "Android", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    extension: { label: "Extension", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  };
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${config[type].color}`}>{config[type].label}</span>;
};

// ── Status Badge ──────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: StoreProduct["status"] }) => {
  const config = {
    Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Beta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Coming Soon": "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${config[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === "Live" ? "bg-emerald-400 animate-pulse" : status === "Beta" ? "bg-amber-400" : "bg-slate-400"}`} />
      {status}
    </span>
  );
};

import SEO from "@/components/SEO";

const isLightColor = (color?: string) => {
  if (!color) return false;
  const hex = color.replace("#", "");
  if (hex.length !== 6) return false;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 180;
};

// ── Main Page ─────────────────────────────────────────────────────────────────
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = storeProducts.find((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-4">
        <p className="text-white/50 text-lg">Product not found.</p>
        <button onClick={() => navigate("/products")} className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm">Back to Products</button>
      </div>
    );
  }

  const isMobile = product.type === "mobile";
  const isExtension = product.type === "extension";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title={`${product.name} | Store Product`} 
        description={product.description}
        keywords={`${product.name}, ${product.type}, store product, NeoSparkX app, ${product.techStack.join(", ")}`}
        ogImage={product.logoPath}
      />
      <Navigation />

      {/* Accent ambient */}
      <div className="fixed inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse 60% 40% at 70% 20%, ${product.accentColor}12, transparent)` }} />

      <div className="container mx-auto px-4 pt-36 pb-24 max-w-7xl relative">

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => navigate("/products")} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Products
          </button>
          <span className="text-white/20">/</span>
          <span className="text-white/60 text-sm">{product.name}</span>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: App info + CTAs */}
          <div>
            {/* App header */}
            <div className="flex items-start gap-5 mb-8">
              <AppIcon product={product} size="w-24 h-24 text-2xl" />
              <div className="pt-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">{product.name}</h1>
                <p className="text-white/40 text-sm mb-3">{product.publisher} · v{product.version}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <TypeBadge type={product.type} />
                  <StatusBadge status={product.status} />
                  {product.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs border border-white/10 text-white/40">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/8">
              <div className="flex items-center gap-2">
                <StarRating rating={product.rating} large />
                <span className="text-2xl font-bold text-white">{product.rating}</span>
              </div>
              <span className="text-white/30 text-sm">{product.ratingCount}</span>
              {product.size && <span className="text-white/30 text-sm">· {product.size}</span>}
              <span className="text-white/30 text-sm">· {product.platform}</span>
            </div>

            {/* CTAs */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">Download / Try</h3>
              <div className="flex flex-wrap gap-3">
                {isMobile && <GooglePlayBadge onClick={() => window.open(product.playStoreUrl || "#", "_blank")} />}
                {isExtension && <ExtensionCTA product={product} />}
                {!isMobile && !isExtension && product.liveUrl && (
                  <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg ${isLightColor(product.accentColor) ? 'text-black' : 'text-white'}`}
                    style={{ background: product.accentColor }}>
                    <ExternalLink className="w-4 h-4" /> Open Web App
                  </a>
                )}
                {product.privacyPolicyUrl && (
                  <button onClick={() => navigate(product.privacyPolicyUrl)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/70 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-300">
                    <Shield className="w-4 h-4" /> Privacy Policy
                  </button>
                )}
                {!isMobile && !isExtension && (
                  <button onClick={() => navigate(`/works/${product.worksSlug}`)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white/70 border border-white/15 hover:border-white/40 hover:text-white transition-all duration-300">
                    View Case Study
                  </button>
                )}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-8">
              {product.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 text-sm text-white/60">
                  <Check className="w-4 h-4 shrink-0" style={{ color: product.accentColor }} />
                  {h}
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-white/60">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Screenshots */}
          <div>
            <Screenshots product={product} />
          </div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">About {product.name}</h2>
          <div className="max-w-3xl">
            <p className="text-white/60 text-base leading-relaxed">{product.description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-white/15 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center" style={{ background: `${product.accentColor}20` }}>
                  <div className="w-3 h-3 rounded-sm" style={{ background: product.accentColor }} />
                </div>
                <h3 className="font-semibold text-white text-sm mb-2">{f.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="rounded-2xl border border-white/8 bg-white/3 p-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to try {product.name}?</h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">Built by NeoSparkX — software engineered to solve real problems.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {isMobile && <GooglePlayBadge onClick={() => window.open(product.playStoreUrl || "#", "_blank")} />}
            {isExtension && <ExtensionCTA product={product} />}
             {!isMobile && !isExtension && product.liveUrl && (
              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm hover:brightness-110 hover:scale-105 transition-all shadow-lg ${isLightColor(product.accentColor) ? 'text-black' : 'text-white'}`}
                style={{ background: product.accentColor }}>
                <ExternalLink className="w-4 h-4" /> Open {product.name}
              </a>
            )}
            {product.privacyPolicyUrl && (
              <button onClick={() => navigate(product.privacyPolicyUrl)} className="px-8 py-3 rounded-xl font-semibold text-sm text-white/60 border border-white/15 hover:border-white/40 hover:text-white transition-all flex items-center gap-2">
                <Shield className="w-4 h-4" /> Privacy Policy
              </button>
            )}
            <button onClick={() => navigate("/products")} className="px-8 py-3 rounded-xl font-semibold text-sm text-white/60 border border-white/15 hover:border-white/40 hover:text-white transition-all">
              More Products
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductDetail;
