import React from "react";
import { useMediaQuery } from "@mantine/hooks";
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
import { ClientOnly } from "remix-utils/client-only";

interface EventProps {
  title: string;
  date: string;
  description: string;
  imageD: string;
  imageM?: string;
  location?: string;
  theme?: string;
  winners?: string[];
}

const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  imageD,
  imageM,
  location,
  theme,
  winners,
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
                  <h3 className="title text-3xl 2xl:text-4xl text-cgd-pink/85 text-left">
                    {title}
                  </h3>
                  <h4 className="description text-xl text-dark-purple/90 font-corbert font-bold">
                    {description}
                  </h4>
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
    <ClientOnly fallback={null}>
      {() => (
        <Drawer>
          <DrawerTrigger className="flex md:flex-row flex-col bg-wh border border-wh/80 rounded-xl md:p-7 p-5 h-fit gap-5 w-full items-center text-left">
            <img
              src={imageM}
              alt={title}
              className="object-contain aspect-{3/2} md:hidden rounded-md"
            />
            {/* Drawer for mobile View */}
            <div className="flex flex-col gap-5">
              <div>
                <h2 className="title sm:text-2xl text-xl text-cgd-pink/85 text-left">
                  {title}
                </h2>
                <h4 className="description sm:text-base text-sm text-dark-purple/90 font-corbert font-bold">
                  {description}
                </h4>
              </div>
              <p className="date sm:text-sm text-xs text-dark-purple/80 font-corbert font-bold">
                {date}
              </p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <h3 className="text-cgd-pink">{title}</h3>
              </DrawerTitle>
              <DrawerDescription>
                <div className="w-full">
                  <h3 className="text-dark-purple text-sm sm:text-base flex items-center">
                    Location: <h4 className="font-bold">{location}</h4>
                  </h3>
                </div>
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </ClientOnly>
  );
};

export default EventCard;
