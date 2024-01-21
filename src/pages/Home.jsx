import {
  Header,
  About,
  Jumbotron,
  Rules,
  Channel,
  Admin,
  Event,
} from "../components";

const Home = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-16 bg-white pb-5 lg:mt-[74px]">
        <Jumbotron />
        <About />
        <Rules />
        <Channel />
        <Admin />
        <Event />
      </main>
    </>
  );
};

export default Home;
