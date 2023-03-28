function Footer() {
  return (
    <footer className=" fixed bottom-0 w-full m-2 bg-white rounded-lg shadow dark:bg-gray-800 ">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Hariba™
          </a>{" "}
          Tous droits réservés.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
