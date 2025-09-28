import React, {useState} from "react";
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
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


interface EventProps {
  title: string;
  date: string;
  description: string;
  imageD: string;
  imageM?: string;
  location?: string;
  eventpictures?: string[];
}
const EventCard: React.FC<EventProps> = ({
  title,
  date,
  description,
  imageD,
  imageM,
  location,
  eventpictures,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  if (isDesktop) {
    // Desktop View
    return (
      <div className="flex flex-col bg-wh border border-wh/80 rounded-xl md:p-10 p-7 w-full relative">
        <div className="flex md:gap-10">
          <img
            src={imageD}
            alt={title}
            className="object-contain aspect-{3/2} hidden md:block w-36 rounded-md h-fit"
          />
          <div className="flex flex-col justify-center gap-4">
            <div>
              <h2 className="title text-3xl 2xl:text-4xl text-cgd-pink/85 text-left">
                {title}
              </h2>
              <h4 className="description text-xl text-dark-purple/90 font-corbert font-bold">
                {description}
              </h4>
            </div>
            <p className="date md:text-lg text-sm text-dark-purple/80 font-corbert font-bold">
              {date}
            </p>
          </div>
        </div>
        {/* DROP DOWN PART */}
        <Accordion
          type="single"
          collapsible
          className="flex flex-col w-full"
          orientation="horizontal"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className=" text-left absolute right-10 bottom-5">
              <div className="flex flex-col gap-7"></div>
            </AccordionTrigger>
            <AccordionContent className="mt-5">
              <h3 className="text-dark-purple text-lg font-bold">
                Location: <span className="font-corbert">{location}</span>
              </h3>
              {eventpictures && eventpictures.length > 0 && (
                <>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                  {eventpictures.map((pic, index) => (
                    <img
                      key={index}
                      src={pic}
                      alt={`Event picture ${index + 1}`}
                      onClick={() => { setPhotoIndex(index); setIsOpen(true); }}
                      className="cursor-pointer rounded-lg object-cover w-full h-32 md:h-40" />
                      ))} </div>
                      {isOpen && (
                        <Lightbox
                          open={isOpen}
                          close={() => setIsOpen(false)}
                          slides={eventpictures.map((pic) => ({ src: pic }))}
                          index={photoIndex}
                        />
                      )}
                      </>
              )}
              
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  return (
    <ClientOnly fallback={null}>
      {() => (
        <Drawer>
          <DrawerTrigger className="flex md:flex-row flex-col bg-wh-full/90 border border-wh/80 rounded-xl md:p-7 p-5 h-fit gap-5 w-full items-center text-left drop-shadow-md">
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
            <DrawerHeader className="py-10 px-5">
              <DrawerTitle>
                <h3 className="text-cgd-pink text-2xl">{title}</h3>
              </DrawerTitle>
              <DrawerDescription>
                <div className="w-full">
                  <h3 className="inline-flex gap-2 items-center text-dark-purple text-sm sm:text-base">
                    <h3 className="align-middle">Location:</h3>
                    <h4 className="font-bold align-middle">{location}</h4>
                  </h3>
                </div>
                {eventpictures && eventpictures.length > 0 && (
                  <>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {eventpictures.map((pic, index) => (
                      <img
                        key={index}
                        src={pic}
                        alt={`Event picture ${index + 1}`}
                        className="rounded-md object-cover w-full h-28 sm:h-36" 
                        onClick={() => { setPhotoIndex(index); setIsOpen(true); }}/>))} </div>
                        {isOpen && (
                        <Lightbox
                          open={isOpen}
                          close={() => setIsOpen(false)}
                          slides={eventpictures.map((pic) => ({ src: pic }))}
                          index={photoIndex}
                        />
                      )}</>
)}
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
