import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';

export default function CountryResourcesSection({
  itemVariants,
  resourcecards,
  resourceofficialLinks,
  resourceguides,
  resourcetools,
}) {
  return (
    <motion.section
      variants={itemVariants}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <Search className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Helpful Resources and Tools
        </h2>
      </div>

      <div className="space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourcecards.map((card, idx) => (
            <Card
              key={idx}
              className={`bg-gradient-to-br ${card.gradient} ${card.borderColor}`}
            >
              <CardHeader className="pb-2">
                <CardTitle className={`text-lg ${card.textColor}`}>
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">{card.description}</p>
                <Button className={`w-full ${card.buttonColor}`}>
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Official Links and Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="text-xl font-bold mb-4">Official Websites</h3>
            <ul className="space-y-3">
              {resourceofficialLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <a href={link.href} className="text-blue-600 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-5">
            <h3 className="text-xl font-bold mb-4">Downloadable Guides</h3>
            <ul className="space-y-3">
              {resourceguides.map((guide, idx) => (
                <li key={idx} className="flex gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 4v12h10V7.414L11.586 4H5zm1 1h4.586L14 8.414V15H6V5z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fillRule="evenodd"
                      d="M8 10a1 1 0 100 2h4a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href={guide.href}
                    className="text-blue-600 hover:underline"
                  >
                    {guide.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-100 p-6">
          <h3 className="text-xl font-bold mb-4 text-amber-800">
            Interactive Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {resourcetools.map((tool, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold">{tool.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                <Button variant="outline" className="w-full mt-3">
                  {tool.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
