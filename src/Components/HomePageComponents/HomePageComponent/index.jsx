import React, { useEffect, useState } from "react";

const HomePageComponent = () => {
  const [inparr, SetInparr] = useState([]);
  console.log(inparr, "arrays");

  const [inpdata, SetInpdata] = useState({
    name: "",
    course: "",
    number: "",
    amount: "",
    date: "",
  });

  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    SetInpdata({ ...inpdata, [e.target.name]: e.target.value });
    console.log(inpdata);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpdata"));
    if (data) {
      SetInparr(data);
    }
  }, []);

  let { name, course, number, amount, date } = inpdata;
  const handleclick = () => {
    SetInparr([...inparr, { name, course, number, amount, date }]);
    SetInpdata({
      name: "",
      course: "",
      number: "",
      amount: "",
      date: "",
    });
  };

  useEffect(() => {
    inparr?.length > 0 &&
      localStorage.setItem("inpdata", JSON.stringify(inparr));
  }, [inparr]);

  //redakte
  const handleclick2 = (i) => {
    let { name, course, number, amount, date } = inparr[i];
    SetInpdata({ name, course, number, amount, date });
    setBolin(true);
    setIndex(i);
  };

  const handleclickinfo = (i) => {
    let { name, course, number, amount, date } = inparr[i];
    SetInpdata({ name, course, number, amount, date });
    setIndex(i);
  };

  const updateinfo = () => {
    let data2 = [...inparr];
    data2.splice(index, 1, { name, course, number, amount, date });
    SetInparr(data2);
    setBolin(false);
    SetInpdata({ name: "", course: "", number: "", amount: "", date: "" });
  };

  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[60vw] h-[47vw] bg-slate-50 shadow-xl">
        <div className="flex justify-center py-4 bg-teal-900 ">
          <h2 className="text-3xl font-semibold text-white">
            Ödənişi daxil edin
          </h2>
        </div>
        <div className="py-10 flex  gap-20 justify-center">
          <form action="" className="flex gap-12">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Tələbə
              </label>
              <input
                type="text"
                name="name"
                value={inpdata.name}
                onChange={handlechange}
                placeholder="Tələbənin adı"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />

              <label htmlFor="" className="text-xl font-medium pl-2">
                Kursu seçin
              </label>
              <select
                name="course"
                value={inpdata.course}
                onChange={handlechange}
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              >
                <option value="java">Java</option>
                <option value="linux">Linux</option>
                <option value="lua">Lua</option>
              </select>

              <label htmlFor="" className="text-xl font-medium pl-2">
                Kursun ayı
              </label>
              <input
                type="number"
                name="number"
                value={inpdata.number}
                onChange={handlechange}
                placeholder="Ayı daxil edin"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Məbləğ
              </label>
              <input
                type="number"
                name="amount"
                value={inpdata.amount}
                onChange={handlechange}
                placeholder="Dərsin ödənişi"
                className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
              />

              <label htmlFor="" className="text-xl font-medium pl-2">
                Çekin tarixi
              </label>
              <input
                type="date"
                name="date"
                value={inpdata.date}
                onChange={handlechange}
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
        <h3 className="text-teal-800 text-lg font-semibold">Ödənişi axtar:</h3>
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
              <th className="border-2 w-60">Tələbə</th>
              <th className="border-2 w-60">Kurs</th>
              <th className="border-2 w-40">Kursun ayı</th>
              <th className="border-2 w-40">Məbləğ</th>
              <th className="border-2 w-60">Tarix</th>
              <th className="border-2 w-60">Məlumat</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inparr
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.amount.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((item, i) => {
                return (
                  <tr key={i} className="h-12">
                    <td className="border-2 font-semibold pl-2">{i + 1}</td>
                    <td className="border-2 pl-2">{item.name}</td>
                    <td className="border-2 pl-2">{item.course}</td>
                    <td className="border-2 pl-2">{item.number}</td>
                    <td className="border-2 pl-2">{item.amount}</td>
                    <td className="border-2 pl-2">{item.date}</td>
                    {/* <td className="border-2 pl-2">{item.file}</td> */}
                    <td className="border-2 pl-2">
                      <button
                        className="bg-teal-700 w-20 h-8  text-white rounded-sm ml-5"
                        onClick={() => handleclickinfo(i)}
                      >
                        Məlumat
                      </button>
                    </td>
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

export default HomePageComponent;
