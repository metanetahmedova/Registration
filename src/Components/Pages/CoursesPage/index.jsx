import React, { useEffect, useState } from "react";

const CoursesPage = () => {
  const [inparray, SetInparray] = useState([]);
  console.log(inparray, "arrays");

  const [inpvalue, SetInpvalue] = useState({
    name: "",
    course: "",
  });

  const [detail, setDetail] = useState();
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    SetInpvalue({ ...inpvalue, [e.target.name]: e.target.value });
    console.log(inpvalue);
  };

  let { name, course } = inpvalue;
  const handleclick = () => {
    SetInparray([...inparray, { name, course }]);
    SetInpvalue({
      name: "",
      course: "",
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpvalue"));
    if (data) {
      SetInparray(data);
    }
  }, []);

  useEffect(() => {
    inparray?.length > 0 &&
      localStorage.setItem("inpvalue", JSON.stringify(inparray));
  }, [inparray]);

  //redakte
  const handleclick2 = (i) => {
    let { name, course } = inparray[i];
    SetInpvalue({ name, course });
    setBolin(true);
    setIndex(i);
  };

  //close modal

  const handleclose = () => {
    setShow(false);
  };

  //show details
  const handleinfo = (item) => {
    setDetail(item);
    console.log(item);

    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  //update info
  const updateinfo = () => {
    let data2 = [...inparray];
    data2.splice(index, 1, { name, course });
    SetInparray(data2);
    setBolin(false);
    SetInpvalue({
      name: "",
      course: "",
    });
  };

  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[60vw] h-[28vw] bg-slate-50 shadow-xl">
        <div className="flex justify-center py-4 bg-teal-900 ">
          <h2 className="text-3xl font-semibold text-white">
            Kursu daxil edin
          </h2>
        </div>
        <div className="py-10 flex  gap-20 justify-center">
          <form action="" className="flex flex-col gap-12">
            <div className="flex gap-12">
              <div className="flex flex-col gap-6">
                <label className="text-xl font-medium pl-2">Tələbə</label>
                <input
                  type="text"
                  name="name"
                  value={inpvalue.name}
                  onChange={handlechange}
                  placeholder="Tələbəni daxil"
                  className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-6">
                <label className="text-xl font-medium pl-2">Kurs</label>
                <input
                  className="w-[25vw] h-11 outline-none text-lg pl-4 rounded-md"
                  type="text"
                  placeholder="Kursu daxil edin"
                  name="course"
                  value={inpvalue.course}
                  onChange={handlechange}
                />
              </div>
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
          </form>
        </div>
      </div>

      {show && (
        <div className="flex w-[36vw] h-[16vw] flex-col bg-stone-100 fixed z-50">
          <div className="w-[36vw]  bg-black h-12 text-white text-xl font-semibold pl-4 flex  items-center">
            {
              <div>
                <span>{detail.course} </span>
                <span>kursunun tələbələri</span>
              </div>
            }
          </div>

          <table className="border-collapse w-[36vw] ">
            <thead className="bg-teal-900 text-white h-12">
              <tr className="text-base">
                <th className="border-2 w-60">Ad</th>
                <th className="border-2 w-60">Kurs</th>
              </tr>
            </thead>

            <tbody className="h-12">
              <tr className="h-12">
                <td className="border-2 pl-2">{detail.name}</td>
                <td className="border-2 pl-2">{detail.course}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end items-end mr-8 mt-10">
            <button
              className="w-20 h-9 bg-teal-800 font-semibold text-base text-white"
              onClick={handleclose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="flex gap-8 ml-[28vw]">
        <h3 className="text-teal-800 text-lg font-semibold">Kursu axtar :</h3>
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
              <th className="border-2 w-60">Kurs</th>
              <th className="border-2 w-60">Tələbələr</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inparray
              .filter((item) => {
                if (search == "") {
                  return item;
                } else if (
                  item.course.toLowerCase().includes(search.toLowerCase())
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

                    <td className="border-2 pl-2">
                      <button
                        className="bg-teal-700 w-20 h-8  text-white rounded-sm ml-5"
                        onClick={() => handleinfo(item)}
                      >
                        Tələbələr
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

export default CoursesPage;
