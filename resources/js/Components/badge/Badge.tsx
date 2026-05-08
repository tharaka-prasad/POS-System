import * as React from "react";

export function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
      {children}
    </span>
  );
}
