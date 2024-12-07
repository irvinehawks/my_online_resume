import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
            <p className="text-sm mb-2">
              Let's collaborate on your next big idea!
            </p>
            <div>
              <p className="p-2">
                <a
                  href="https://wa.me/+263737543231"
                  className="hover:underline flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span role="img" aria-label="whatsapp">
                    💬
                  </span>
                  WhatsApp: +263737543231
                </a>
              </p>

              <p className="p-2">
                <span role="img" aria-label="phone" className="">
                  📞
                </span>
                Phone: +263774811735
              </p>

              <p className="flex items-center p-2">
                <span role="img" aria-label="email">
                  📧
                </span>
                Email :{" "}
                <a
                  href="mailto:devopsicoder@gmail.com.com"
                  className="hover:underline"
                >
                  devopsicoder@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Graphics or Decorative Section */}
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <span role="img" aria-label="computer" className="text-3xl">
                💻
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-6 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} @Irvene Kwambana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
