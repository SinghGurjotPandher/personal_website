type Experience = {
    id: number,
    job_title: string,
    organization_name: string,
    location: string,
    timing: string,
    description: string
};

export const experiences : Experience[] = [{
    id: 0,
    job_title: 'Research Assistant',
    organization_name: 'UC Irvine',
    location: 'Irvine, California',
    timing: 'Sep 2024 - Present',
    description: 'Joining a research lab with Professor Lopes focused on Software Engineering.'
}, {
    id: 1,
    job_title: 'Xplore Program Participant ',
    organization_name: 'TechPoint',
    location: 'Remote',
    timing: 'Jun 2024 - Jul 2024',
    description: `Completed six weeks of career exploration curriculum using Forage, exploring careers 
    in Cybersecurity, Data Science, Artificial Intelligence, Software Development, and Project Management. 
    Joined a small group led by an industry mentor and attended bi-weekly panels on these careers.`
}, {
    id: 2,
    job_title: 'Integrated Mathematics Summer Tutor', 
    organization_name: 'Fontana Unified School District',
    location: 'Fontana, California',
    timing: 'Jun 2022',
    description: `My role as a tutor was to explain concepts such as graphing, solving equations, 
    congruence/transformations in triangles, trigonometric and exponential functions to summer students 
    in need of help.`
}, {
    id: 3,
    job_title: 'Interdisciplinary Tutor', 
    organization_name: 'UPchieve',
    location: 'Remote',
    timing: 'Jul 2022', 
    description: `Provided online interdisciplinary tutoring to low-income students who cannot afford 
    expensive tutoring services.`
}];