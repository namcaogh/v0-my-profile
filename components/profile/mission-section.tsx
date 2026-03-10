"use client";

import { Target, Users, Briefcase, Sparkles } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-16">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
        
        <div className="relative p-8 lg:p-12 rounded-3xl border border-primary/20">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-primary" />
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              Sứ Mệnh
            </h2>
          </div>
          
          <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6">
            Thu hẹp khoảng cách giữa giảng đường và doanh nghiệp.
          </blockquote>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Dành cho Sinh viên */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Dành cho Sinh viên tại Nghệ An
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Cung cấp hệ sinh thái công cụ để khám phá sâu hơn về dòng chảy công nghệ.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Trang bị tư duy "thực chiến" để sinh viên tự tin bước vào thị trường lao động toàn cầu đầy biến động.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Dành cho Nhân viên Văn phòng */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Dành cho Nhân viên Văn phòng
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Làm chủ các công cụ AI hiện đại để giải phóng sức lao động.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Tối ưu hóa bộ công cụ Microsoft Office và xây dựng lộ trình chuyển đổi số cá nhân, giúp tăng hiệu suất công việc lên gấp nhiều lần.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
