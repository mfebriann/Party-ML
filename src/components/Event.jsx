import { Link } from "react-router-dom";
import { events } from "../utils";

export const Event = () => {
  return (
    <section className="scroll-mt-24 px-4" id="event">
      <h1 className="pt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
        Event Grup
      </h1>
      <p className="mt-3 text-slate-700">
        Beberapa event yang akan diadakan oleh grup kami
      </p>

      <div className="mt-4 flex flex-wrap gap-6">
        {events.map((event) => {
          return (
            <div
              className="max-w-96 rounded-md border border-blue-500 px-4 pb-6 pt-4"
              key={event.id}
            >
              <h3 className="text-lg font-medium text-slate-900">
                {event.title}
              </h3>
              <p className="mb-6 mt-2 line-clamp-2 text-slate-600">
                {event.description}
              </p>
              <Link
                to={`/event/${event.slug}`}
                className="rounded-md bg-blue-500 px-4 py-2 text-white duration-150 hover:opacity-80"
              >
                Selengkapnya
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
