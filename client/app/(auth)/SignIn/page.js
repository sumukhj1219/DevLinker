import { signIn } from "@/auth"
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Github } from 'lucide-react'
import { SiLinkedin } from "react-icons/si";

export default async function SignIn() {
  const session = await auth()

  if (session?.user) return redirect('/')
  return (
    <div className="size-80 bg-neutral-900 flex flex-col items-center justify-center border-black rounded-xl">
      <header className="m-6 font-bold text-xl p-4 border-2 border-dotted rounded-xl">Login to DevLinker</header>

      <form
        action={async () => {
          "use server"
          await signIn("linkedin")
        }}
        className="flex items-center justify-center w-full"
      >
        <button type="submit" className="bg-slate-100 p-2 m-2 text-black  rounded-xl font-bold flex gap-x-2 border-2" >
          <SiLinkedin size={20}/> LinkedIn
        </button>
      </form>

      <form
        action={async () => {
          "use server"
          await signIn("github")
        }}
        className="flex items-center justify-center w-full"
      >
        <button type="submit" className="bg-blue-500 p-2 m-2 rounded-xl font-bold flex gap-x-2 border-2">
          <Github /> GitHub
        </button>
      </form>
    </div>
  )
}
