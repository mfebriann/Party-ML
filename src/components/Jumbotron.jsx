import { linkGroup } from "../utils";

export const Jumbotron = () => {
  return (
    <div className="mx-auto lg:container">
      <section className="bg-ml relative z-0 grid aspect-video h-72 w-full place-items-center bg-cover bg-top bg-no-repeat px-4 after:absolute after:inset-0 after:bg-black/55 sm:h-auto  lg:aspect-auto lg:h-[560px]">
        <div className="relative z-10 ">
          <h1 className="mb-10 text-center text-2xl font-bold leading-normal text-white sm:text-3xl lg:text-4xl">
            Grup Mobile Legends Party
          </h1>
          <a
            href={linkGroup}
            className="block rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 p-3 text-center font-medium  text-white lg:mt-0"
          >
            Gabung Sekarang
          </a>
        </div>
      </section>
    </div>
  );
};
