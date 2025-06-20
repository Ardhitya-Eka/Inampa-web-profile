// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p>
          &copy; {new Date().getFullYear()} INDONESIAN MARITIME PILOT'S
          ASSOCIATION
        </p>
      </div>
    </footer>
  );
};

export default Footer;
