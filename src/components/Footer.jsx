import React from 'react';
import { Github, Linkedin} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark py-10">
      <div className="px-4 md:px-10 lg:px-20 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6">
          <div className="flex justify-center items-center gap-6">
  <a
    href="https://github.com/pratzz-00"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="text-vibrant-accent hover:text-[#d8e4f4] transition-colors duration-300"
  >
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.18a11 11 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.18 3.17-1.18.63 1.65.23 2.87.11 3.17.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.08.79 2.18 0 1.58-.01 2.86-.01 3.25 0 .31.2.68.8.56C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z"
      />
    </svg>
  </a>

  <a
    href="https://www.linkedin.com/in/pratibha-10b71321a/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-vibrant-accent hover:text-[#d8e4f4] transition-colors duration-300"
  >
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0V8zm7.5 0H12v2h.1c.6-1.1 2.05-2.3 4.2-2.3 4.5 0 5.3 3 5.3 6.9V22H17v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.6-2.5 3.5V22H7.5V8z" />
    </svg>
  </a>

  <a
    href="https://leetcode.com/u/Pratibha_00/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LeetCode"
    className="hover:opacity-80 transition-opacity duration-300"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
      alt="LeetCode"
      className="w-6 h-6 dark:invert"
    />
  </a>
</div>

          <p className="text-subtext-light dark:text-subtext-dark">© 2025 Pratibha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;