interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Coding Ninjas',
    description: `Coding Ninjas offers high-quality tech courses in web development, Kubernetes, data structures and algorithms, and machine learning. With hands-on learning, expert mentors, and comprehensive curricula, Coding Ninjas equips students with practical skills and industry readiness, fostering successful tech careers.`,
    imgSrc: '/static/images/ninjas.jpeg',
    href: 'https://www.google.com',
  },
  {
    title: 'Coding Ninjas',
    description: `Coding Ninjas offers high-quality tech courses in web development, Kubernetes, data structures and algorithms, and machine learning. With hands-on learning, expert mentors, and comprehensive curricula, Coding Ninjas equips students with practical skills and industry readiness, fostering successful tech careers.`,
    imgSrc: '/static/images/ninjas.jpeg',
    href: 'https://www.google.com',
  },
]

export default projectsData
