"use client";

import { Github, Linkedin, Facebook, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
          <div className="flex-shrink-0">
            <div className="w-40 h-40 lg:w-52 lg:h-52 rounded-full bg-secondary border-4 border-primary/30 flex items-center justify-center overflow-hidden">
              <span className="text-5xl lg:text-6xl font-bold text-primary">CXN</span>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Cao Xuan Nam
            </h1>
            <p className="text-xl lg:text-2xl text-primary font-medium mb-6">
              Kỹ sư Phần mềm & Nhà Đào tạo Công nghệ
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Kỹ sư phần mềm với 6 năm kinh nghiệm tại các tập đoàn đa quốc gia. 
              Đam mê đào tạo và chia sẻ kiến thức công nghệ cho thế hệ kỹ sư tương lai.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
