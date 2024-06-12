import Link from "next/link";

const SidebarMenu = () => (
  <div className="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform">
    <Link href="#">
      <div className="flex items-center pb-4 border-b border-b-gray-800 cursor-pointer">
        <img
          src="https://placehold.co/32x32"
          alt=""
          className="w-8 h-8 rounded object-cover"
        />
        <span className="text-lg font-bold text-white ml-3">Logo</span>
      </div>
    </Link>
    <ul className="mt-4">
      <li className="mb-1 group active">
        <Link href="#">
          <div className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 cursor-pointer">
            <i className="ri-home-2-line mr-3 text-lg" />
            <span className="text-sm">Dashboard</span>
          </div>
        </Link>
      </li>
      <li className="mb-1 group">
        <Link href="#">
          <div className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle cursor-pointer">
            <i className="ri-instance-line mr-3 text-lg" />
            <span className="text-sm">Orders</span>
            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
          </div>
        </Link>
        <ul className="pl-7 mt-2 hidden group-[.selected]:block">
          <li className="mb-4">
            <Link href="#">
              <div className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 cursor-pointer">
                Products
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="#">
              <div className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 cursor-pointer">
                Profile
              </div>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="#">
              <div className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 cursor-pointer">
                Logout
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li className="mb-1 group">
        <Link href="#">
          <div className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle cursor-pointer">
            <i className="ri-flashlight-line mr-3 text-lg" />
            <span className="text-sm">Services</span>
            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90" />
          </div>
        </Link>
        <ul className="pl-7 mt-2 hidden group-[.selected]:block">
          <li className="mb-4">
            <Link href="#">
              <div className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3 cursor-pointer">
                Manage services
              </div>
            </Link>
          </li>
        </ul>
      </li>
      <li className="mb-1 group">
        <Link href="#">
          <div className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 cursor-pointer">
            <i className="ri-settings-2-line mr-3 text-lg" />
            <span className="text-sm">Settings</span>
          </div>
        </Link>
      </li>
    </ul>
  </div>
);
export default SidebarMenu;
