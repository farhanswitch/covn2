export default function Footer() {
  return (
    <footer className=" w-full bottom-0 py-4 text-white bg-blue-600">
      <p className="mx-auto text-center max-w-5xl">
        {`Copyright `}&copy; {` ${new Date().getFullYear()} `}
        <a href="https://www.farhanswitch.my.id" className="no-underline">
          FarhanSwitch
        </a>
      </p>
    </footer>
  );
}
