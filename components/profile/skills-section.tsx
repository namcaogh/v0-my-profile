"use client";

import { Wrench, Code, Server, GraduationCap, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Lập trình",
    icon: Code,
    skills: ["C/C++", "Python", "Embedded Programming"],
  },
  {
    title: "Hệ thống",
    icon: Server,
    skills: ["Firmware", "Drivers", "Automotive", "IoT"],
  },
  {
    title: "Giảng dạy",
    icon: GraduationCap,
    skills: ["Truyền đạt kiến thức kỹ thuật khó một cách dễ hiểu", "Xây dựng lộ trình học tập"],
  },
  {
    title: "Chiến lược",
    icon: TrendingUp,
    skills: ["Tư vấn chuyển đổi số", "Quản lý dự án startup"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Wrench className="w-8 h-8 text-primary" />
        Kỹ Năng Cốt Lõi
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 text-sm bg-secondary text-muted-foreground rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
