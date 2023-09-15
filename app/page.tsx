import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-12 h-24 w-auto">
        <h4 className="ml-2 text-2xl">YDNB Logo</h4>
        <h1 className="ml-64 text-3xl">You Don&apos;t Know Ball</h1>
        <ul className="flex w-3/12 justify-evenly items-center">
          <li>About</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      </header>
      <main className="flex flex-col justify-center items-center m-auto w-9/12 h-2/4 mb-8">
        <h2 className="text-4xl mb-4">Learn more about the game we love</h2>
        <Image
          src="/football-chalkboard.png"
          alt="chalkboard with X's and O's"
          width={500}
          height={500}
          className="rounded"
        />
        <p className=" text-lg mt-4 text-center">
          We&apos;re here to help you learn more about the game of football.
          Whether you&apos;re a complete beginner, or you&apos;re looking to
          take your knowledge to the next level. We offer a number of lessons
          ranging from the absolute basics to more advanced concepts and
          strategies.
        </p>
        <h3 className="mt-4 text-xl mb-2">Browse Lessons</h3>
        <div className="flex flex-wrap justify-evenly items-center w-11/12">
          <div className="border border-white p-1">
            <p>Title of Lesson</p>
          </div>
          <div className="border border-white p-1">
            <p>Title of Lesson</p>
          </div>
          <div className="border border-white p-1">
            <p>Title of Lesson</p>
          </div>
          <div className="border border-white p-1">
            <p>Title of Lesson</p>
          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center">
        <p>This is where the footer will go</p>
      </footer>
    </>
  );
}
