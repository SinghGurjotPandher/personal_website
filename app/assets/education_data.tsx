type Education = {
    id: number,
    school: string,
    education_level: string,
    GPA: string,
    location: string, 
    graduation_date: string,
    awards: string,
    relevant_coursework: string
};

export const educations : Education[] = [{
    id: 0,
    school: 'University of California, Irvine',
    education_level: 'BS in Computer Science',
    GPA: '3.609',
    location: 'Irvine, California',
    graduation_date: 'Jun 2027',
    awards: `Deans Honor List (2x): Winter 2024, Spring 2024. Hackathons: VenusHacks, IrvineHacks. 
    Organizations: Hack@UCI, CodePath, Sikh Student Association.`,
    relevant_coursework: `Relevant Coursework: 
        Discrete Mathematics for Computer Science,
        Python Programming with Libraries (Accelerated),
        Intermediate Programming with Python,
        Single-Variable Calculus II,
        Boolean Logic and Discrete Structures,
        Programming in C++ as a Second Language,
        Intro to Software Engineering    
    `
}, {
    id: 1,
    school: 'Henry J. Kaiser High School',
    education_level: 'High School Diploma',
    GPA: '4.71',
    location: 'Fontana, California',
    graduation_date: 'May 2023',
    awards: `Activities/Honors: Top 10 Medal | AP Capstone Diploma | AP Scholar with Distinction | 
    Summer Math Tutoring | Magnolia Chain | Cybersecurity Club | Multicultural Club | California Scholarship 
    Federation (CSF) | National Honor Society (NHS) | Early Academic Outreach Program (EAOP)`,
    relevant_coursework: `Relevant Coursework:
        AP Computer Science Principles,
        AP Calculus AB, 
        AP Calculus BC, 
        Funds of Microsoft Windows, 
        Intro to Computer Info Systems, 
        Intro to Computer Programming, 
        Programming Concepts/Methodology I.
    `
}];