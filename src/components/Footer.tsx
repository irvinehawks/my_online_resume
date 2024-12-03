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
              <p>
                <a
                  href="https://wa.me/1234567890"
                  className="hover:underline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span role="img" aria-label="whatsapp">
                    💬
                  </span>
                  WhatsApp: +263737543231
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span role="img" aria-label="phone">
                  📞
                </span>
                Phone: +263717259326
              </p>
              <p className="flex items-center gap-2">
                <span role="img" aria-label="email">
                  📧
                </span>
                Email:{" "}
                <a
                  href="mailto:youremail@example.com"
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
        <div className="border-t border-gray-800 mt-6 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Irvene Kwambana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;