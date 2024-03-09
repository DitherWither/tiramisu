"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { H1, P, TableBody, TableHead, TableHeader, Table, TableCell } from "~/components/ui/typography";

export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <H1>Hallo</H1>
      <ModeToggle />
      <P>{count}</P>
      <Table>
        <TableHead>
          <TableHeader>Id</TableHeader>
          <TableHeader>Name</TableHeader>
        </TableHead>
        <TableBody>
          <TableCell>1</TableCell>
          <TableCell>Vardhan</TableCell>
        </TableBody>
      </Table>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </Button>
    </main>
  );
}
