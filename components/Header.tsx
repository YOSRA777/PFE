export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white border-b border-gray-200">
      <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center">
          <h1 className="text-lg font-semibold text-gray-900">Application Console</h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">User Name</p>
              <p className="text-xs text-gray-500">Full-stack Dev</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
              YT
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}