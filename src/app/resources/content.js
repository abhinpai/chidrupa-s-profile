const person = {
  firstName: 'Chidrupa',
  lastName: 'Mamunooru',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'UX / Product Designer',
  avatar: '/images/avatar.png',
  location: 'EST',
  languages: ['English', 'Telugu', 'Hindi']
}

const social = [
  {
    name: 'Behance',
    icon: 'behance',
    link: 'https://www.behance.net/chidrupmamunoo'
  },
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/chidrupa99'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/chidrupa-mamunooru-053a04172/'
  },
  {
    name: 'Medium',
    icon: 'medium',
    link: 'https://medium.com/@mchidrupa'
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:mchidrupa01@gmail.com'
  }
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>UX / Product Designer</>,
  subline: (
    <>
      I'm {person.firstName}, A {person.role} with a Developer’s lens! With a
      background in UX Research, Design, Front-End Development, and Content
      Writing, I have a holistic approach towards Product design and
      Problem-solving.
    </>
  )
}

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: false,
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        I’m {person.firstName} {person.lastName}, a {person.role} with over 5
        years of experience across UX, interaction design, front-end
        development, and content strategy. I'm currently working at Schrödinger
        where I lead the design for LiveDesign and Maestro – platforms used for
        computational chemistry and drug discovery.
        <br />
        <br />
        Previously, I worked as a UX Researcher and Designer at Arizona State
        University and interned at Ourdate, where I streamlined information
        architecture and user flows. My journey also includes front-end
        development at Deloitte where I built web pages and campaign tools with
        HTML, CSS, and JavaScript on Salesforce Marketing Cloud.
        <br />
        <br />
        I specialize in end-to-end product design, usability testing, design
        systems, and research. Tools I use include Figma, Adobe XD, Sketch,
        Zeplin, HTML/CSS, JavaScript, and more. I've designed for enterprise
        platforms, B2B SaaS tools, marketing dashboards, and educational apps in
        agile teams.
        <br />
        <br />
        I’m a curious, self-driven designer who also loves writing, history,
        books, and travel. I thrive in collaborative environments and enjoy
        solving complex problems through user-centered design.
      </>
    )
  },
  work: {
    display: true,
    title: 'Work Experience',
    startDate: '12/01/2018',
    experiences: [
      {
        company: 'Schrodinger',
        timeframe: 'Feb 2024 - Present',
        role: 'UX Designer',
        achievements: [
          <>
            Led the delivery of{' '}
            <b className='highlight-text'>25+ end-to-end major projects</b>{' '}
            within an accelerated timeframe of 1.5 years, for{' '}
            <b className='highlight-text'>LiveDesign</b> software, a spreadsheet
            analytics application for computational chemistry, and
            <b className='highlight-text'> Maestro</b>, a computational modeling
            software for molecular drug discovery.
          </>,
          <>
            Collaborated extensively with UX designers, product managers,
            scientists, strategic deployment managers, and developers to address
            critical challenges, ensuring the delivery of customer-centric
            solutions for issues based on import/export features, data
            visualization tools, dialogues, errors, warnings, and formula
            builder features.
          </>,
          <>
            Spearheaded the creation of a comprehensive{' '}
            <b className='highlight-text'>design system</b> catering to both
            Light and Dark themes and the development of a versatile component
            library with 100+ components to streamline design and development
            processes.
          </>,
          <>
            Organized site visits and{' '}
            <b className='highlight-text'>usability interviews</b> with
            medicinal chemists, computational chemists, and biologists to craft
            a robust redesign proposal addressing multiple features and
            functionalities, empowering users with greater control and
            visibility over workflow progress.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9
          // }
        ]
      },
      {
        company: 'Arizona State University – Financial Aid Department',
        timeframe: 'April 2022 - December 2023',
        role: 'UX Researcher & Designer',
        achievements: [
          <>
            Revised 10+ Functional User flows on{' '}
            <b className='highlight-text'>Oracle PeopleSoft Enterprise(PSE)</b>{' '}
            and <b className='highlight-text'>Salesforce</b>, and proposed
            usability recommendations based on the customization constraints of
            the enterprise software.
          </>,
          <>
            Collaborated with developers and department stakeholders to analyze
            user needs and requirements, and propose a streamlined{' '}
            <b className='highlight-text'>information architecture</b> to
            enhance task efficiency and success rates by 30%.
          </>,
          <>
            Compiled and harmonized 150+ intricate technical job documents into
            a unified, user-friendly document, facilitating seamless
            communication between functional and technical teams.
          </>,
          <>
            Documented web forms and their functionalities methodically on
            <b className='highlight-text'>Atlassian JIRA</b>, exceeding project
            expectations by completing the task twice as quickly as anticipated.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: '/images/projects/project-01/cover-01.jpg',
          //   alt: 'Once UI Project',
          //   width: 16,
          //   height: 9
          // }
        ]
      },
      {
        company: 'Ourdate',
        timeframe: 'January 2023 - April 2023',
        role: 'UX Design Intern',
        achievements: [
          <>
            Developed Information Architecture,{' '}
            <b className='highlight-text'>
              User Flows, and Interactive Prototypes
            </b>{' '}
            using <b className='highlight-text'>Figma</b>, resulting in a
            remarkable 50% reduction in time per flow for the Date Proposals and
            Events Planning section.
          </>,
          <>
            Spearheaded the conceptual design of a{' '}
            <b className='highlight-text'>Business dashboard</b> with 15+
            metrics to visualize event analytics for Business owners and event
            organizers effectively.
          </>,
          <>
            Orchestrated daily Brainstorming Sessions, fostering
            cross-functional synergy among UX designers, Content Strategists,
            engineers, marketers, and business analysts. This approach
            stimulated creativity and internally tested numerous concepts.
          </>,
          <>
            Leveraged a rapid, iterative process including 30+{' '}
            <b className='highlight-text'>Usability tests</b>
            to construct end-to-end app flows, encompassing Design Systems and
            seamless <b className='highlight-text'>Design Handoffs</b> using
            Zeplin. Accomplished within a challenging 20-day timeframe.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9
          }
        ]
      },
      {
        company: 'Deloitte Consulting India Pvt Ltd ',
        timeframe: 'January 2021 - December 2021',
        role: 'Front-End Developer',
        achievements: [
          <>
            Developed 30+ emails and web pages with HTML, CSS, JavaScript,
            jQuery on{' '}
            <b className='highlight-text'>Salesforce Marketing Cloud</b> (SFMC)
            to improve customer and employee engagement. Recognized with a{' '}
            <b className='highlight-text'>Spot Award</b> for exceptional
            contributions within a mere 3 months of joining the team.
          </>,
          <>
            Coordinated with Salesforce Developers and QA teams, employing JIRA
            and <b className='highlight-text'>Micro Focus</b> ALM to
            troubleshoot and optimize diverse marketing campaigns, ensuring
            seamless rendering across various email clients in a 2-week{' '}
            <b className='highlight-text'>agile</b> software development life
            cycle.
          </>,
          <>
            Collaborated with Design, QA and Business teams to customize the UI
            of <b className='highlight-text'>Datorama</b> – Business
            intelligence data analytics dashboard within a span of 1 month.
          </>,
          <>
            Conceptualized a prototype of a code database for SFMC email
            templates using <b className='highlight-text'>Adobe XD</b>, aligning
            it with the company's brand guidelines for a campus initiative
            within a 5-day design sprint.
          </>
        ],
        images: []
      }
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Arizona State University, AZ, USA ',
        description: <>M.S in Human-Computer Interaction.</>,
        timeframe: 'January 2022 - December 2023'
      },
      {
        name: 'VNRVJIET, TS, India',
        description: <>B. Tech in Electronics and Communication Engineering.</>,
        timeframe: 'August 2016 - September 2020'
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      },
      {
        title: 'Next.js',
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      }
    ]
  }
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`
}

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal'
    }
  ]
}

export { about, gallery, home, person, social, work }
