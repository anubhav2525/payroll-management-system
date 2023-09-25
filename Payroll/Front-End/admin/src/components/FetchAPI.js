import  { useEffect, useState } from 'react'

function FetchAPI(url) {
      const [data, setdata] = useState([]);
      useEffect(() => {
            async function getdata() {
                  const call = await fetch(url);
                  const response = await call.json();
                  // console.log(response);
                  setdata(response);
            }
            getdata();
      }, [])
      return data
}

export default FetchAPI
