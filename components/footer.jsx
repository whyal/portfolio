// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Tan Yong Lun. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
