interface WebReq {
    username: string;
    age: number;
    followers: number;
    id: string;
    image?: string;
}


async function fetchData(url:any) {
   try {
     const data = await fetch(url);
      if (!data.ok) {
        throw new Error(`HTTP error ${data.status}`)  // decoding the error format manualy.
      }
  const res : WebReq[] = await data.json()
  console.log(res[0]?.username)
   } catch (error : any) {
    console.error("error :" , error)
   }
}

const url = `http://localhost:3000/users`;

fetchData(url)