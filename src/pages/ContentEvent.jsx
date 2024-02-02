import { Link, useParams } from "react-router-dom";
import { events } from "../utils";
import { Fragment, useEffect, useState } from "react";

const ContentEvent = () => {
  const { id } = useParams();
  const [contentEvent, setContentEvent] = useState({});

  useEffect(() => {
    const content = events.find((event) => event.id == id);
    setContentEvent(content);
  }, [id]);

  const buttonActive =
    "bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:opacity-90 ease-in duration-200 transition";
  const buttonDisable = "pointer-events-none bg-slate-300 text-white/80";

  return (
    <main className="container mx-auto bg-white p-5">
      <article className="pb-5">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {contentEvent.title}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {contentEvent.startdate} - {contentEvent.enddate}
          {contentEvent.isExpired && (
            <span className="ml-2 font-semibold text-red-600">
              [Event Berakhir]
            </span>
          )}
        </p>
        <p className="mt-4 text-slate-700">
          {Object.keys(contentEvent).length > 0 &&
            contentEvent.description.split("\n").map((paragraph, index) => (
              <Fragment key={index}>
                {paragraph.includes("[") && paragraph.includes("]") ? (
                  paragraph.split(/\[(.*?)]/).map((text, i) => (
                    <Fragment key={i}>
                      {i % 2 === 0 ? (
                        text
                      ) : (
                        <a
                          href={text}
                          target="_blank"
                          className="text-blue-500 underline"
                          rel="noreferrer"
                        >
                          {text.split("]")[0]}
                        </a>
                      )}
                    </Fragment>
                  ))
                ) : (
                  // Jika tidak ada tautan, render sebagai teks biasa
                  <span>{paragraph}</span>
                )}
                <br />
              </Fragment>
            ))}
        </p>
        <a
          href={contentEvent.isExpired ? "#" : contentEvent.link}
          className={`mb-12 mt-8 block rounded-xl p-3 text-center font-medium ${contentEvent.isExpired ? buttonDisable : buttonActive}`}
        >
          Daftar Sekarang
        </a>
        <Link to={"/"} className="mx-auto block w-max text-blue-600 underline">
          Kembali
        </Link>
      </article>
    </main>
  );
};

export default ContentEvent;
