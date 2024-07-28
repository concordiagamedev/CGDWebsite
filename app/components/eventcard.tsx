import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface EventProps {
  title: string;
  date: string;
  description: string;
  imageD: string;
  imageM?: string;
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  imageD,
  imageM,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    // Desktop View
    return (
      <div className="flex md:flex-row flex-col bg-wh border border-wh/80 rounded-xl md:p-10 p-7 h-fit gap-10 w-full items-center">
        <img
          src={imageD}
          alt={title}
          className="object-contain aspect-{3/2} hidden md:block md:w-44 w-64 rounded-md"
        />
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full"
          orientation="horizontal"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-left ">
              <div className="flex flex-col gap-7">
                <div>
                  <h1 className="title md:text-3xl xl:text-4xl 3xl:text-5xl text-xl text-cgd-pink/85 text-left">
                    {title}
                  </h1>
                  <h3 className="description md:text-xl text-md text-dark-purple/90 font-corbert font-bold">
                    {description}
                  </h3>
                </div>
                <p className="date md:text-lg text-sm text-dark-purple/80 font-corbert font-bold">
                  {date}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent></AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger className="flex md:flex-row flex-col bg-wh border border-wh/80 rounded-xl md:p-10 p-7 h-fit gap-10 w-full items-center text-left">
        <img
          src={imageM}
          alt={title}
          className="object-contain aspect-{3/2} md:hidden rounded-md"
        />
        {/* Drawer for mobile View */}
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="title md:text-3xl xl:text-4xl 3xl:text-5xl text-xl text-cgd-pink/85 text-left">
              {title}
            </h1>
            <h3 className="description md:text-xl text-md text-dark-purple/90 font-corbert font-bold">
              {description}
            </h3>
          </div>
          <p className="date md:text-lg text-sm text-dark-purple/80 font-corbert font-bold">
            {date}
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default EventCard;
