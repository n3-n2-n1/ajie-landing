import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Input,
} from "@material-tailwind/react";

const HeadBlock: React.FC = () => {
  return (
    <div className="grid w-full lg:h-[32rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat pt-24">
      <div className="container mx-auto px-4 text-center">
        <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
          Exciting News! Introducing our latest innovation
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
        >
          Get ready to experience a new level of{" "}
          <span className="text-green-500 leading-snug ">performance</span> and{" "}
          <span className="leading-snug text-green-500">functionality</span>.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
        >
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </Typography>
        <div className="mt-4 grid w-full place-items-start md:justify-center">
          <div className="mb-0 flex w-full flex-col gap-4 md:flex-row">
            <Input color="gray" label="Enter your email" size="lg" />
            <Button color="gray" className="w-full px-4 md:w-[12rem]">
              get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBlock;
