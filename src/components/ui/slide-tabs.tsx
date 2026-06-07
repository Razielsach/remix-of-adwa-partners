import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Position = { left: number; width: number; opacity: number };

export interface SlideTabsProps {
  tabs: string[];
  selected: number;
  onSelect: (i: number) => void;
  className?: string;
}

export const SlideTabs: React.FC<SlideTabsProps> = ({
  tabs,
  selected,
  onSelect,
  className,
}) => {
  const [position, setPosition] = useState<Position>({ left: 0, width: 0, opacity: 0 });
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const el = tabsRef.current[selected];
    if (el) {
      setPosition({ left: el.offsetLeft, width: el.getBoundingClientRect().width, opacity: 1 });
    }
  }, [selected, tabs.length]);

  return (
    <ul
      onMouseLeave={() => {
        const el = tabsRef.current[selected];
        if (el) {
          setPosition({
            left: el.offsetLeft,
            width: el.getBoundingClientRect().width,
            opacity: 1,
          });
        }
      }}
      className={`relative mx-auto flex w-fit rounded-full border-2 border-[var(--brand-graphite)] bg-[var(--brand-ivory)] p-1 ${className ?? ""}`}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          setPosition={setPosition}
          onClick={() => onSelect(i)}
        >
          {tab}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  onClick: () => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick }, ref) => (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        const el = (ref as React.RefObject<HTMLLIElement>)?.current;
        if (!el) return;
        setPosition({
          left: el.offsetLeft,
          width: el.getBoundingClientRect().width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-sm font-medium tracking-wider"
    >
      {children}
    </li>
  ),
);
Tab.displayName = "Tab";

const Cursor: React.FC<{ position: Position }> = ({ position }) => (
  <motion.li
    animate={position}
    className="absolute inset-y-1 z-0 rounded-full bg-[var(--brand-graphite)]"
  />
);
