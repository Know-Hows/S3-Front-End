import LoginButton from "../components/LoginButtonComponent";
import NavBar from "../components/NavBarComponent";
import Scroll from "../components/ScrollComponent";
import backgroundImage from "../Images/BgImage.jpg";
import { LearningSkillsCard } from "../components/cardfeature1Component";
import { PostingSkillsCard } from "../components/PostingSkillsCard ";
import { MakingMoneyCard } from "../components/MakingMoneyCard";
import { Avatar, Typography } from "@material-tailwind/react";
import lean from "../Images/download.png";
import jimmy from "../Images/og-default-image.jpeg";
import { LoadingCard } from "../components/LoadingCard";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [isLoading4, setIsLoading4] = useState(true);
    //just here to show the loading card
    //alter with fetch when you have mock data to show
    useEffect(() => {
        setTimeout(() => {
            setIsLoading4(false);
          }, 500); 
    }, []);
        


    return (
        <div className="flex flex-col min-h-screen">

            <NavBar />

            <div className="relative min-h-screen">
                <div
                    className="absolute inset-0"
                    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
                ></div>
                <div className="relative flex items-center justify-center min-h-screen">
                    <div className="text-center text-white">
                        <h1 className="text-6xl font-bold mb-5">Welcome to Know-Hows!</h1>
                        <p className="mb-5">Find your way to learn</p>
                        <div className="justify-center items-center">
                            <p>Want to get started? Go Here: </p>
                            <LoginButton />
                        </div>
                    </div>

                </div>
            </div>

            <section className="bg-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Our Features</h2>

                </div>

                <div className="flex gap-6 flex-wrap justify-center">
                    <LearningSkillsCard  />
                    <PostingSkillsCard  />
                    <MakingMoneyCard onImageLoad={() => setIsLoading4(false)} />
                </div>
                <div className="flex gap-6 flex-wrap justify-center mt-6">
                    {isLoading4 ? <LoadingCard /> : <LearningSkillsCard onImageLoad={() => setIsLoading4(false)} />}
                    {isLoading4 ? <LoadingCard /> : <PostingSkillsCard onImageLoad={() => setIsLoading4(false)} />}
                    {isLoading4 ? <LoadingCard /> : <MakingMoneyCard onImageLoad={() => setIsLoading4(false)} />}
                </div>

            </section>

            <section className="py-8 bg-deepBlue">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold mb-8 text-white">About Us</h3>
                    <p className="mb-8"></p>
                </div>
                <div className="flex-row justify-center items-center">
                    <div className="flex items-center gap-4 justify-center">
                        <Avatar src={lean} alt="avatar" variant="rounded" />
                        <div>
                            <Typography className="text-white" variant="h6">Lean Meegdes</Typography>
                            <Typography variant="small" color="white" className="font-normal">
                                Web Developer, kubernetes expert
                            </Typography>
                        </div>
                        <Avatar src={jimmy} alt="avatar" variant="rounded" />
                        <div>
                            <Typography className="text-white" variant="h6 ">Jimmy Schuurman</Typography>
                            <Typography variant="small" color="white" className="font-normal">
                                Gamer and sometimes codes
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-4 bg-gray-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <p>Copyright © 2023 </p>
                </div>
            </footer>
            <Scroll />
        </div>
    );
}

export default HomePage