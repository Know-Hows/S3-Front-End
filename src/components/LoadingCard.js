import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@material-tailwind/react";
  
  export function LoadingCard() {
    return (
      <Card className="max-w-[24rem] w-[24rem] overflow-hidden animate-pulse">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          <div className="w-full h-48 bg-gray-300" /> {/* Placeholder for image */}
        </CardHeader>
        <CardBody>
          <div className="h-8 bg-gray-300 rounded mb-4" /> {/* Placeholder for title */}
          <div className="h-4 bg-gray-200 rounded mb-2" /> {/* Placeholder for text line 1 */}
          <div className="h-4 bg-gray-200 rounded mb-2" /> {/* Placeholder for text line 2 */}
          <div className="h-4 bg-gray-200 rounded" />    {/* Placeholder for text line 3 */}
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/4" /> {/* Placeholder for footer text */}
        </CardFooter>
      </Card>
    );
  }
  