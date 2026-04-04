function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="font-semibold text-white">BlogApp</span>
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-4 text-sm">
            <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded">React</span>
            <span className="px-2 py-1 bg-purple-600/20 text-purple-400 rounded">Redux</span>
            <span className="px-2 py-1 bg-cyan-600/20 text-cyan-400 rounded">Tailwind</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} BlogApp. Built with React + Redux.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
