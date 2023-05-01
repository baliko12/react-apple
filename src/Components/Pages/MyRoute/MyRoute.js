import React from "react";
import Main from "../../Main/Main";
import Mac from "../Mac/Mac";
import Iphone from "../Iphone/Iphone";
import Ipad from "../Ipad/Ipad";
import Watch from "../Watch/Watch";
import Tv from "../Tv/Tv";
import Music from "../Music/Music";
import Support from "../Support/Support";
import Search from "../Search/Search";
import Cart from "../Cart/Cart";
import Four04 from "../Four04/Four04";
import { Route, Routes } from "react-router-dom";
import LearnMore from "../LearnMore/LearnMore";
import DisplayTable from "../../YoutubeVideos/DisplayTable";
import IphoneTable from "../Iphone/IphoneTable";
function MyRoute() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/iphone" element={<Iphone />} />
      <Route path="/ipad" element={<Ipad />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/music" element={<Music />} />
      <Route path="/support" element={<Support />} />
      <Route path="/table1" element={<DisplayTable />} />
      <Route path="/table2" element={<IphoneTable />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Four04 />} />
      <Route path="/iphone/:clientID" element={<LearnMore />} />
    </Routes>
  );
}

export default MyRoute;
