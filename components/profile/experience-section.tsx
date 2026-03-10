"use client";

import { Building2, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Robert Bosch Vietnam",
    role: "Software Engineer",
    period: "Hiện tại",
    description: "Phát triển phần mềm nhúng cho các sản phẩm automotive và IoT.",
    tags: ["Embedded", "Automotive", "C/C++"],
    current: true,
  },
  {
    company: "Renesas Electronics",
    role: "Software Engineer",
    period: "Trước đó",
    description: "Phát triển firmware và driver cho các vi điều khiển công nghiệp.",
    tags: ["Firmware", "Driver", "MCU"],
    current: false,
  },
  {
    company: "FPT Polytechnic",
    role: "Giảng viên CNTT",
    period: "Song song",
    description: "Giảng dạy các môn lập trình, cấu trúc dữ liệu và thuật toán.",
    tags: ["Teaching", "Programming", "DSA"],
    current: true,
  },
  {
    company: "FUNiX",
    role: "Mentor",
    period: "Song song",
    description: "Hướng dẫn và mentor cho sinh viên trong các dự án thực tế.",
    tags: ["Mentoring", "Code Review", "Projects"],
    current: true,
  },
  {
    company: "NK Digital",
    role: "Founder",
    period: "Sáng lập",
    description: "Startup chuyên về đào tạo CNTT và chuyển đổi số cho doanh nghiệp.",
    tags: ["Startup", "Education", "Digital Transformation"],
    current: true,
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
        <Building2 className="w-8 h-8 text-primary" />
        Kinh Nghiệm Làm Việc
      </h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium flex items-center gap-2">
                  {exp.company}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
              </div>
              
              <div className="flex flex-col items-start lg:items-end gap-3">
                <span className="text-sm text-muted-foreground">{exp.period}</span>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
