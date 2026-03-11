"use client";

import { Cpu, GraduationCap, Rocket } from "lucide-react";

const experienceCategories = [
  {
    title: "Lĩnh vực Kỹ thuật & Công nghệ",
    icon: Cpu,
    items: [
      {
        company: "Robert Bosch Việt Nam",
        role: "Kỹ sư Phần mềm",
      },
      {
        company: "Renesas Electronics",
        role: "Kỹ sư Phần mềm",
      },
    ],
  },
  {
    title: "Lĩnh vực Đào tạo & Mentoring",
    icon: GraduationCap,
    items: [
      {
        company: "FPT Polytechnic",
        role: "Giảng viên CNTT",
        description: "Giảng dạy lập trình căn bản, Cấu trúc dữ liệu và Giải thuật.",
      },
      {
        company: "Funix",
        role: "Mentor",
        description: "Đồng hành, Code Review và hướng dẫn sinh viên thực hiện các dự án thực tế.",
      },
    ],
  },
  {
    title: "Khởi nghiệp & Lãnh đạo",
    icon: Rocket,
    items: [
      {
        company: "NK Digital",
        role: "Founder",
        description: "Cung cấp các giải pháp phần mềm và lộ trình chuyển đổi số tối ưu cho doanh nghiệp.",
      },
      {
        company: "IMOD Academy",
        role: "Founder",
        description: "Học viện chuyên sâu về đào tạo CNTT và tư vấn giải pháp công nghệ.",
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section className="py-16">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-10">
        Kinh Nghiệm Chuyên Môn
      </h2>
      
      <div className="space-y-10">
        {experienceCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <category.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary">
                {category.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.role}
                  </p>
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
