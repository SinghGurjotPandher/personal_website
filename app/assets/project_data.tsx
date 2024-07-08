type Project = {
    id: number,
    name: string,
    skills_used: string,
    description: string,
    code_link: string, 
    timing: string
};

export const projects : Project[] = [{
    id: 0,
    name: 'Classroom Site',
    skills_used: 'Python, Django, HTML, CSS, JavaScript',
    description: `Designed a Google Classroom like website for teachers to assign quizzes to students and
     view their scores.`,
    code_link: 'https://github.com/SinghGurjotPandher/quiz_project/tree/main/capstone',
    timing: 'Sep 2023'
}, {
    id: 1,
    name: 'Network Site',
    skills_used: 'Python, Django, HTML, CSS, JavaScript',
    description: `Designed a Twitter-like social network website for making/editing/liking posts and 
    following other users.`,
    code_link: 'https://github.com/SinghGurjotPandher/network_project/tree/main/project4',
    timing: 'Sep 2023'
}, {
    id: 2,
    name: 'Mail Site',
    skills_used: 'Python, Django, HTML, CSS, JavaScript',
    description: `Designed a front-end for an email client that makes API calls to send, reply, and receive 
    emails.`,
    code_link: 'https://github.com/SinghGurjotPandher/mail_project/tree/main/mail',
    timing: 'Aug 2023'
}, {
    id: 3,
    name: 'Commerce Site',
    skills_used: 'Python, Django, HTML, CSS',
    description: `Developed an e-commerce auction site that allows users to post auction listings, place bids 
    on listings, comment on those listings, and add listings to a “watchlist.”`,
    code_link: 'https://github.com/SinghGurjotPandher/commerce_project/tree/main/commerce',
    timing: 'Jul 2023'
}, {
    id: 4,
    name: 'Wikipedia Site',
    skills_used: 'Python, Django, HTML, CSS',
    description: `Designed an online encyclopedia site where you can see a list of pages on the home page, 
    add a new page to a list, search pages in the encyclopedia, and open a random page.`,
    code_link: 'https://github.com/SinghGurjotPandher/wiki_project/tree/main/wiki',
    timing: 'Jun 2023'
}, {
    id: 5,
    name: 'Search Site',
    skills_used: 'HTML, CSS',
    description: `Created a front-end for Google Search, Google Image Search, and Google Advanced Search.`,
    code_link: 'https://github.com/SinghGurjotPandher/google_search_page/tree/main/Project_0',
    timing: 'May 2023'
}, {
    id: 6,
    name: 'Airline Reservation Program',
    skills_used: 'Python',
    description: `Features the ability to reserve flights (First Class and Coach), see available and booked 
    flights, and search for open seats in terminal.`,
    code_link: 'https://github.com/SinghGurjotPandher/python_airline_project',
    timing: 'Jun 2021'
}];