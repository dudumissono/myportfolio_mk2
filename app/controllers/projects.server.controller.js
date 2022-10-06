/*
Student: Eduardo Missono
Student ID: 301200673
Date: Oct 03, 2022
 */

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('projects', {
        title: 'Projects',
        description: 'As my tech career is just beginning, I decided to list here one tech job and two other projects that I’ve worked on before.',
        projectOne: {
            title: 'Software Development',
            img: '/img/internship.png',
            alt: 'Internship',
            description: 'Right now, I’m working as a part-time intern at a Canadian tech company. My main activity today is to update and manage content from a group of clients that uses an application built using low-code tools. Although I’m using some low-code interfaces, I’m constantly exercising programming logic and writing some custom code within the software to match the client’s requirements.',
            references: 'https://www.pixelstech.net/article/1328089711-A-brief-guide-to-tech-internships'
        },
        projectTwo: {
            title: 'Audio Production Manager',
            img: '/img/advertising.jpeg',
            alt: 'Advertising',
            description: 'My last two stops as an audio production manager were in Satelite Audio and Lucha Libre Audio. I was responsible for getting the briefing from the client, then pass along to the team, and check all the material to make sure that everything was according to the client’s requirements. Although I did not participate in their recent works, there are a lot of ad campaigns in their reel that I had the opportunity to be part of.',
            references: 'https://hbr.org/2021/02/what-digital-advertising-gets-wrong'
        },
        projectThree: {
            title: 'Audio Engineer',
            img: '',
            alt: '',
            description: 'These two records are very special to me. Michel’s album was one of the first opportunities that I had to sit in the front char of a recording session. In Biquini Cavadão’s recording session, I worked as an assistant to the recording engineer, and it was special because it was the first time that I had the opportunity to work with a major artist in Brazil. Fun fact, in track one (“Zé Ninguém”) at the 3’09’’mark, you may be able to hear my voice among several others.',
            references: ''
        }
    })
};