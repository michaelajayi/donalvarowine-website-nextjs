'use client';
import { selectLayout } from "@/lib/features/layout/layoutSlice";
import { useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";

const DarkModeLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useAppSelector(selectLayout);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <html className={theme === "dark" ? "dark" : ""}>{children}</html>;
};

export default DarkModeLayout;
