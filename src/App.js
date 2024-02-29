import "./App.css";
import React, { lazy, Suspense } from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import axios from "axios";
// import CreateTeam from "./components/CreateTeam/CreateTeam";
import Payment from "./components/Payments/Payment";
import Events from "./components/Events/Events";
import OneSignal from 'onesignal-cordova-plugin';


const Aboutus = lazy(() => import("./components/About/About"));
const Admin = lazy(() => import("./components/Admin/Admin"));
const Komet = lazy(() => import("./components/Komet/Komet"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Competitions = lazy(() => import("./components/Competitions/Competitions"));
const Reg = lazy(() => import("./components/Registration/Reg"));
const Explore = lazy(() => import("./components/Explore/Explore"));
const Team = lazy(() => import("./components/OurTeam/Team/Team"));
const CampusAmb = lazy(() => import("./components/CampusAmb/CampusAmb"));
const LnmHacks = lazy(() => import("./components/LnmHacks/LnmHacks"));
const Login = lazy(() => import("./components/Login/Login"));
const Accomodation = lazy(() => import("./components/Accomodation/Accomodation"));


console.log(process.env.REACT_APP_API_URL);
const serverSystemUrl= "https://api.plinth.co.in";// 
function App() {
   // Remove this method to stop OneSignal Debugging
   OneSignal.Debug.setLogLevel(6)
  
   // Replace YOUR_ONESIGNAL_APP_ID with your OneSignal App ID
   OneSignal.initialize("aab78d71-2d0d-4303-b1ec-9427fa1c377c");
 
   OneSignal.Notifications.addEventListener('click', async (e) => {
     let clickData = await e.notification;
     console.log("Notification Clicked : " + clickData);
   })
 
   OneSignal.Notifications.requestPermission(true).then((success) => {
     console.log("Notification permission granted " + success);
   })


  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("false");
  const [userId, setUserId] = useState(null)
  const [accomodation, setAccomodation] = useState(false)
  const [prevLoc, setPrevLoc] = useState(null)
  // const location=useLocation();
  // useEffect(()=>{
  //   setPrevLoc(location.pathname)
  // },[location])


  // const getUser = async () => {
  //   try {
  //     const url = `http://localhost:3000/auth/google`;
  //     const { data } = await axios.get(url, { withCredentials: true });
  //     setUser(data.user._json);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err, "hi");
  //   }
  // };

  useEffect(() => {
    axios
      .get(`${serverSystemUrl}/`, {
        validateStatus: false,
        withCredentials: true,
      })
      .then((response) => {
        console.log("---------", response);
        if (response.status == 200) {
          setAuth(response.data.user.role);
          console.log('====================================');
          console.log(response.data.user.user_id);
          console.log('====================================');
          setUserId(response.data.user.user_id)
          setAccomodation(response.data.user.accomodation)
          console.log("==accomodation-", response.data.user.accomodation);
        }
      });
  }, [auth])

  useEffect(() => {

    // console.log((user));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // console.log(loading);
  }, []);

  console.log(auth);

  return (
    <div className="App">

      <Sidebar auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl} setUser={setUserId} />

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={loading ? (
            <Loader />
          ) : <Home auth={auth} setAuth={setAuth} />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="ourteam" element={<Team />} />
          <Route path="events" element={<Events />} />
          <Route path="/admin" element={(auth === "admin")?(<Admin serverSystemUrl={serverSystemUrl} />):<Login auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}
            prevPath={prevLoc}/>} />
          <Route path="komet" element={<Komet />} />
          <Route path="competitions" element={<Competitions serverSystemUrl={serverSystemUrl} auth={auth} setAuth={setAuth} userid={userId} />} />
          <Route path="accomodation" element={<Accomodation auth={auth} userid={userId} serverSystemUrl={serverSystemUrl} />} />
          <Route path="/:name" element={<Explore serverSystemUrl={serverSystemUrl} setUserId={setUserId} userid={userId} auth={auth} setAuth={setAuth} />} />
          {(auth === "false") && <Route path="/registration" element={<Reg auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl} />} />
          }<Route path="campus_ambassador" element={<CampusAmb auth={auth} setAuth={setAuth} />} />
          <Route path="lnm_hacks" element={<LnmHacks auth={auth} setAuth={setAuth} />} />
          {(auth === "false") && (<Route path="/login" element={<Login auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl}
            prevPath={prevLoc} />} />
          )}
          <Route path="/payments/:eventname/" element={auth === "false" ? <Login auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl} prevPath={prevLoc} /> : <Payment userid={userId} accomodation={accomodation} auth={auth} setAuth={setAuth} url={serverSystemUrl} prevPath={prevLoc} />} />
          <Route path="*" element={<Home auth={auth} setAuth={setAuth}/>} /> 
          {/* <Route path="create-team" element={<CreateTeam/>} /> */}
          {/* <Route path="/payments/astrohunt/"  element={<Payment userid={userId} accomodation={accomodation} auth={auth} setAuth={setAuth} url={serverSystemUrl} prevPath={prevLoc} />} /> */}
        </Routes>
      </Suspense>




    </div>
  );
}

export default App;
