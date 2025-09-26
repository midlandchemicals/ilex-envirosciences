import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

interface PDFLink {
  title: string;
  description?: string;
  url?: string;
}

interface PDFLinksProps {
  productName: string;
  links: PDFLink[];
  id: string;
}

export function PDFLinks({ productName, links, id }: PDFLinksProps) {
  const handleDownload = (title: string, url?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      // Simulate download - in real app this would be actual PDF URLs
      console.log(`Downloading ${title} for ${productName}`);
      alert(
        `${title} would be downloaded here. In production, this would link to the actual PDF file.`
      );
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50"
      {...fadeInUp}
      viewport={{ once: true }}
    >
      <div id={id} className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Technical Resources
          </h2>
          <p className="text-xl text-gray-600">
            Download comprehensive technical information and compatibility data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">
                        {link.title}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="min-h-16">
                    {link.description && (
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button
                    className="w-full cursor-pointer group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-300"
                    onClick={() => handleDownload(link.title, link.url)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                    <ExternalLink className="ml-2 h-3 w-3 opacity-60" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
