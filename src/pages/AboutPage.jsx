import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Database, Coffee, Leaf } from "lucide-react";
import profileImg from "../assets/aa.png";



const AboutPage = () => {
  return (
    <div className="flex-1 px-4 py-10 md:px-10 container mx-auto max-w-5xl pt-24">
      <div className="flex flex-col md:flex-row items-center gap-12 @container">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <img 
            src={profileImg}
            alt="Pratibha's Profile"
            width={340}
            height={340}
            className="rounded-xl transition-transform duration-500 hover:scale-105"
            />

          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-4 text-gray-900 dark:text-white">
            Hey there, I'm Pratibha! 
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hi! I'm a passionate fullstack developer with a love for creating elegant solutions to complex problems. My journey in tech started with curiosity and has evolved into a commitment to continuous learning and growth.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              href="https://github.com/pratzz-00"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <a
             href="mailto:sheoran121ps@gmail.com"
             className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
             aria-label="Gmail"
             >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                </a>

            <a
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
              href="https://www.linkedin.com/in/pratibha-10b71321a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tighter leading-tight mb-4 text-gray-900 dark:text-white">
          My Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          After facing numerous rejections in my job search, I decided to take matters into my own hands. I embarked on a challenge to build multiple projects, learn new technologies, and document my growth. This journey has taught me resilience, problem-solving, and the importance of never giving up.
        </p>

        <h2 className="text-3xl font-bold tracking-tighter leading-tight mb-6 text-gray-900 dark:text-white mt-12">
          My Tech Stacks
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
            </svg>
            <h3 className="font-black text-base text-gray-900 dark:text-white">React</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">Building UIs</p>
          </div>
          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
            </svg>
            <h3 className="font-black text-base text-gray-900 dark:text-white">Tailwind</h3>
            <p className="text-xs text-gray-600 dark:text-gray-300">Styling</p>
          </div>


          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.377 0 0 5.377 0 12c0 6.623 5.377 12 12 12s12-5.377 12-12S18.623 0 12 0zm0 2.069c5.49 0 9.931 4.441 9.931 9.931S17.49 21.931 12 21.931 2.069 17.49 2.069 12 6.51 2.069 12 2.069zm3.138 5.793c-.345 0-.655.172-.862.448l-3.276 4.345-1.655-2.207c-.207-.276-.517-.448-.862-.448-.621 0-1.103.517-1.103 1.103 0 .276.103.552.31.793l2.483 3.31c.207.276.517.448.862.448.345 0 .655-.172.862-.448l4.138-5.517c.207-.241.31-.517.31-.793 0-.586-.482-1.034-1.207-1.034z"/>
            </svg>
            <h3 className="font-black text-base">FastAPI</h3>
            <p className="text-xs text-gray-600">Backend</p>
          </div>
          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
  <svg className="w-12 h-12 mx-auto mb-2" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482v-1.69c-2.782.605-3.369-1.343-3.369-1.343-.455-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.252-4.555-1.11-4.555-4.943 0-1.092.39-1.986 1.03-2.686-.103-.252-.446-1.27.099-2.65 0 0 .84-.27 2.75 1.027A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.747-1.027 2.747-1.027.546 1.38.203 2.398.1 2.65.64.7 1.03 1.594 1.03 2.686 0 3.842-2.338 4.687-4.566 4.934.36.31.678.92.678 1.855v2.748c0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"/>
  </svg>
  <h3 className="font-black text-base">GitHub</h3>
  <p className="text-xs text-gray-600">Version Control</p>
</div>

<div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
  <Database className="w-12 h-12 mx-auto mb-2" />
<h3 className="font-black text-base">MongoDB</h3>
<p className="text-xs text-gray-600">NoSQL Database</p>

</div>



<div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
  <Coffee className="w-12 h-12 mx-auto mb-2" />
<h3 className="font-black text-base">Java</h3>
<p className="text-xs text-gray-600">Core Backend</p>


</div>


<div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
  <Leaf className="w-12 h-12 mx-auto mb-2" />
<h3 className="font-black text-base">Spring Boot</h3>
<p className="text-xs text-gray-600">REST APIs</p>


</div>

















          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-.7515-.1812l-7.1898 4.1906c-.8375.4878-1.4142 1.3547-1.5875 2.3693-.0396.2314-.0544.4595-.0544.6816 0 .3433.0632.6816.1865.9957.1233.3173.3198.6145.5795.8763.2464.2632.5409.4742.8672.6336.3262.1605.6838.2567 1.0544.2567.3706 0 .7282-.0962 1.0544-.2567.3262-.1594.6208-.3704.8672-.6336.8027-.8615.9218-2.1266.4229-3.1543-.019-.0396-.044-.0792-.0633-.1219-.0466-.1035-.0966-.2082-.1526-.3107-.0218-.0396-.0466-.0792-.0702-.1219-.0658-.1173-.1384-.2315-.217-.3488-.0247-.0365-.0525-.0718-.0791-.1085-.0903-.1278-.1886-.2523-.2938-.3767-.0326-.0377-.0658-.0778-.1014-.1155-.1097-.1263-.2297-.2494-.3589-.3732-.0378-.0355-.0779-.0725-.1173-.1085-.1272-.1103-.2644-.2196-.4092-.3271-.0445-.0334-.0917-.0671-.1376-.1008-.1492-.1041-.3086-.2061-.4753-.3062l-8.3326-4.9233c-.2858-.1690-.6535-.0753-.8202.2105s-.0753.6535.2105.8202l8.3326 4.9233c.4337.2567.7784.6163 1.0206 1.0514-.1642.0071-.3307.0213-.5013.0421-.5559.0712-.9221.1977-1.1382.2693-.0978.0343-.1934.0784-.2857.1331-.092.0547-.1807.1197-.2632.1950-.0825.0753-.1586.1594-.2258.2513-.0671.092-.1243.1918-.1704.3003-.0461.1068-.0813.2221-.1041.3458-.0228.1237-.0334.2552-.0334.3952 0 .3262.0632.6419.1785.9463.1152.3044.2857.5886.5013.8457.2156.2571.4748.4742.7675.6419.2927.1677.6189.2858.9666.3458.3477.0596.7061.0596 1.0544 0 .3477-.0596.6738-.1781.9666-.3458.2927-.1677.5519-.3848.7675-.6419.2156-.2571.3861-.5413.5013-.8457.1152-.3044.1785-.6201.1785-.9463 0-.3262-.0632-.6419-.1785-.9463-.1152-.3044-.2857-.5886-.5013-.8457-.2156-.2571-.4748-.4742-.7675-.6419-.2927-.1677-.6189-.2858-.9666-.3458-.0918-.0158-.1836-.0258-.2754-.0334.0632-.0888.1384-.1724.2258-.2477.0875-.0753.1864-.1331.2927-.1677.1064-.0345.2157-.0525.3262-.0525.1104 0 .2199.0181.3262.0525.1064.0345.2052.0925.2927.1677.0875.0753.1626.1589.2258.2477.0632.0888.1152.1864.1526.2857.0374.0992.0632.2052.0751.3146.0119.1094.0119.2221 0 .3315-.0119.1094-.0377.2154-.0751.3146-.0374.0993-.0894.1969-.1526.2857-.0632.0888-.1384.1724-.2258.2477-.0875.0753-.1864.1331-.2927.1677-.1064.0345-.2157.0525-.3262.0525-.1104 0-.2199-.0181-.3262-.0525-.1064-.0345-.2052-.0925-.2927-.1677-.0875-.0753-.1626-.1589-.2258-.2477-.0632-.0888-.1152-.1864-.1526-.2857-.0374-.0992-.0632-.2052-.0751-.3146-.0119-.1094-.0119-.2221 0-.3315.0119-.1094.0377-.2154.0751-.3146.0374-.0993.0894-.1969.1526-.2857.0632-.0888.1384-.1724.2258-.2477.0875-.0753.1864-.1331.2927-.1677.1064-.0345.2157-.0525.3262-.0525h.0183c.7262.0071 1.4413.2302 2.0352.6419l2.2843 1.4693c.2858.1839.6634.1035.8457-.1812.1823-.2858.1035-.6634-.1812-.8457l-2.2843-1.4693c-.9112-.5859-1.9633-.8873-3.0351-.8873-.9699 0-1.9398.2302-2.8205.6816-.8808.4514-1.6509 1.0966-2.2443 1.8775-.5934.7809-1.0092 1.6816-1.2095 2.6516-.2002.9699-.1705 1.9833.0894 2.9333.2599.95.7262 1.8265 1.3598 2.5575.6336.7309 1.4142 1.3048 2.2843 1.6816.8702.3767 1.8092.5559 2.7491.5259.9399-.0299 1.8658-.2602 2.7091-.6816.8433-.4214 1.5838-.9999 2.1643-1.6916.5805-.6916 1.0007-1.4943 1.2305-2.3643.2298-.8699.2698-1.7932.1152-.2698z"/>
            </svg>
            <h3 className="font-black text-base">PostgreSQL</h3>
            <p className="text-xs text-gray-600">Database</p>
          </div>
          <div className="group bg-gray-50 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl p-5 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:border-gray-900 dark:hover:border-white">
            <svg className="w-12 h-12 mx-auto mb-2 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
            </svg>
            <h3 className="font-black text-base">Next.js</h3>
            <p className="text-xs text-gray-600">Full-stack</p>
          </div>

















        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
            Get in Touch
          </Link>
          <a href="/resume.pdf" download className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;