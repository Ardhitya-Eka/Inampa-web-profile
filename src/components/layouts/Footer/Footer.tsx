// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-gray-900">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-900">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
