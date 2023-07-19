import React, { useEffect, useState } from "react";

const Students = () => {
  const [inputarr, SetInputarr] = useState([]);
  console.log(inputarr, "arrays");

  const [inpval, SetInpval] = useState({
    email: "",
    name: "",
    number: "",
    surname: "",
  });

  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    SetInpval({ ...inpval, [e.target.name]: e.target.value });
    console.log(inpval);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpval"));
    if (data) {
      SetInputarr(data);
    }
  }, []);

  let { email, name, number, surname } = inpval;
  const handleclick = () => {
    SetInputarr([...inputarr, { email, name, number, surname }]);
    SetInpval({ email: "", name: "", number: "", surname: "" });
  };

  useEffect(() => {
    inputarr?.length > 0 &&
      localStorage.setItem("inpval", JSON.stringify(inputarr));
  }, [inputarr]);

  //redakte
  const handleclick2 = (i) => {
    let { email, name, number, surname } = inputarr[i];
    SetInpval({ email, name, number, surname });
    setBolin(true);
    setIndex(i);
  };

  const updateinfo = () => {
    let data2 = [...inputarr];
    data2.splice(index, 1, { email, name, number, surname });
    SetInputarr(data2);
    setBolin(false);
    SetInpval({ email: "", name: "", number: "", surname: "" });
  };

  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[60vw] h-[35vw] bg-slate-50 shadow-xl ">
        <div className="flex justify-center py-4 bg-teal-900 ">
          <h2 className="text-3xl font-semibold text-white">
            Tələbəni daxil edin
          </h2>
        </div>
        <div className="py-10 flex   justify-center">
          <form action="" className="flex gap-12">
            <div className="flex flex-col gap-6">
              <label
                htmlFor=""
                className="text-xl font-medium pl-2 text-teal-800 "
              >
                Ad
              </label>
              <input
                type="text"
                name="name"
                value={inpval.name}
                onChange={handlechange}
                placeholder="Tələbənin adı"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />

              <label
                htmlFor=""
                className="text-xl font-medium pl-2 text-teal-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inpval.email}
                onChange={handlechange}
                placeholder="Emaili daxil edin"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label
                htmlFor=""
                className="text-xl font-medium pl-2 text-teal-800"
              >
                Soyad
              </label>
              <input
                type="text"
                name="surname"
                value={inpval.surname}
                onChange={handlechange}
                placeholder="Tələbənin soyadı"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />

              <label
                htmlFor=""
                className="text-xl font-medium pl-2 text-teal-800"
              >
                Nömrə
              </label>
              <input
                type="tel"
                name="number"
                value={inpval.number}
                onChange={handlechange}
                placeholder="Nömrəni daxil edin"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button
            style={{
              backgroundImage: `linear-gradient(to left, rgba(39, 150, 77, 1), rgba(38, 36, 93, 1) )`,
            }}
            onClick={!bolin ? handleclick : updateinfo}
            className="w-28 h-10  text-white rounded-sm text-lg"
          >
            {!bolin ? `Add` : `Update data`}
          </button>
        </div>
      </div>

      <div className="flex gap-8 ml-[28vw]">
        <h3 className="text-teal-800 text-lg font-semibold">Nömrəni axtar:</h3>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="outline-none border-2 w-60 h-8 pl-3 border-teal-900"
        />
      </div>

      <div>
        <table className="border-collapse w-[72vw] ">
          <thead className="bg-teal-900 text-white h-12">
            <tr className="text-base">
              <th className="border-2 w-20">Id</th>
              <th className="border-2 w-60">Ad</th>
              <th className="border-2 w-60">Soyad</th>
              <th className="border-2 w-64">Email</th>
              <th className="border-2 w-60">Nömrə</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inputarr
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.number.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => {
                return (
                  <tr key={i} className="h-12">
                    <td className="border-2 font-semibold pl-2">{i + 1}</td>
                    <td className="border-2 pl-2">{item.name}</td>
                    <td className="border-2 pl-2">{item.surname}</td>
                    <td className="border-2 pl-2">{item.email}</td>
                    <td className="border-2 pl-2">{item.number}</td>
                    <td className="border-2 pl-2">
                      <button
                        className="bg-teal-700 w-20 h-8  text-white rounded-sm ml-5"
                        onClick={() => handleclick2(i)}
                      >
                        Redakte
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
