"use client";

import { Building2, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Robert Bosch Việt Nam",
    role: "Kỹ sư Phần mềm",
    description: "Phát triển phần mềm nhúng cho các sản phẩm automotive và IoT.",
    tags: ["Embedded", "Automotive", "C/C++"],
  },
  {
    company: "Renesas Electronics",
    role: "Kỹ sư Phần mềm",
    description: "Phát triển firmware và driver cho các vi điều khiển công nghiệp.",
    tags: ["Firmware", "Driver", "MCU"],
  },
  {
    company: "FPT Polytechnic",
    role: "Giảng viên CNTT",
    description: "Giảng dạy các môn lập trình, cấu trúc dữ liệu và thuật toán.",
    tags: ["Giảng dạy", "Lập trình", "DSA"],
  },
  {
    company: "Funix",
    role: "Mentor",
    description: "Hướng dẫn và mentor cho sinh viên trong các dự án thực tế.",
    tags: ["Mentoring", "Code Review", "Dự án"],
  },
  {
    company: "NK Digital",
    role: "Founder",
    description: "Cung cấp giải pháp phần mềm.",
    tags: ["Phần mềm", "Giải pháp", "Công nghệ"],
  },
  {
    company: "IMOD Academy",
    role: "Founder",
    description: "Startup chuyên về đào tạo CNTT và chuyển đổi số cho doanh nghiệp.",
    tags: ["Startup", "Đào tạo", "Chuyển đổi số"],
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
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {exp.role}
                </h3>
                <p className="text-primary font-medium flex items-center gap-2">
                  {exp.company}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
              </div>
              
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
        ))}
      </div>
    </section>
  );
}
