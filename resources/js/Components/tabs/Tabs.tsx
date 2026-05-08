import * as React from "react";

export function Tabs({ value, onValueChange, children }: any) {
  return <div>{children}</div>;
}

export function TabsList({ children }: React.PropsWithChildren) {
  return <div className="flex gap-2 mb-2 border-b">{children}</div>;
}

export function TabsTrigger({ value, children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 rounded-md hover:bg-gray-100"
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: any) {
  return <div className="mt-2">{children}</div>;
}
