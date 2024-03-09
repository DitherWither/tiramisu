import { LoginButton } from "~/components/auth/login-button";
import { Button } from "~/components/ui/button";
import { ModeToggle } from "~/components/ui/mode-toggle";
import {
  H1,
  P,
  TableBody,
  TableHead,
  TableHeader,
  Table,
  TableCell,
} from "~/components/ui/typography";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <main>
      <H1>Home</H1>
      {session ? (
        <>
          <P>Logged in as {session.user.email}</P>
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </main>
  );
}
