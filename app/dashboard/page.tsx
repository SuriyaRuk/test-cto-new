import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
          <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
            Dashboard
          </h1>
          
          <div className="mb-8 rounded-lg bg-zinc-50 p-6 dark:bg-zinc-800">
            <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
              User Information
            </h2>
            
            <div className="space-y-3">
              {session.user.name && (
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Name</p>
                  <p className="text-lg font-medium text-black dark:text-white">
                    {session.user.name}
                  </p>
                </div>
              )}
              
              {session.user.email && (
                <div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Email</p>
                  <p className="text-lg font-medium text-black dark:text-white">
                    {session.user.email}
                  </p>
                </div>
              )}
              
              {session.user.image && (
                <div>
                  <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                    Profile Picture
                  </p>
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-full border-2 border-zinc-300 dark:border-zinc-700"
                  />
                </div>
              )}
            </div>
          </div>
          
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button
              type="submit"
              className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
