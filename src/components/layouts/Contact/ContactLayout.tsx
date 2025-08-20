// components/GetConnected.js
import {
  PhoneIcon,
  MapPinIcon,
  AtSymbolIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";

export default function GetConnected() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Get Connected With Us
      </h2>
      <p className="mb-10 text-gray-600">
        We’d love to hear from you — here’s how you can reach us:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-left">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <PhoneIcon className="w-8 h-8 text-indigo-600" />
          <div>
            <p className="text-lg font-semibold text-gray-700">Phone</p>
            <p className="text-gray-600"> 021-43900975</p>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4">
          <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-500" />
          <div>
            <p className="text-lg font-semibold text-gray-700">WhatsApp</p>
            <a
              href="https://wa.me/+6281398347370"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              0813 9834 7370
            </a>
          </div>
        </div>

        {/* Gmail */}
        <div className="flex items-start gap-4">
          <EnvelopeIcon className="w-8 h-8 text-red-500" />
          <div>
            <p className="text-lg font-semibold text-gray-700">Email</p>
            <a
              href="mailto:yourcompany@gmail.com"
              className="text-red-600 hover:underline"
            >
              dppinampa10@gmail.com
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <MapPinIcon className="w-8 h-8 text-indigo-600" />
          <div>
            <p className="text-lg font-semibold text-gray-700">Address</p>
            <p className="text-gray-600">
              Jl. Matahari No. 10, RT.01/RW.013, Kelurahan: Rawabadak Utara,
              Kecamatan: Koja, DKI Jakarta 14230 - Indonesia.
            </p>
          </div>
        </div>

        {/* Instagram */}
        <div className="flex items-start gap-4">
          <AtSymbolIcon className="w-8 h-8 text-pink-500" />
          <div>
            <p className="text-lg font-semibold text-gray-700">Instagram</p>
            <a
              href="https://www.instagram.com/inampa_dpp?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              @inampa_dpp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
