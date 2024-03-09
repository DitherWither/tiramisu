// Various typography components
// Some of these are just wrappers for now, but might get custom styling later

export function H1({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className ?? ""}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className ?? ""}`}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className ?? ""}`}>
      {children}
    </h3>
  );
}

export function H4({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className ?? ""}`}>
      {children}
    </h4>
  );
}

export function P({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ""}`}>{children}</p>;
}

export function Blockquote({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className ?? ""}`}>{children}</blockquote>
  );
}

export function Table({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`my-6 w-full overflow-y-auto ${className ?? ""}`}>
      <table className={`w-full`}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children, className }: { children: React.ReactNode, className?: string }) {
    return <thead>{children}</thead>;
}

export function TableBody({ children, className }: { children: React.ReactNode, className?: string }) {
  return <tbody>{children}</tbody>;
}

export function TableCell({ children, className }: { children: React.ReactNode, className?: string }) {
    return <td className={`border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ${className ?? ""}`}>{children}</td>
}

export function TableRow({ children, className }: { children: React.ReactNode, className?: string }) {
  return <tr className={`m-0 border-t p-0 even:bg-muted ${className ?? ""}`}>{children}</tr>;
}

export function TableHeader({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <th className={`border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right ${className ?? ""}`}>
      {children}
    </th>
  );
}

export function List({ children, className }: { children: React.ReactNode, className?: string }) {
  return <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className ?? ""}`}>{children}</ul>;
}

// Currently just a wrapper
export function ListItem({ children, className }: { children: React.ReactNode, className?: string }) {
  return <li>{children}</li>;
}

export function TypographyInlineCode({
  children, className
}: {
  children: React.ReactNode, className?: string;
}) {
  return (
    <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className ?? ""}`}>
      {children}
    </code>
  );
}

export function Lead({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`text-xl text-muted-foreground ${className ?? ""}`}>{children}</p>;
}

export function Large({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={`text-lg font-semibold ${className ?? ""}`}> {children}</div>;
}

export function Small({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <small className={`text-sm font-medium leading-none ${className ?? ""}`}> {children}</small>
  );
}

export function Muted({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`text-sm text-muted-foreground ${className ?? ""}`}> {children}</p>;
}
