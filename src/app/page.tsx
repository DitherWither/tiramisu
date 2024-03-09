import {
  H1,
  P
} from "@ui";
import { getServerAuthSession } from "~/server/auth";

export default async function HomePage() {
  const session = await getServerAuthSession();
  return (
    <>
      <H1>Home</H1>
      <P>Logged in as {session?.user.email}</P>
    </>
  );
}
