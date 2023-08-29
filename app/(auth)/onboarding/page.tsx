import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">on boarding</h1>
      <p>Complete your profile</p>
      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle={"Push"} />
      </section>
    </main>
  );
}

export default Page;
