import React, { useState } from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import "../Navigation.css";
import { FaAlignRight } from "react-icons/fa";
import AdminLayout from "./AdminLayout";

const AdminPage = () => {
  
  return (
    <div >
       <AdminLayout />
    </div>
  );
};

const condition = (authUser) => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(withAuthorization(condition), withFirebase)(AdminPage);
