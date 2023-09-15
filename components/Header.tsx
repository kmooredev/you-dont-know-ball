export default function Header() {
  return (
    <header className="flex justify-between items-center mb-12 h-24 w-auto">
      <h4 className="ml-2 text-2xl">YDNB Logo</h4>
      <h1 className="ml-64 text-3xl">You Don&apos;t Know Ball</h1>
      <ul className="flex w-3/12 justify-evenly items-center">
        <li>About</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </header>
  );
}
