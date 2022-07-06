import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
  return (
    <section className="my-6 p-8">
      <h2 className="text-xl font-semibold text-center mb-8">
        Cara Mencegah Covid-19
      </h2>
      <div className="carousel-wrapper">
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div className="w-[60%] md:w-[30%] h-max mx-auto">
            <img
              className="block mx-auto"
              src="/masker.jpg"
              alt="masker"
              width={100}
              height={200}
            />
          </div>
          <div className="w-[60%] md:w-[30%] h-max mx-auto">
            <img
              className="block mx-auto"
              src="/cuci-tangan.jpg"
              alt="cuci tangan"
              width={100}
              height={200}
            />
          </div>
          <div className="w-[60%] md:w-[30%] h-max mx-auto">
            <img
              className="block mx-auto"
              src="/jaga-jarak.jpg"
              alt="jaga jarak"
              width={100}
              height={200}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
