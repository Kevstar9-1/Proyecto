import Link from 'next/link';
export default function NavBar() {
  return (
    <div>
      <nav className="w-full shadow" style={{ backgroundColor: '#3c6e71' }}>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
              <h2 className="inline-block mr-4 text-2xl text-white font-bold">ExpressWay Logistics</h2>
              <img src="./ima/LaT.png" alt=" Logotipo" className="inline-block" width="40" />
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-Cian rounded-md outline-none focus:border-Cian focus:border"
                >
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  }
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 `}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white ">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/calculator">
                    Quote your article
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/tracking">
                    Tracking
                  </Link>
                </li>
                <li className="text-white">
                  <Link href="/reports">
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
