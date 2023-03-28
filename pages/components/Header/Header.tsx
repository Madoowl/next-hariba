import Link from "next/link";

function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Hariba
            </span>
          </a>
          <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                  <p className="text-gray-900 dark:text-white hover:underline">
                    <Link href="/"> Accueil </Link>
                  </p>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                    aria-current="page"
                  >
                    Boutique
                  </a>
                </li>
                <li>
                  <p className="text-gray-900 dark:text-white hover:underline">
                    <Link href="/posts/first-post"> Notre histoire </Link>
                  </p>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="#"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              Mon compte
            </a>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Panier
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
