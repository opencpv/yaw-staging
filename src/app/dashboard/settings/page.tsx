import Head from "next/head";
import Navbar from "../components/navbar";
import Profile from "./components/profile";

const Settings = () => {
  return (
    <>
      <Head>
        <title>Dashboard - RentRightGh</title>
      </Head>
      <main>
        <p className="text-[31px] font-semibold mt-8">Settings</p>
        <Profile/>

      </main>
    </>
  );
};

export default Settings;
