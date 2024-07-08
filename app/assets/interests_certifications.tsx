type Certification = {
    id: number,
    title: string,
    organization: string,
    timing: string,
    skills: string
}

type Organization = {
    id: number,
    organization: string,
    timing: string
}

type Hackathon = {
    id: number,
    name: string,
    organization: string, 
}

type Honor_Award = {
    id: number,
    name: string,
    organization: string,
    timing: string,
    description: string
}

type Language = {
    id: number,
    title: string,
    proficiency: string
}

export const certifications: Certification[] = [{
    id: 0,
    title: 'Python (Basic) Certificate',
    organization: 'HackerRank',
    timing: 'Jan 2024',
    skills: 'Python'
}, {
    id: 1,
    title: 'Problem Solving (Basic) Certificate',
    organization: 'HackerRank',
    timing: 'Nov 2023',
    skills: 'Problem Solving, Python'
}, {
    id: 2,
    title: 'Web Programming with Python and JavaScript Certificate',
    organization: 'Havard University',
    timing: 'Sep 2023',
    skills: `SQLite, HTML, CSS, Fetch API, User Interface Programming, Django Models, Git, Django, 
    Python, VS Code, JavaScript`
}]


export const organizations: Organization[] = [ {
    id: 0,
    organization: 'CodePath',
    timing: 'Jun 2024 - Present'
}, {
    id: 1,
    organization: 'Hack@UCI',
    timing: 'Jan 2024 - Present'
}, {
    id: 2,
    organization: 'California Scholarship Federation (CSF)',
    timing: 'Aug 2019 - May 2023'
}, {
    id: 3,
    organization: 'CyberSecurity Club',
    timing: 'Jul 2021 - May 2023'
}, {
    id: 4,
    organization: 'Early Academic Outreach Program (EAOP)',
    timing: 'Aug 2019 - May 2023'
}, {
    id: 5,
    organization: 'Multicultural Club',
    timing: 'Feb 2022 - May 2023'
}, {
    id: 6,
    organization: 'National Honor Society (NHS)',
    timing: 'Aug 2021 - May 2023'
}]

export const hackathons: Hackathon[] = [ {
    id: 0,
    name: 'VenusHacks',
    organization: 'UC Irvine',
}, {
    id: 1,
    name: 'IrvineHacks',
    organization: 'Hack@UCI'
}]

export const honors_awards: Honor_Award[] = [ {
    id: 0,
    name: 'Deans Honor List',
    organization: 'UC Irvine',
    timing: 'Jan 2024, Jun 2024',
    description: `Awarded to a student who was enrolled in at least 12 units and that quarter's grade point
     average was 3.5 or higher. I received this award for the following quarters:
    - Winter 2024
    - Spring 2024`
}, {
    id: 1,
    name: 'Top 10 Medal',
    organization: 'Kaiser High School Administration', 
    timing: 'Jun 2023', 
    description: `I received Top 10 Medal based on my top 10 rank out of approx. 500 high school graduates.`
}, {
    id: 2,
    name: 'AP Capstone Diploma',
    organization: 'The College Board', 
    timing: 'May 2023',
    description: `I achieved academic distinction by completing a challenging Advanced Placement course of 
    study while attaining college-level research skills and has earned the AP Capstone Diploma by successfully 
    completing AP Seminar, AP Research, and a minimum of four additional AP courses and exams with scores of 3 
    or higher - CollegeBoard.`
}, {
    id: 3,
    name: 'AP Scholar with Distinction', 
    organization: 'The College Board',
    timing: 'Aug 2021',
    description: `I have earned the AP Scholar with Distinction Award for achieving an average score of at 
    least 3.5 on all AP Exams taken, and scores of 3 or higher on five or more exams - CollegeBoard.`
}]

export const languages: Language[] = [ {
    id: 0,
    title: 'English',
    proficiency: 'Full professional proficiency'
}, {
    id: 1,
    title: 'Hindi (State Seal of Biliteracy)',
    proficiency: 'Professional working proficiency'
}, {
    id: 2, 
    title: 'Punjabi (District and State Seal of Biliteracy)',
    proficiency: 'Native or bilingual proficiency'
}, {
    id: 3,
    title: 'Spanish',
    proficiency: 'Limited working proficiency'
}]