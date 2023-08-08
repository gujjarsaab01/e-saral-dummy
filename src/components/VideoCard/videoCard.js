import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

const VideoCard = () => {
  return (
    <div className="flex  p-5 ">
    <div className="flex flex-col  place-items-start">
      <div className="flex-row flex place-items-center">
        <FontAwesomeIcon icon={faCircle}size="2x" />
        <div className="flex flex-col ml-3">
        <h4 className="drop-shadow-xl">Unit & Dimensions</h4>
        <h6 className="text-sm">Lecture 20</h6>

        </div>
      </div>

     <div className="flex drop-shadow-xl ">
     <Card className="w-48  bg-gray-200 border-none ">
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody className="border-none">
          <CardTitle tag="h6">Introduction</CardTitle>
        </CardBody>
      </Card>
      <Card className="w-48 ml-6 bg-gray-200 border-none ">
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody className="border-none">
          <CardTitle tag="h6">Introduction</CardTitle>
        </CardBody>
      </Card>
      <Card className="w-48 ml-6 bg-gray-200 border-none ">
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody className="border-none">
          <CardTitle tag="h6">Introduction</CardTitle>
        </CardBody>
      </Card>
      <Card className="w-48 ml-6 bg-gray-200 border-none ">
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody className="border-none">
          <CardTitle tag="h6">Introduction</CardTitle>
        </CardBody>
      </Card>
     </div>
    </div>
   
  </div>
  )
}

export default VideoCard