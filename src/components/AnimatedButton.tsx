import Link from "next/link";
import React from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedButton({ href, children, icon, className = "", style }: AnimatedButtonProps) {
  return (
    <Link href={href} className={`animated-btn ${className}`} style={style}>
      <span className="animated-btn-text">{children}</span>
      <span className="animated-btn-icon">{icon}</span>
    </Link>
  );
}