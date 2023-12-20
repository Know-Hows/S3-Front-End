import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import postingSkillsImage from "../Images/content-pixie-NvZvtjn6Wrg-unsplash.jpg"; // Replace with your image URL
  export function PostingSkillsCard({ onImageLoad }) {
    console.log("onImageLoad prop:", onImageLoad);

    return (
      <Card className="max-w-[24rem] overflow-hidden shadow-xl">
        <CardHeader
          floated={false}
          shadow={true}
          color="transparent"
          className="m-0 rounded-none">
          <img src={postingSkillsImage} onLoad={onImageLoad} alt="Posting Skills" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            Share Your Expertise
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Engage with a community eager to learn. Share your skills and knowledge through compelling posts.
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <Typography className="font-normal">Start Posting</Typography>
        </CardFooter>
      </Card>
    );
  }


