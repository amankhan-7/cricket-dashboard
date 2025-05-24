import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-800 to-indigo-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              IPL Live Score
            </h3>
            <p className="text-indigo-200 text-sm leading-relaxed">
              Your ultimate destination for live IPL scores, match updates, and cricket statistics. Stay connected with every ball, every run, every wicket.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition duration-300 cursor-pointer">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition duration-300 cursor-pointer">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition duration-300 cursor-pointer">
                <span className="text-xs font-bold">in</span>
              </div>
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-500 transition duration-300 cursor-pointer">
                <span className="text-xs font-bold">yt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Live Scores
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Match Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Points Table
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Player Stats
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Team Rankings
                </a>
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">IPL Teams</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Mumbai Indians
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Chennai Super Kings
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Royal Challengers Bangalore
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Kolkata Knight Riders
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Delhi Capitals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-indigo-200 hover:text-white transition duration-300 text-sm">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 pt-8 border-t border-indigo-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-indigo-200 text-sm">
                Get the latest IPL news and match updates delivered to your inbox
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:w-64 px-4 py-2 rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-r-lg font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-indigo-900 border-t border-indigo-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-indigo-300 text-sm mb-4 md:mb-0">
              © 2025 IPL Live Score. All rights reserved. | Powered by CBS
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition duration-300">
                Mobile App
              </a>
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition duration-300">
                Desktop Version
              </a>
              <a href="#" className="text-indigo-300 hover:text-white text-sm transition duration-300">
                Feedback
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500"></div>
    </footer>
  );
}