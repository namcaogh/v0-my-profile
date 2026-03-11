"use client";

import { Target, Building, GraduationCap, Users } from "lucide-react";

const missions = [
  {
    icon: Building,
    title: "Với Doanh nghiệp",
    description: "Trở thành người đồng hành tin cậy trong lộ trình chuyển đổi số, giúp tối ưu hóa vận hành bằng công nghệ.",
  },
  {
    icon: GraduationCap,
    title: "Với Giáo dục",
    description: 'Xây dựng hệ sinh thái học tập "Thực học - Thực làm", nơi học viên được đào tạo theo tiêu chuẩn khắt khe của các tập đoàn đa quốc gia.',
  },
  {
    icon: Users,
    title: "Với Cộng đồng",
    description: "Lan tỏa tri thức CNTT, đặc biệt là ứng dụng AI, đến gần hơn với mọi đối tượng từ học sinh, sinh viên đến người đi làm.",
  },
];

export function MissionSection() {
  return (
    <section className="py-16">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
        
        <div className="relative p-8 lg:p-12 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Sứ Mệnh Cốt Lõi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {missions.map((mission, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <mission.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {mission.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
