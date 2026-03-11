"use client";

import { Code, GraduationCap, Building2, Rocket } from "lucide-react";

const stats = [
  {
    icon: Code,
    value: "6+",
    label: "Năm Kỹ sư Phần mềm",
    description: "Kinh nghiệm thực chiến tại các tập đoàn đa quốc gia hàng đầu",
  },
  {
    icon: GraduationCap,
    value: "3+",
    label: "Năm Đào tạo & Giảng dạy",
    description: "Dẫn dắt và đào tạo hàng trăm sinh viên, học viên ngành CNTT",
  },
  {
    icon: Building2,
    value: "2",
    label: "Tập đoàn lớn",
    description: "Từng cống hiến tại Robert Bosch & Renesas Electronics",
  },
  {
    icon: Rocket,
    value: "2",
    label: "Startup sáng lập",
    description: "Founder của NK Digital & IMOD Academy",
  },
];

export function StatsSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm font-medium text-primary mt-1">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-2">{stat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
