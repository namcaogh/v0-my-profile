"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-border">
      <div className="flex flex-col items-center gap-4">
        <p className="text-muted-foreground text-sm flex items-center gap-2">
          Made with <Heart className="w-4 h-4 text-primary" /> by Cao Xuan Nam
        </p>
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} NK Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
