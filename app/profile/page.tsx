import { currentUser } from '@clerk/nextjs';
import type { User } from '@clerk/nextjs/api';

export default async function Page() {
  const user: User | null = await currentUser();

  return (
    <>
      <h1>Hello {user?.username}</h1>
    </>
  );
}
