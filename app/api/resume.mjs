export async function get(req){

  const experience = [
    {
      company: 'Goodfood',
      role: 'Full stack developer',
      start: 2020,
      end: 2023,
      description: 'Developed and maintained makegoodfood.ca (laravel 5.x, MySQL 5,7)\n' +
        'Break monolithic application into microservices  using Javascript, typescript, nodejs.\n' +
        'Seamlessly migrate users to new platform\n' +
        'Create new features to support business requirements\n'
    },
    {
      company: 'Redstamp Agency, Port Moody B.C',
      role: 'Front end developer',
      start: 2020,
      end: 2020,
      description: 'Developed and maintained custom themes for WordPress\n' +
        'Kept Client’s Wordpress core and plugins up to date\n' +
        'Built Gutenberg Themes and content blocks\n' +
        'Used jQuery, React.js to maintain client sites\n' +
        'Maintained, wrote efficient, scalable code for a NuxtJS application \n' +
        'Used a GIT-centric workflow\n' +
        'integrate websites with various third-party API\'s for data collection and display (CRM\'s, RMS\'s, etc.)\n' +
        'Used Buddy.works to build CI/CD pipelines'
    },
    {
      company: 'Atomic Reach, Toronto',
      role: 'Front end developer',
      start: 2019,
      end: 2020,
      description: 'Developed and expanded platform (ReactJS, Redux) features and functionality.\n' +
        'Maintained the central databases (MySQL), ensured high performance, and responded to requests from the front-end. \n' +
        'Created endpoints, maintained and  secure API (PHP, Linux, Nginx)for our web and mobile applications.  \n' +
        'Optimized the application for maximum speed and scalability. \n'
    },
    {
      company: 'Engage People, Markham',
      role: 'Full stack developer',
      start: 2016,
      end: 2019,
      description: 'Integrated various aspects of Third Party systems into SaaS applications based on strong understanding of RESTful APIs.(Zend Framework 1 and 2 and Laravel 4.2 and Laravel 5 ) \n' +
        'Delivered all aspects of a web application including front end technologies (HTML, CSS,  AJAX, and JavaScript ES6 frameworks), and back end technologies (including MySQL,  MongoDB and PHP frameworks).  \n' +
        'Coached and mentored less experienced developers through design sessions and code re- views.\n' +
        'Provided recommendations on how software can enhance end user experience.  \n' +
        'Kept abreast of emerging technologies (VueJs, Angular, Docker, AWS)  \n' +
        'Maintained and created code for Loyalty Rewards, Incentive Programs, and Employee  Recognition platform (Bitbucket, Svn) \n' +
        'Work on Ubuntu, FreeBSD, Apache 2.2 and 2.4, Nginx, LAMP\n'
    },
    {
      company: 'Dr. Bernstein Diet & Health Clinics, Toronto',
      role: 'Web developer',
      start: 2014,
      end: 2016,
      description: 'Improved an created code for their existing applications in Wordpress 3 and 4, and Drupal 7\n' +
        'and 8\n' +
        '● Used Bootstrap to create responsive design.\n' +
        '● Applied DRY techniques.\n' +
        '● Achieved to learn and collaborated in the iOS App with Ionic.\n' +
        '● Used JQuery and Javascript to create dynamic content.\n' +
        '● Used IIS and SQL Server 2008 R2.\n' +
        '● Worked with Symfony 1.4 PHP framework.\n' +
        '● Worked in a LAMP environment.'
    },
    {
      company: 'Mindgeek',
      role: 'Web developer',
      start: 2014,
      end: 2014,
      description: 'Created Smart TV applications for Philips using JavaScript, JQuery, HTML, CSS, AJAX,\n' +
        'PHP.\n' +
        '● Met the design directives.\n' +
        '● Revised code to improve performance.\n' +
        '● Improved code for updates on existing websites.\n' +
        '● Installed memcache on a local server to test the applications in a similar production environment.\n' +
        '● Used Git and SVN clients (Transmit and Cornerstone) to pushed changes to the repository\n' +
        '● Worked in a MAMP and LAMP environment .\n'
    },
    {
      company: 'Quebec Amerique',
      role: 'Analyst programmer',
      start: 2011,
      end: 2014,
      description: 'Developed applications using HTML and CSS.\n' +
        '● Used JQuery and Javascriptto create dynamic content.\n' +
        '● Worked with the Kohana 3.1 and 3.2 PHP HMVC framework.\n' +
        '● Used AJAX and PHP to get the data for the data-driven applications.\n' +
        '● Tested applications to find major problems before release.\n' +
        '● Used xCode development environment for mac and iOS.\n' +
        '● Developed visual dictionary for iPad with Objective-C.\n' +
        '● Set up an e-commerce solution with OpenCartto sell a french dictionary\n' +
        '"multidictionnaire".\n' +
        '● Created a Mac-OSX/PC french Dictionary with Qt, a C++ library.\n' +
        '● Started Android application for the french dictionary using eclipse.\n' +
        '● Used SmartSVN to push changes to the repository.\n' +
        '● Worked in a XAMPP and LAMP environment\n' +
        '● Migrated from 4D database to MySQL database.\n' +
        '● Created the backbone for the web application.\n' +
        '● Corrected bugs on existing applications.\n' +
        '● Registered the correction on the bug tracking system.\n' +
        '● Used JQuery and Javascript to implement sliders and dropdown menus .\n'
    },

  ]

  return { json: {experience} }
}
