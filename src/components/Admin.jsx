import { Alpin, Coco, Re, Rian } from "../assets";

export const Admin = () => {
  const admins = [
    {
      name: "Rian",
      username: "riann18",
      image: Rian,
    },
    {
      name: "Coco.✞",
      username: "Cocolatin",
      image: Coco,
    },
    {
      name: "re",
      username: "-",
      channel: "chkara_ni",
      image: Re,
    },
    {
      name: "Anxiety.",
      username: "Angsiie",
      channel: "AnxyDownn",
      image: Alpin,
    },
  ];

  return (
    <section className="scroll-mt-24 px-4" id="admin">
      <h1 className="pt-8 text-2xl font-bold text-slate-800 lg:text-3xl">
        Admin Grup
      </h1>
      <p className="mt-3 text-slate-700">
        Jika kalian ingin melaporkan ke admin, kalian bisa menghubungi admin
        kami
      </p>
      <div className="mt-8 flex flex-wrap gap-8">
        {admins.map((admin, index) => {
          return (
            <a
              href={`https://t.me/${admin.username === "-" ? admin.channel : admin.username}`}
              className="flex w-max flex-col items-center text-center"
              key={index}
            >
              {admin.image !== "-" ? (
                <img
                  src={admin.image}
                  alt="photo-profile"
                  className="h-28 w-28 rounded-full"
                  width={112}
                  height={112}
                />
              ) : (
                <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-l from-orange-500 to-yellow-300">
                  <p className="text-3xl font-bold text-white">
                    {admin.name[0]}
                  </p>
                </div>
              )}
              <p className="mt-3 font-semibold text-slate-900">{admin.name}</p>
              <p className="text-sm text-blue-400">@{admin.username}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
