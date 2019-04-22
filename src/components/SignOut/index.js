import React from "react";

import { withFirebase } from "../Firebase";

const SignOuButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOuButton);
