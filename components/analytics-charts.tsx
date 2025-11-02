"use client"

import { motion } from "framer-motion"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const detectionTrendData = [
  { month: "Jan", detections: 2400, confirmed: 2000 },
  { month: "Feb", detections: 3000, confirmed: 2500 },
  { month: "Mar", detections: 2800, confirmed: 2200 },
  { month: "Apr", detections: 3900, confirmed: 3200 },
  { month: "May", detections: 4500, confirmed: 3800 },
  { month: "Jun", detections: 5200, confirmed: 4400 },
]

const diseaseDistributionData = [
  { name: "Melanoma", value: 32 },
  { name: "Psoriasis", value: 24 },
  { name: "Eczema", value: 18 },
  { name: "Acne", value: 15 },
  { name: "Others", value: 11 },
]

const ageGroupData = [
  { group: "0-18", cases: 450 },
  { group: "18-30", cases: 2100 },
  { group: "30-45", cases: 3200 },
  { group: "45-60", cases: 2800 },
  { group: "60+", cases: 1450 },
]

const COLORS = ["#0891b2", "#06b6d4", "#00d9ff", "#67e8f9", "#cffafe"]

interface AnalyticsChartsProps {
  selectedDisease?: string | null
}

export default function AnalyticsCharts({ selectedDisease }: AnalyticsChartsProps) {
  return (
    <div className="space-y-8">
      {/* Detection Trends */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-xl font-bold text-foreground mb-6">Detection Trends (6 Months)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={detectionTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--foreground)",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="detections"
              stroke="#0891b2"
              strokeWidth={2}
              dot={{ fill: "#0891b2", r: 4 }}
              activeDot={{ r: 6 }}
              name="Total Detections"
            />
            <Line
              type="monotone"
              dataKey="confirmed"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ fill: "#06b6d4", r: 4 }}
              activeDot={{ r: 6 }}
              name="Confirmed Cases"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Disease Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Disease Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={diseaseDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {diseaseDistributionData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--foreground)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Age Group Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-card border border-border"
        >
          <h3 className="text-xl font-bold text-foreground mb-6">Cases by Age Group</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ageGroupData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  color: "var(--foreground)",
                }}
              />
              <Bar dataKey="cases" fill="#0891b2" radius={[8, 8, 0, 0]} name="Cases" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Confidence Score Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-8 rounded-2xl bg-card border border-border"
      >
        <h3 className="text-xl font-bold text-foreground mb-6">Prediction Confidence Distribution</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={[
              { confidence: "90-100%", count: 8500 },
              { confidence: "80-89%", count: 5200 },
              { confidence: "70-79%", count: 3100 },
              { confidence: "60-69%", count: 1850 },
              { confidence: "<60%", count: 950 },
            ]}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--foreground)",
              }}
            />
            <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} name="Number of Predictions" />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  )
}
