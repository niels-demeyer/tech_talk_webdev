import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  const images = ["pizza.jpg"]; // replace with your actual image names

  return (
    <Carousel>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt="carousel item"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default App;
