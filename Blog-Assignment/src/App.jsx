function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Application
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            React + Redux + Context API + Tailwind CSS
          </p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors">
              React
            </span>
            <span className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition-colors">
              Redux
            </span>
            <span className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors">
              Tailwind
            </span>
          </div>
          <p className="mt-8 text-gray-500 dark:text-gray-400">
            Phase 1 Setup Complete - Ready for Phase 2
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
