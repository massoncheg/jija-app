import React from "react";
import { Link } from "react-router-dom";

interface AboutPageProps {
    language: string;
}

const About = ({ language }: AboutPageProps) => {
    if (language === 'ru') {
        return (
            <div className='flex justify-center'>
                <div className='w-3/4 p-4'>
                    <h1 className='mb-2 text-4xl font-medium'>Об этом сайте</h1>
                    <h2 className='mb-1 text-2xl font-medium' > Для чего этот сайт?</h2>
                    <p className='mb-1 text-lg'>
                        Liquid calculator (Калькулятор жидкости) - это Single Page Application для приготовления жидкостей для электронных сигарет,
                        которое позволяет быстро и удобно рассчитать объемы компонентов и ароматизаторов и сохранить результат как рецепт.
                    </p>
                    <h2 className='mb-1 text-2xl font-medium'> Как использовать?</h2>
                    <p className='mb-1 text-lg'>
                        Чтобы создать рецепт перейдите в
                        <Link to={'/redactor'} className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:text-bg2 focus:outline-none focus:bg-[#5f5fc480]'>
                            редактор
                        </Link>
                        <br />
                        После сохранения рецепта он будет доступен в
                        <Link to={'/my-recipes'} className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:text-bg2 focus:outline-none focus:bg-[#5f5fc480]'>
                            библиотеке рецептов
                        </Link>
                    </p>
                    <h1 className='mb-2 text-2xl font-medium'>О разработке</h1>
                    <p className='mb-1 text-lg'>
                        Это приложение - простой проект, который я реализовал для обучения созданию фронтенда с использованием
                        <span className="mx-1 font-medium">
                            React
                        </span>
                    </p>
                    <p className='mb-1 text-lg'>
                        <span className='mb-2 text-xl'>Использованные технологии:</span>
                        <ul className='ml-8'>
                            <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#61dafb]">React</span> - для разработки приложения</li>
                            <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#ba8fff]">Redux Toolkit</span> - для организации State</li>
                            <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#38bdf7]">Tailwind</span> - для стилизации</li>
                        </ul>
                    </p>
                    <p className='mb-1 text-lg'>
                        C исходным кодом проекта вы можете ознакомиться
                        <a className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:outline-none focus:text-bg2 focus:bg-[#5f5fc480]' href="https://github.com/massoncheg/jija-app">
                            здесь
                        </a>
                    </p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='m-2 '>
                <h1 className='text-2xl font-medium'>About this app</h1>
                <p className='text-lg'>
                    This app is a simple project I've developed to learn frontend using React
                </p>
                <p className='text-lg'>
                    You can see the source code of the project
                    <a className='bg-bg3 text-bg4 px-2 mx-1 rounded-lg hover:bg-[#28359380] ' href="https://github.com/massoncheg/jija-app">
                        here
                    </a>
                </p>
            </div>
        )
    }
}
export default About