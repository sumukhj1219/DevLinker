
import { signIn } from "@/auth"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function SignIn() {
  const session = await auth()

  if(session?.user) return redirect('/')
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
      
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 