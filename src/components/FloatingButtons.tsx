import React from 'react';

const FloatingButtons: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in joining your art courses. Please share more details about the available programs and admission process.";
    const whatsappUrl = `https://wa.me/919599142653?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-9 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-all duration-200"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M20.52 3.48a11.86 11.86 0 0 0-16.76 0A11.86 11.86 0 0 0 2.3 12.1c0 1.94.5 3.83 1.47 5.49L2 22l4.56-1.73a11.86 11.86 0 0 0 5.54 1.41h.03a11.86 11.86 0 0 0 8.39-3.47 11.86 11.86 0 0 0 0-16.73ZM12.1 20.07c-1.66 0-3.29-.44-4.7-1.26l-.34-.2-2.71 1.03.97-2.64-.22-.34a8.93 8.93 0 0 1 1.37-11.17 8.9 8.9 0 0 1 6.35-2.63c2.38 0 4.61.93 6.3 2.63a8.89 8.89 0 0 1 2.61 6.3c-.01 4.92-4.01 8.93-8.93 8.93Zm5-6.6c-.27-.14-1.58-.78-1.82-.87s-.42-.13-.6.14-.69.86-.84 1.03-.31.2-.57.07a7.29 7.29 0 0 1-2.14-1.32 8.12 8.12 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.56.13-.13.27-.3.4-.45.14-.15.18-.27.27-.44.09-.18.05-.33-.02-.47s-.6-1.45-.83-1.99c-.22-.52-.45-.44-.6-.45l-.5-.01a.96.96 0 0 0-.7.33c-.24.26-.92.89-.92 2.16s.94 2.5 1.08 2.68c.13.17 1.85 2.83 4.5 3.97.63.27 1.12.43 1.5.56.63.2 1.2.17 1.65.1.5-.07 1.58-.64 1.8-1.26.22-.63.22-1.18.16-1.26-.05-.09-.25-.14-.52-.27Z" />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButtons;
