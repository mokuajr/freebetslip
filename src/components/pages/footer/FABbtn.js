import "./FABbtn.css";
import { React, useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions
} from "react-floating-button-menu";
import MdAdd from "@material-ui/icons/Add";
import MdClose from "@material-ui/icons/Clear";
import MdEdit from "@material-ui/icons/Edit";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

const FABbtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FloatingMenu
        slideSpeed={500}
        isOpen={isOpen}
        spacing={20}
        direction={Directions.Up}
        className="menu-btn"
      >
        <MainButton
          isOpen={isOpen}
          iconResting={<MdAdd style={{ fontSize: 20 }} />}
          iconActive={<MdClose style={{ fontSize: 20 }} />}
          background="white"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          size={56}
        />

        <ChildButton
          icon={<ThumbUpAltIcon style={{ fontSize: 30 }} />}
          background="cyan"
          size={40}
          target="_blank"
          onClick={(e) => {
            window.open("https://www.facebook.com/sportsfreebetslip", "_blank");
          }}
        />

        <ChildButton
          icon={<WhatsAppIcon style={{ fontSize: 30 }} />}
          background="cyan"
          target="_blank"
          size={40}
          onClick={(e) => {
            window.open("https://wa.me/+254790301470", "_blank");
          }}
        />

        <ChildButton
          icon={<MdEdit style={{ fontSize: 30 }} />}
          background="cyan"
          size={40}
          onClick={(e) => {
            window.open("https://www.sportsvar.com/freebetslip", "_blank");
          }}
        />
      </FloatingMenu>
    </div>
  );
};

export default FABbtn;
