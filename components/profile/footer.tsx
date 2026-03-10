"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-border">
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          Được tạo với <Heart className="w-4 h-4 text-primary" /> bởi Cao Xuân Nam
        </p>
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} NK Digital. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
}
