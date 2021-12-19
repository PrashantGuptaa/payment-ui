import { FaHome } from "react-icons/fa";
import { GiBookmarklet } from 'react-icons/gi';
import {CgMoreVerticalO}  from 'react-icons/cg';
import { RiBillLine } from 'react-icons/ri';

export const footerAsset = [
  {
    icon: <FaHome/>,
    title: "Home",
    active: true,
  },
  {
    icon: <GiBookmarklet/>,
    title: "PassBook",
    active: false,

  },
  {
    icon: <RiBillLine/>,
    title: "Bill Book",
    active: false,

  },
  {
    icon: <CgMoreVerticalO/>,
    title: "More",
    active: false,

  },
];
