import { Link, useParams } from "react-router-dom";
import { events } from "../utils";
import { Fragment, useEffect, useState } from "react";
import Input from "../components/Input";
import { Footer } from "../components";

const ContentEvent = () => {
  const { slug } = useParams();
  const [contentEvent, setContentEvent] = useState({});
  const [username, setUsername] = useState("");
  const [isSendLoading, setIsSendLoading] = useState(false);

  useEffect(() => {
    const content = events.find((event) => event.slug == slug);
    setContentEvent(content);
  }, [slug]);

  const buttonActive =
    "bg-gradient-to-r from-sky-400 to-blue-500 text-white hover:opacity-90 ease-in duration-200 transition";
  const buttonDisable = "pointer-events-none bg-slate-300 text-white/80";

  const sendData = (e) => {
    e.preventDefault();

    if (!contentEvent.isExpired) {
      setIsSendLoading(true);
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzGOekOpclC3pFPLhLT-ttj8gmc10rngCB7kwXtR6fcr1Fljas_rOCqA4t4VxFIi27L7A/exec";

      fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result["result"] === "success") {
            alert("Berhasil, username telegram kamu berhasil disimpan");
            setUsername("");
          } else if (
            result["result"] === "error" &&
            result["error"] === "Username already exists"
          ) {
            alert("Gagal, maaf username telegram kamu sudah terdaftar");
          }

          setIsSendLoading(false);
        })
        .catch((error) => {
          alert(`Gagal, username telegram kamu gagal disimpan: ${error}`);
          setUsername("");
          setIsSendLoading(false);
        });
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <main className="container mx-auto bg-white p-5">
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
        {contentEvent.thumbnail && (
          <img
            src={contentEvent.thumbnail}
            alt={contentEvent.title}
            className="mt-2"
          />
        )}
        <article className="pb-5">
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
          {contentEvent.isForm && (
            <form className="mt-5" onSubmit={sendData}>
              <Input htmlFor={"event"} isHidden value={contentEvent.title} />
              <Input
                label={"Masukkan username telegram kamu"}
                isUsername
                htmlFor={"username"}
                value={username}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className={`mb-8 mt-8 flex w-full items-center justify-center rounded-xl p-3 text-center font-medium ${contentEvent.isExpired ? buttonDisable : buttonActive}`}
              >
                {isSendLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                    className="animate-spin"
                  >
                    <path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path>
                  </svg>
                ) : (
                  "Daftar Sekarang"
                )}
              </button>
            </form>
          )}
          <Link
            to={"/"}
            className="mx-auto block w-max text-blue-600 underline"
          >
            Kembali
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ContentEvent;
