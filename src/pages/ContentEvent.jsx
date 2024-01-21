import { Link, useParams } from "react-router-dom";
import { events, linkGroup } from "../utils";
import { useEffect, useState } from "react";

const ContentEvent = () => {
  const { id } = useParams();
  const [contentEvent, setContentEvent] = useState({});

  useEffect(() => {
    const content = events.find((event) => event.id == id);
    setContentEvent(content);
  }, [id]);

  return (
    <main className="container mx-auto h-screen bg-white p-5">
      <article>
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {contentEvent.title}
        </h1>
        <p className="mt-3 text-slate-700">{contentEvent.description}</p>
        <a
          href={linkGroup}
          className="mb-12 mt-8 block rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 p-3 text-center font-medium  text-white"
        >
          Gabung Sekarang
        </a>
        <Link to={"/"} className="mx-auto block w-max text-blue-600 underline">
          Kembali
        </Link>
      </article>
    </main>
  );
};

export default ContentEvent;
