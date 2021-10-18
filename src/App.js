import React, { useEffect, useState } from "react";
import Routes from "./components/Routes"; // Routers va chercher directement le fichier index.js dans le dossier Routes
import { UidContext } from "./components/AppContext";
import { useDispatch } from "react-redux"; 
import axios from "axios";
import { getUser } from "./actions/user.actions";
const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        /*url: `${process.env.REACT_APP_API_URL}jwtid`,*/
        url: `${`https://gifts-and-talents.herokuapp.com/`}jwtid`,
        withCredentials: true,
      })
        .then((res) => { 
          //console.log(res);
          setUid(res.data)
        })       
        .catch((err) => console.log("Pas de token"));
    };
    fetchToken();

    if(uid) dispatch(getUser(uid))
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
