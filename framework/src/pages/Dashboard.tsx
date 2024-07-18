import { useForm, Controller } from "react-hook-form";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";

// Array of image file names
const images_ai = ["image.png", "image2.png"].map((image) => ({
  type: "ai",
  image,
}));
const images_real = ["image3.png", "image_skate.png"].map((image) => ({
  type: "real",
  image,
}));

// Combine and shuffle images with Fisher-Yates algorithm
const images = [...images_ai, ...images_real];
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

export function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          AI
        </label>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Card>
        <Carousel
          setApi={setApi}
          className="relative"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map(({ type, image }, index) => (
              <CarouselItem
                key={index}
                className="flex flex-col items-center justify-center relative"
              >
                <CheckboxWithText />
                <img
                  src={`${import.meta.env.BASE_URL}img/${type}/${image}`}
                  alt={`Description of image ${index + 1}`}
                  className="mx-auto my-auto"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 transform -translate-y-1/2 left-4" />
          <CarouselNext className="absolute top-1/2 transform -translate-y-1/2 right-4" />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </Card>
    </>
  );
}
