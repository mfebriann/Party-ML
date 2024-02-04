import {
  Header,
  About,
  Jumbotron,
  Rules,
  Channel,
  Admin,
  Event,
  Footer,
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
      <Footer />
    </>
  );
};

export default Home;
