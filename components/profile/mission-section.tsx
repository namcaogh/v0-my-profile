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
              Su Menh
            </h2>
          </div>
          
          <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-10 border-l-4 border-primary pl-6">
            Thu hep khoang cach giua giang duong va doanh nghiep.
          </blockquote>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Students */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Danh cho Sinh vien tai Nghe An
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Cung cap he sinh thai cong cu de kham pha sau hon ve dong chay cong nghe.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Trang bi tu duy &ldquo;thuc chien&rdquo; de sinh vien tu tin buoc vao thi truong lao dong toan cau day bien dong.
                  </span>
                </li>
              </ul>
            </div>
            
            {/* For Office Workers */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Danh cho Nhan vien Van phong
                </h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Lam chu cac cong cu AI hien dai de giai phong suc lao dong.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">
                    Toi uu hoa bo cong cu Microsoft Office va xay dung lo trinh chuyen doi so ca nhan, giup tang hieu suat cong viec len gap nhieu lan.
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
