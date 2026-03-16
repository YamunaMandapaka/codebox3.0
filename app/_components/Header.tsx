import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const courses = [
    {
        id: 1,
        name: "HTML",
        desc: "Learn the fundamentals of HTML including tags, elements, forms, tables, and semantic structure to build the foundation of modern web pages.",
        path: "/course/1/detail"
    },
    {
        id: 2,
        name: "CSS",
        desc: "Understand CSS styling, layouts, flexbox, grid, animations, and responsive design to create visually appealing websites.",
        path: "/course/2/detail"
    },
    {
        id: 3,
        name: "JavaScript",
        desc: "Master JavaScript basics such as variables, loops, functions, arrays, objects, events, and DOM manipulation for interactive websites.",
        path: "/course/3/detail"
    },
    {
        id: 4,
        name: "React",
        desc: "Learn React fundamentals including components, props, state, hooks, and building reusable UI for modern frontend applications.",
        path: "/course/4/detail"
    },
    {
        id: 5,
        name: "React Advanced",
        desc: "Explore advanced React concepts like Context API, custom hooks, performance optimization, routing, and large scale application structure.",
        path: "/course/5/detail"
    },
    {
        id: 6,
        name: "Python",
        desc: "Learn Python programming including syntax, loops, functions, lists, dictionaries, and problem-solving techniques.",
        path: "/course/6/detail"
    },
    {
        id: 7,
        name: "Python Advanced",
        desc: "Study advanced Python topics such as object-oriented programming, file handling, modules, exception handling, and libraries.",
        path: "/course/7/detail"
    },
    {
        id: 8,
        name: "Generative AI",
        desc: "Understand generative AI concepts, prompt engineering, AI models, and how to build applications using modern AI tools.",
        path: "/course/8/detail"
    },
    {
        id: 9,
        name: "Machine Learning",
        desc: "Learn machine learning fundamentals including data preprocessing, supervised learning, model training, and evaluation techniques.",
        path: "/course/9/detail"
    }
];
function Header() {
    return (
        <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
            <div className='flex gap-2 items-center'>
                <Image src={'/crown.png'} alt='logo' width={40} height={40} />
                <h2 className='font-bold text-3xl font-game'>CodeBox</h2>
            </div>
            {/*Navbar*/}
            <NavigationMenu>
                <NavigationMenuList className='gap-8'>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-2 sm:w-[400px] lg:w-[600px] '>
                                {
                                    courses.map((course, index) => (
                                        <div key={index} className='p-2 hover:bg-accent rounded-xl cursor-pointer'>
                                            <h2 className='font-medium'>{course.name}</h2>
                                            <p className='text-sm text-gray-500'>{course.desc}</p>
                                        </div>
                                    ))
                                }
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/projects'}>Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/pricing'}>Pricing</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <Link href={'/contact-us'}>Contact Us</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/*signup button*/}
            <Button className='font-game text-2xl' variant={'pixel'}>Sign Up </Button>
        </div>
    )
}
export default Header
