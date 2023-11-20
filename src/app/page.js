import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import HomeMenu from '@/components/layout/HomeMenu';
import SectionHeaders from '@/components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader="our story" mainHeader="About us" />
        <div className="flex flex-col gap-4 max-w-md mx-auto text-gray-500 mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, cet dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:91 4534562222"
          >
            +91 4534562222
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-8">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
