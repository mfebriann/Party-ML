export const Rules = () => {
  const rules = [
    "Dilarang jualan",
    "Dilarang toxic berlebihan",
    "Dilarang membagikan video/foto porno/18+",
    "Dilarang SARA dan RASIS",
    "Dilarang mengirim link trading, link pornografi, link penipuan atau link scam yang merugikan",
    "Dilarang menyebarkan cheat / menggunakan cheat",
  ];

  return (
    <section className="scroll-mt-24 px-4" id="rules">
      <h1 className="pt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
        Peraturan Grup
      </h1>
      <ul className="mt-3 flex list-decimal flex-col gap-y-2 pl-7 text-slate-600">
        {rules.map((rule, index) => {
          return <li key={index}>{rule}</li>;
        })}
      </ul>
      <p className="mt-5 font-bold text-slate-600">
        JIKA MELANGGAR ATAU TIDAK MENAATI PERATURAN AKAN DI MUTE / BAN. Terima
        kasih
      </p>
    </section>
  );
};
