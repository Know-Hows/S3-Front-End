import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,

} from "@material-tailwind/react";
import cardImage from "../Images/tim-mossholder-WE_Kv_ZB1l0-unsplash.jpg";
export function LearningSkillsCard({ onImageLoad }) {
   return (
    <Card className="max-w-[24rem] overflow-hidden shadow-xl">
      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="m-0 rounded-none">
        <img src={cardImage} alt="Learning Skills" onLoad={onImageLoad} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Master New Skills
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Dive into a world of learning with our interactive and engaging courses. Grow your skills and advance your career.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">Explore Courses</Typography>
      </CardFooter>
    </Card>
  );
}
