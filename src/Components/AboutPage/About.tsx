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
                <div className='flex justify-center'>
                    <div className='w-3/4 p-4'>
                        <h1 className='mb-2 text-4xl font-medium'>About this app</h1>
                        <h2 className='mb-1 text-2xl font-medium' > What is this app for?</h2>
                        <p className='mb-1 text-lg'>
                            Liquid calculator is a Single Page Application for e-cigarets liquid making which allows to
                            calculate components and flavorings volumes and save result to local recipe storage.
                        </p>
                        <h2 className='mb-1 text-2xl font-medium'>How to use it?</h2>
                        <p className='mb-1 text-lg'>
                            To create a recipe go to
                            <Link to={'/redactor'} className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:text-bg2 focus:outline-none focus:bg-[#5f5fc480]'>
                                redactor
                            </Link>
                            <br />
                            After saving the recipe, it will be available in
                            <Link to={'/my-recipes'} className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:text-bg2 focus:outline-none focus:bg-[#5f5fc480]'>
                                recipe gallery
                            </Link>
                        </p>
                        <h1 className='mb-2 text-2xl font-medium'>About development</h1>
                        <p className='mb-1 text-lg'>
                            This app is a simple project I've developed to learn frontend using
                            <span className="mx-1 font-medium">
                                React
                            </span>
                        </p>
                        <p className='mb-1 text-lg'>
                            <span className='mb-2 text-xl'>Used technologies:</span>
                            <ul className='ml-8'>
                                <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#61dafb]">React</span> - for general development</li>
                                <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#ba8fff]">Redux Toolkit</span> - for State management</li>
                                <li><span className="bg-[#20232a] px-2 font-medium rounded-md text-[#38bdf7]">Tailwind</span> - for styling</li>
                            </ul>
                        </p>
                        <p className='mb-1 text-lg'>
                            You can find the source code of the project
                            <a className='text-bg3 font-bold px-1 rounded-lg hover:text-bg2 focus:outline-none focus:text-bg2 focus:bg-[#5f5fc480]' href="https://github.com/massoncheg/jija-app">
                                here
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About