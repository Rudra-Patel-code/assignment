import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, Star } from "lucide-react";
import Link from "next/link";
import CategoryCard from "@/components/custom/CategoryCard";
import { Button } from "@/components/ui/button";
import PopularServices from "@/components/custom/PopularServices";
import MoreServiceCard from "@/components/custom/MoreServiceCard";
import { Label } from "@/components/ui/label";
import { title } from "process";

export default function Home() {
  const popularServicesData = [
    {
      description: "Code catalysts, Your Tech Partner",
      image: "/assets/startup.jpeg",
      price: 1000,
      rating: 3,
      title: "Startup",
      to: "/",
    },
    {
      description: "Code Artisons, Your online Architects",
      image: "/assets/webdevelopment.jpg",
      price: 2500,
      rating: 2,
      title: "Website Developer's",
      to: "/",
    },
    {
      description: "Online emporium, Unleashing Retail wonders.",
      image: "/assets/ECommerce_Illustration_.webp",
      price: 2500,
      rating: 1,
      title: "E-commerce",
      to: "/",
    },
    {
      description: "Business Allies, Connecting Markets.",
      image: "/assets/OIP.jpeg",
      price: 2500,
      rating: 1,
      title: "Wholesale",
      to: "/",
    },
  ];

  const faqs = [
    {
      question: "What services does your company provide?",
      answer:
        "Our company specializes in a range of software solutions including e-commerce development, web development, mobile application development, custom software development, and more.",
    },
    {
      question: "Do you offer e-commerce solutions?",
      answer:
        "Yes, we provide end-to-end e-commerce solutions tailored to meet your specific business needs. Our services include custom e-commerce website development, integration with payment gateways, inventory management systems, and more.",
    },
    {
      question: "Can you help us with web development projects?",
      answer:
        "Absolutely! We have a team of experienced web developers proficient in various technologies such as HTML, CSS, JavaScript, React, Angular, Node.js, and more. Whether you need a simple informational website or a complex web application, we've got you covered.",
    },
    {
      question: "What platforms do you develop websites on?",
      answer:
        "We are platform-agnostic and can develop websites on a variety of platforms including WordPress, Shopify, Magento, WooCommerce, and custom-built solutions depending on your requirements and preferences.",
    },
    {
      question: "Do you provide mobile application development services?",
      answer:
        "Yes, we offer mobile application development services for both iOS and Android platforms. Our team utilizes the latest technologies and frameworks to create robust and user-friendly mobile applications tailored to your business goals.",
    },
    {
      question:
        "Can you integrate third-party services into our software solutions?",
      answer:
        "Absolutely! We have expertise in integrating third-party services such as payment gateways, shipping providers, CRM systems, analytics tools, and more to enhance the functionality and efficiency of your software solutions.",
    },
  ];

  const footerLinks = [
    "About us",
    "Contact",
    "FAQs",
    "Directions",
    "Privacy Policy",
    "Cookie Policy",
    "Terms And Conditions",
    "List My business",
  ];

  return (
    <>
      <main className="max-w-screen-lg mx-auto p-5">
        {/* carousel */}
        <div className="">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="w-full rounded-xl  p-5 flex flex-col items-center gap-4 bg-[url('/assets/bg.png')] bg-no-repeat bg-cover bg-center">
                  <h2 className="text-white font-bold text-3xl  text-center">
                    One Platform For All Needs Search-Find-Contact
                  </h2>
                  <p className="text-center text-xl">
                    All Local Services At Tip of Your Finger With a Single
                    Search
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full rounded-xl  p-5 flex flex-col items-center gap-4 bg-[url('/assets/bg.png')] bg-no-repeat bg-cover bg-center">
                  <h2 className="text-white font-bold text-3xl  text-center">
                    One Platform For All Needs Search-Find-Contact
                  </h2>
                  <p className="text-center text-xl">
                    All Local Services At Tip of Your Finger With a Single
                    Search
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="w-full rounded-xl  p-5 flex flex-col items-center gap-4 bg-[url('/assets/bg.png')] bg-no-repeat bg-cover bg-center">
                  <h2 className="text-white font-bold text-3xl  text-center">
                    One Platform For All Needs Search-Find-Contact
                  </h2>
                  <p className="text-center text-xl">
                    All Local Services At Tip of Your Finger With a Single
                    Search
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* searching */}
        <div className="my-8 flex max-sm:flex-col gap-3">
          <div className="">
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Your City" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Cities</SelectLabel>
                  <SelectItem value="apple">Delhi</SelectItem>
                  <SelectItem value="banana">Ahmedabad</SelectItem>
                  <SelectItem value="blueberry">Mumbai</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="rounded-md border-2 p-0 border-orange-300 flex items-center">
            <Input
              className="border-none"
              placeholder="What are you looking for? Search services.."
            />
            <span className="bg-yellow-400 h-full flex items-center p-2">
              <Search className="size-5 text-white" />
            </span>
          </div>
        </div>

        {/* categories */}

        <section className="flex flex-col w-full items-center">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-xl">Categories</h2>

            <Link href={"/"} className="flex items-center gap-2">
              Explore More{" "}
              <span className="p-2 bg-orange-500 rounded-full">
                <ArrowRight className="size-5 text-white" />
              </span>
            </Link>
          </div>

          <div className="my-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
            <CategoryCard
              count={109}
              image1="/assets/buffer1.jpg"
              image2="/assets/buffer1.jpg"
              title="Fashion"
              to="/fashion"
            />
          </div>

          <Button className="bg-orange-500 text-white hover:bg-orange-700">
            Explore Now
          </Button>
        </section>

        {/* services */}
        <section className=" my-9 bg-yellow-500 w-full p-3 rounded-lg">
          <div className="w-full flex justify-between items-center">
            <h2 className=" text-lg md:text-xl">Most Popular Services</h2>

            <Link href={"/"} className="flex items-center gap-2">
              See All
              <span className="p-2 bg-orange-500 rounded-full">
                <ArrowRight className="size-5 text-white" />
              </span>
            </Link>
          </div>

          <div className="w-full my-8">
            <Carousel>
              <CarouselContent className="">
                {popularServicesData.map((service) => (
                  <CarouselItem
                    key={service.title}
                    className=" basis-1/2 sm:basis-1/3 md:basis-1/4 w-fit"
                  >
                    <PopularServices
                      description={service.description}
                      image={service.image}
                      price={service.price}
                      rating={service.rating}
                      title={service.title}
                      to={service.to}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Reviews */}

        <section className="flex flex-col">
          <h1 className="font-medium text-lg md:text-xl">
            The Reviews speak for themselves
          </h1>

          <div className="my-4">
            <Carousel>
              <CarouselContent className="">
                <CarouselItem>
                  <div className="bg-yellow-500 rounded-lg flex flex-col items-center justify-center p-3">
                    <div className="flex gap-1 my-3">
                      {Array.from({ length: 4 }).map((i: any) => (
                        <Star key={i} className="fill-white text-white" />
                      ))}
                    </div>
                    <Image
                      src={"/assets/profile.jpg"}
                      alt="profile"
                      width={100}
                      height={100}
                      className="aspect-square rounded-full my-4"
                    />

                    <p className="text-center ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem ut consequatur deserunt saepe amet corporis
                      aspernatur alias similique reiciendis eligendi.
                    </p>

                    <h3 className="mt-8"> - XYZ Limited </h3>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* more services */}

        <section className="my-8">
          <h1 className="font-medium text-lg md:text-xl">
            Startup or wholesaler, we have got you covered..
          </h1>

          <div className="flex flex-col gap-7 my-6">
            {popularServicesData.map((service) => (
              <MoreServiceCard
                key={service.title}
                description={service.description}
                image={service.image}
                title={service.title}
                to={service.to}
              />
            ))}
          </div>
        </section>

        {/* listing */}

        <section className="relative bg-yellow-500 max-h-[320px] p-2 mt-8 mb-16">
          <div className="bg-white border-2 border-orange-500 my-6 max-w-[600px] mx-auto flex flex-col items-center p-4">
            <h2 className="font-bold text-xl md:text-2xl text-center">
              List Your Business on Wildbazzar
            </h2>

            <h5 className=" text-lg md:text-xl mt-3 text-center">
              Starting offer from Rs 499
            </h5>

            <form className="mt-8 flex flex-col gap-4">
              <div>
                <Label htmlFor="email" className="text-muted-foreground">
                  Email*
                </Label>
                <Input id="email" className="border-black/10" />
              </div>
              <div>
                <Label htmlFor="email" className="text-muted-foreground">
                  Phone Number*
                </Label>
                <Input id="email" className="border-black/10" />
              </div>

              <Button className="bg-orange-500 hover:bg-orange-700">
                GET STARTED
              </Button>
            </form>
          </div>
        </section>

        <section className="my-8 w-full flex flex-col items-center">
          <h1 className="font-medium text-lg md:text-xl self-start ">
            Frequently Asked Questions
          </h1>

          <div className="my-6 w-full">
            <Accordion type="multiple">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <Button className="text-sm bg-orange-500 hover:bg-orange-700 mx-auto">
            Still have a doubt? Contact us
          </Button>
        </section>

        {/* footer */}
      </main>
      <section className="bg-orange-500 flex flex-col p-4 gap-3 ms:p-5">
        {footerLinks.map((link, i) => (
          <p key={link}>{link}</p>
        ))}
      </section>
    </>
  );
}
