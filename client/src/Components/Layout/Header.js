import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions.js";

export default function header() {
  return (
    <header id="header">
      <Link to="/">
        <h1 className="title">Mumble: Dating App for Introverts! </h1>
      </Link>
      <AuthOptions />
    </header>
  );
}
