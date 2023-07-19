import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handlebutton = () => {
    localStorage.removeItem("login");

    navigate("/login");
  };

  return (
    <div className="w-full h-14 bg-black text-white text-xl flex items-center justify-end  gap-16 pr-40 ">
      <Link to="/">Payments</Link>
      <Link to="/students">Students</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/login"></Link>

      <Link to="">
        <button
          style={{
            backgroundImage: `linear-gradient(to right, rgba(39, 150, 77, 1), rgba(38, 36, 93, 1) )`,
          }}
          type="submit"
          className="w-[6vw] h-[2.4vw] border-[0.1vw] text-xl text-white font-medium rounded-[0.3vw] "
          onClick={handlebutton}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   const navigate = useNavigate()

// const handlebutton = () =>{

//    navigate("/")
// }

//   return (
//     <div className='w-full h-14 bg-black text-white text-xl flex items-center justify-end  gap-16 pr-40 '>
//       {
//            localStorage.getItem("login") ?
//            <>
//                    <Link to="/payments">Payments</Link>
//                    <Link to="/students">Students</Link>
//                    <Link to="/courses">Courses</Link>

//         </>
//            :
//            <>

//             <Link to="/">Login</Link>

//            </>

// }

//    <Link to="">
//                    <button
//              style={{ backgroundImage: `linear-gradient(to right, rgba(39, 150, 77, 1), rgba(38, 36, 93, 1) )`, }}
//              type="submit"
//              className='w-[6vw] h-[2.4vw] border-[0.1vw] text-xl text-white font-medium rounded-[0.3vw] '
//              onClick={handlebutton} >

//       Logout

//     </button>
//                    </Link>

//     </div>
//   )
// }

// export default Navbar

/*


import React, { useEffect, useState } from "react";

const Students = () => {
  const [inparr, SetInparr] = useState([]);
  console.log(inparr,'arrays')

  const [inpdata, SetInpdata] = useState({
    email: "",
    name: "",
    number: "",
    surname: "",
  });


  const[index,setIndex] = useState()
  const[bolin,setBolin] = useState(false)
  const[filterdata,Setfilterdata] = useState([])
  const[query,Setquery] = useState("")

  const handlechange = (e) => {
    SetInpdata({ ...inpdata, [e.target.name]: e.target.value });
    console.log(inpdata);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpdata"));
    if (data) {
      SetInparr(data);
      Setfilterdata(data)
    }
  }, []);

  let { email, name, number, surname } = inpdata;
  const handleclick = () => {
    SetInparr([...inparr, { email, name, number, surname }]);
    SetInpdata({ email: "", name: "", number: "", surname: "" });
  };

  useEffect(()=>{
    inparr?.length > 0 && localStorage.setItem("inpdata", JSON.stringify(inparr))
  },[inparr])


  //redakte
const handleclick2 = (i) =>{
         
          // console.log(index,"edit data")
          // const data2 = [...inparr]
          // data2.splice(index,1)
          // SetInparr(data2)

        let {email,name,number,surname} = inparr[i]
        SetInpdata({email,name,number,surname})
        setBolin(true)
        setIndex(i)
          
        
}

const updateinfo =() =>{
           let data2 =[...inparr]
           data2.splice(index,1,{email,name,number,surname})
           SetInparr(data2)
           setBolin(false)
           SetInpdata({ email: "", name: "", number: "", surname: "" });


}

const handlesearch = (e) =>{
       const getsearch = e.target.value
       Setquery(getsearch)
      //  console.log(getsearch)

      if(getsearch.length > 0) {
    
        const getsearch = e.target.value
        const searchdata = inparr.filter( (item) => item.number.toLowerCase().includes(getsearch) )
        SetInparr(searchdata)
        
      } else {
        SetInparr(filterdata)
      }
}



  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[80vw] h-[35vw] bg-slate-50 shadow-xl ">
        <div className="flex justify-center py-10">
          <h2 className="text-3xl font-semibold">Tələbəni daxil edin</h2>
        </div>
        <div className="py-10 flex   justify-center">
          <form action="" className="flex gap-12">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inpdata.email}
                onChange={handlechange}
                placeholder="Emaili daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Ad
              </label>
              <input
                type="text"
                name="name"
                value={inpdata.name}
                onChange={handlechange}
                placeholder="Tələbənin adı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Nömrə
              </label>
              <input
                type="tel"
                name="number"
                value={inpdata.number}
                onChange={handlechange}
                placeholder="Nömrəni daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Soyad
              </label>
              <input
                type="text"
                name="surname"
                value={inpdata.surname}
                onChange={handlechange}
                placeholder="Tələbənin soyadı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={!bolin?handleclick:updateinfo}
            className="w-28 h-10 bg-orange-600 text-white rounded-sm">
            {!bolin?`Add` :`Update data` }
            
          </button>
        </div>
      </div>

      <div>
         <input type="text" name="name" value={query} placeholder="search" onChange={handlesearch} />
      </div>

   
      <div>
        <table className="border-collapse w-[72vw] ">
          <thead className="bg-amber-800 text-white h-12">
            <tr className="text-base">
              <th className="border-2 w-20">Id</th>
              <th className="border-2 w-60">Ad</th>
              <th className="border-2 w-60">Soyad</th>
              <th className="border-2 w-60">Nömrə</th>
              <th className="border-2 w-64">Email</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inparr.map((item, i) => {
           
              return (
                <tr key={i}>
                  <td className="border-2 font-semibold pl-2">{i + 1}</td>
                  <td className="border-2 pl-2">{item.name}</td>
                  <td className="border-2 pl-2">{item.surname}</td>
                  <td className="border-2 pl-2">{item.number}</td>
                  <td className="border-2 pl-2">{item.email}</td>
                  <td className="border-2 pl-2">
                    <button className="w-20 h-8 bg-orange-600 text-white rounded-sm ml-5" onClick={() => handleclick2(i)}>
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






*/

// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Navbar = () => {

//   const navigate = useNavigate()

// const handlebutton = () =>{

//    navigate("/")
// }

//   return (
//     <div className='w-full h-14 bg-black text-white text-xl flex items-center justify-end  gap-16 pr-40 '>
//       {
//            localStorage.getItem("login") ?
//            <>
//                    <Link to="/payments">Payments</Link>
//                    <Link to="/students">Students</Link>
//                    <Link to="/courses">Courses</Link>

//            </>
//            :
//            <>

//             <Link to="/">Login</Link>

//            </>

//       }

//    <Link to="">
//                    <button
//              style={{ backgroundImage: `linear-gradient(to right, rgba(39, 150, 77, 1), rgba(38, 36, 93, 1) )`, }}
//              type="submit"
//              className='w-[6vw] h-[2.4vw] border-[0.1vw] text-xl text-white font-medium rounded-[0.3vw] '
//              onClick={handlebutton} >

//       Logout

//     </button>
//                    </Link>

//     </div>
//   )
// }

// export default Navbar

/*


import React, { useEffect, useState } from "react";

const Students = () => {
  const [inparr, SetInparr] = useState([]);
  console.log(inparr,'arrays')

  const [inpdata, SetInpdata] = useState({
    email: "",
    name: "",
    number: "",
    surname: "",
  });


  const[index,setIndex] = useState()
  const[bolin,setBolin] = useState(false)
  const[filterdata,Setfilterdata] = useState([])
  const[query,Setquery] = useState("")

  const handlechange = (e) => {
    SetInpdata({ ...inpdata, [e.target.name]: e.target.value });
    console.log(inpdata);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpdata"));
    if (data) {
      SetInparr(data);
      Setfilterdata(data)
    }
  }, []);

  let { email, name, number, surname } = inpdata;
  const handleclick = () => {
    SetInparr([...inparr, { email, name, number, surname }]);
    SetInpdata({ email: "", name: "", number: "", surname: "" });
  };

  useEffect(()=>{
    inparr?.length > 0 && localStorage.setItem("inpdata", JSON.stringify(inparr))
  },[inparr])


  //redakte
const handleclick2 = (i) =>{
         
          // console.log(index,"edit data")
          // const data2 = [...inparr]
          // data2.splice(index,1)
          // SetInparr(data2)

        let {email,name,number,surname} = inparr[i]
        SetInpdata({email,name,number,surname})
        setBolin(true)
        setIndex(i)
          
        
}

const updateinfo =() =>{
           let data2 =[...inparr]
           data2.splice(index,1,{email,name,number,surname})
           SetInparr(data2)
           setBolin(false)
           SetInpdata({ email: "", name: "", number: "", surname: "" });


}

const handlesearch = (e) =>{
       const getsearch = e.target.value
       Setquery(getsearch)
      //  console.log(getsearch)

      if(getsearch.length > 0) {
    
        const getsearch = e.target.value
        const searchdata = inparr.filter( (item) => item.number.toLowerCase().includes(getsearch) )
        SetInparr(searchdata)
        
      } else {
        SetInparr(filterdata)
      }
}



  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[80vw] h-[35vw] bg-slate-50 shadow-xl ">
        <div className="flex justify-center py-10">
          <h2 className="text-3xl font-semibold">Tələbəni daxil edin</h2>
        </div>
        <div className="py-10 flex   justify-center">
          <form action="" className="flex gap-12">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inpdata.email}
                onChange={handlechange}
                placeholder="Emaili daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Ad
              </label>
              <input
                type="text"
                name="name"
                value={inpdata.name}
                onChange={handlechange}
                placeholder="Tələbənin adı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Nömrə
              </label>
              <input
                type="tel"
                name="number"
                value={inpdata.number}
                onChange={handlechange}
                placeholder="Nömrəni daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Soyad
              </label>
              <input
                type="text"
                name="surname"
                value={inpdata.surname}
                onChange={handlechange}
                placeholder="Tələbənin soyadı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={!bolin?handleclick:updateinfo}
            className="w-28 h-10 bg-orange-600 text-white rounded-sm">
            {!bolin?`Add` :`Update data` }
            
          </button>
        </div>
      </div>

      <div>
         <input type="text" name="name" value={query} placeholder="search" onChange={handlesearch} />
      </div>

   
      <div>
        <table className="border-collapse w-[72vw] ">
          <thead className="bg-amber-800 text-white h-12">
            <tr className="text-base">
              <th className="border-2 w-20">Id</th>
              <th className="border-2 w-60">Ad</th>
              <th className="border-2 w-60">Soyad</th>
              <th className="border-2 w-60">Nömrə</th>
              <th className="border-2 w-64">Email</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inparr.map((item, i) => {
           
              return (
                <tr key={i}>
                  <td className="border-2 font-semibold pl-2">{i + 1}</td>
                  <td className="border-2 pl-2">{item.name}</td>
                  <td className="border-2 pl-2">{item.surname}</td>
                  <td className="border-2 pl-2">{item.number}</td>
                  <td className="border-2 pl-2">{item.email}</td>
                  <td className="border-2 pl-2">
                    <button className="w-20 h-8 bg-orange-600 text-white rounded-sm ml-5" onClick={() => handleclick2(i)}>
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






*/

/*


import React, { useEffect, useState } from "react";

const Students = () => {
  const [inparr, SetInparr] = useState([]);
  console.log(inparr,'arrays')

  const [inpdata, SetInpdata] = useState({
    email: "",
    name: "",
    number: "",
    surname: "",
  });


  const[index,setIndex] = useState()
  const[bolin,setBolin] = useState(false)
  const[filterdata,Setfilterdata] = useState([])
  const[query,Setquery] = useState("")

  const handlechange = (e) => {
    SetInpdata({ ...inpdata, [e.target.name]: e.target.value });
    console.log(inpdata);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inpdata"));
    if (data) {
      SetInparr(data);
      Setfilterdata(data)
    }
  }, []);

  let { email, name, number, surname } = inpdata;
  const handleclick = () => {
    SetInparr([...inparr, { email, name, number, surname }]);
    SetInpdata({ email: "", name: "", number: "", surname: "" });
  };

  useEffect(()=>{
    inparr?.length > 0 && localStorage.setItem("inpdata", JSON.stringify(inparr))
  },[inparr])


  //redakte
const handleclick2 = (i) =>{
         
          // console.log(index,"edit data")
          // const data2 = [...inparr]
          // data2.splice(index,1)
          // SetInparr(data2)

        let {email,name,number,surname} = inparr[i]
        SetInpdata({email,name,number,surname})
        setBolin(true)
        setIndex(i)
          
        
}

const updateinfo =() =>{
           let data2 =[...inparr]
           data2.splice(index,1,{email,name,number,surname})
           SetInparr(data2)
           setBolin(false)
           SetInpdata({ email: "", name: "", number: "", surname: "" });


}

const handlesearch = (e) =>{
       const getsearch = e.target.value
       Setquery(getsearch)
      //  console.log(getsearch)

      if(getsearch.length > 0) {
    
        const getsearch = e.target.value
        const searchdata = inparr.filter( (item) => item.number.toLowerCase().includes(getsearch) )
        SetInparr(searchdata)
        
      } else {
        SetInparr(filterdata)
      }
}



  return (
    <div className="flex items-center justify-center py-10 flex-col gap-20 ">
      <div className="w-[80vw] h-[35vw] bg-slate-50 shadow-xl ">
        <div className="flex justify-center py-10">
          <h2 className="text-3xl font-semibold">Tələbəni daxil edin</h2>
        </div>
        <div className="py-10 flex   justify-center">
          <form action="" className="flex gap-12">
            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={inpdata.email}
                onChange={handlechange}
                placeholder="Emaili daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Ad
              </label>
              <input
                type="text"
                name="name"
                value={inpdata.name}
                onChange={handlechange}
                placeholder="Tələbənin adı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>

            <div className="flex flex-col gap-6">
              <label htmlFor="" className="text-xl font-medium pl-2">
                Nömrə
              </label>
              <input
                type="tel"
                name="number"
                value={inpdata.number}
                onChange={handlechange}
                placeholder="Nömrəni daxil edin"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
              <label htmlFor="" className="text-xl font-medium pl-2">
                Soyad
              </label>
              <input
                type="text"
                name="surname"
                value={inpdata.surname}
                onChange={handlechange}
                placeholder="Tələbənin soyadı"
                className="w-[35vw] h-11 outline-none text-lg pl-4 rounded-md"
              />
            </div>
          </form>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={!bolin?handleclick:updateinfo}
            className="w-28 h-10 bg-orange-600 text-white rounded-sm">
            {!bolin?`Add` :`Update data` }
            
          </button>
        </div>
      </div>

      <div>
         <input type="text" name="name" value={query} placeholder="search" onChange={handlesearch} />
      </div>

   
      <div>
        <table className="border-collapse w-[72vw] ">
          <thead className="bg-amber-800 text-white h-12">
            <tr className="text-base">
              <th className="border-2 w-20">Id</th>
              <th className="border-2 w-60">Ad</th>
              <th className="border-2 w-60">Soyad</th>
              <th className="border-2 w-60">Nömrə</th>
              <th className="border-2 w-64">Email</th>
              <th className="border-2 w-36">Redaktə</th>
            </tr>
          </thead>

          <tbody className="h-12">
            {inparr.map((item, i) => {
           
              return (
                <tr key={i}>
                  <td className="border-2 font-semibold pl-2">{i + 1}</td>
                  <td className="border-2 pl-2">{item.name}</td>
                  <td className="border-2 pl-2">{item.surname}</td>
                  <td className="border-2 pl-2">{item.number}</td>
                  <td className="border-2 pl-2">{item.email}</td>
                  <td className="border-2 pl-2">
                    <button className="w-20 h-8 bg-orange-600 text-white rounded-sm ml-5" onClick={() => handleclick2(i)}>
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






*/
