import { Button } from "@nextui-org/react"
import * as actions from "@/actions"
import {auth} from "@/auth"
import Profile from "@/components/Profile";

export default async function Home() {
  const session = await auth();
  //should revalidate every 30 seconds
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {
        session?.user ? (<div>Signed In: {JSON.stringify(session.user)}</div>) : (<div>Not Signed In</div>)
      }
      <Profile />
    </div>
  );
}
