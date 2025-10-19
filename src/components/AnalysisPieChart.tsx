import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface AnalysisData {
  [key: string]: string | null;
}

interface AnalysisPieChartProps {
  analysis: AnalysisData;
  title?: string;
}

export function AnalysisPieChart({ analysis, title = "Nutrient Analysis" }: AnalysisPieChartProps) {
  const [animatedData, setAnimatedData] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  // Color palette for different nutrients
  const colors = [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Amber
    '#EF4444', // Red
    '#8B5CF6', // Purple
    '#06B6D4', // Cyan
    '#F97316', // Orange
    '#84CC16', // Lime
    '#EC4899', // Pink
    '#6B7280', // Gray
  ];

  useEffect(() => {
    // Filter out null values and convert to chart format
    const chartData = Object.entries(analysis)
      .filter(([_, value]) => value !== null && value !== undefined)
      .map(([key, value], index) => ({
        name: key.replace(/\([^)]*\)/g, '').trim(), // Remove chemical formulas for cleaner labels
        fullName: key,
        value: parseFloat(value as string),
        color: colors[index % colors.length]
      }))
      .filter(item => !isNaN(item.value))
      .sort((a, b) => b.value - a.value); // Sort by value descending

    if (isVisible) {
      // Animate the data in
      const timer = setTimeout(() => {
        setAnimatedData(chartData);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [analysis, isVisible]);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-medium text-gray-900">{data.payload.fullName}</p>
          <p className="text-blue-600 font-semibold">{data.value}%</p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.05) return null; // Don't show labels for very small slices
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        fontSize="12"
        fontWeight="500"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      {...fadeInUp}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-xl text-gray-600">
            Detailed breakdown of nutrient composition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={animatedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    animationBegin={0}
                    animationDuration={1200}
                  >
                    {animatedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          {/* Legend and Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Nutrient Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {animatedData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium text-gray-900">{item.fullName}</span>
                      </div>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        {item.value}%
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Percentages shown represent the concentration by weight/volume (w/v) 
                    of each nutrient in the formulation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}