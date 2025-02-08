import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Loader from "./Components/Loader/Loader";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

// star rating კომპონენტსი იმმპორტი თავისი პროპსებით

{
  /* <StarRating
  maxRating={5}
  messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
/>  */
}
