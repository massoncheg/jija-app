import React from "react";

interface AboutPageProps {
    language: string;
}

const About = ({ language }: AboutPageProps) => {

    return (
        <div className='m-2 '>
            <h1 className='text-2xl font-medium'>{language === 'ru' ? "Об этом сайте" : "About this app"}</h1>
            <p className='text-lg'>
                {language === 'ru' ?
                    "Это приложение - простой проект, который я реализовал для обучения созданию фронтенда с использованием React"
                    : "This app is a simple project I've developed to learn frontend using React"
                }
            </p>
            <p className='text-lg'>
                {language === 'ru' ?
                    "C исходным кодом проекта вы можете ознакомиться"
                    : "You can see the source code of the project"
                }
                <a className='bg-bg3 text-bg4 px-2 mx-1 rounded-lg hover:bg-bg2' href="https://github.com/massoncheg/jija-app">
                    {language === 'ru' ?
                        "здесь"
                        : "here"
                    }
                </a>
            </p>
        </div>
    )
}
export default About