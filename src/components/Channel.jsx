export const Channel = () => {
  const groups = [
    {
      text: "BUKALAPAK ONLINE MOBILE LEGENDS",
      link: "https://t.me/bukalapak_ml",
    },
    {
      text: "Ngobrol Asik",
      link: "https://t.me/ngumpul_brg",
    },
    {
      text: "Konten Mobile Legends",
      link: "https://t.me/konten_ml",
    },
  ];

  const channels = [
    {
      text: "Cari Squad",
      link: "https://t.me/nemu_sq",
    },
    {
      text: "Update Terbaru Mobile Legends",
      link: "https://t.me/infoeventml",
    },
    {
      text: "Daftar Penipu Mobile Legends",
      link: "https://t.me/list_penipu",
    },
  ];

  return (
    <section className="scroll-mt-24 px-4" id="channel">
      <h1 className="pt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
        Channel & Grup
      </h1>
      <p className="mt-3 text-slate-700">
        Channel dan Grup yang terkait dengan Mobile Legends Party antara lain:
      </p>
      <ul className="mt-3 list-disc pl-10 text-slate-600">
        <li className="font-semibold text-slate-700">Grup</li>
        <ul className="mt-3 flex list-decimal flex-col gap-y-2 pl-4 text-slate-600">
          {groups.map((group, index) => {
            return (
              <li key={index}>
                <a href={group.link} className="text-blue-600 underline">
                  {group.text}
                </a>
              </li>
            );
          })}
        </ul>

        <li className="mt-4 font-semibold text-slate-700">Channel</li>
        <ul className="mt-3 flex list-decimal flex-col gap-y-2 pl-4 text-slate-600">
          {channels.map((channel, index) => {
            return (
              <li key={index}>
                <a href={channel.link} className="text-blue-600 underline">
                  {channel.text}
                </a>
              </li>
            );
          })}
        </ul>
      </ul>
    </section>
  );
};
