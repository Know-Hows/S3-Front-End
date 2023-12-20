import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import makingMoneyImage from "../Images/krakenimages-376KN_ISplE-unsplash.jpg"; // Replace with your image URL
export function MakingMoneyCard({onImageLoad}) {

  return (
    <Card className="max-w-[24rem] overflow-hidden shadow-xl">
      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="m-0 rounded-none">
        <img src={makingMoneyImage} alt="Making Money" onLoad={onImageLoad} />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Earn While You Learn
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          Discover ways to monetize your skills and knowledge. Transform your passion into profit.
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <Typography className="font-normal">See Opportunities</Typography>
      </CardFooter>
    </Card>
  );
}
