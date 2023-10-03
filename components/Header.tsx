import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="flex justify-evenly items-center mb-12 h-24 p-2">
      <h4 className="ml-2 text-lg">🏈</h4>
      <h1 className="ml-18 text-xl">You Don&apos;t Know Ball</h1>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </header>
  );
}
