import React, { useState } from "react";
import Header from "./Header";
import { funcValidation } from "../utils/regex";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { AVATAR } from "../utils/constant";
import { BG_URL } from "../utils/constant";

const LoginPage = () => {
  const [signup, setSignup] = useState(false);
  const [err, setErr] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const validation = funcValidation(email, password);
    setErr(validation);
    if (validation === null) {
      if (signup) {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            // Signed up
            updateProfile(auth.currentUser, {
              displayName: name,
            })
              .then(() => {
                // Profile updated!
                // ...
              })
              .catch(() => {
                // An error occurred
                // ...
              });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErr(errorCode + " " + errorMessage);
            // ..
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            // Signed in
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErr(errorCode + " " + errorMessage);
          });
      }
    }
  };

  const handleSignUp = () => {
    setEmail("");
    setName("");
    setPassword("");
    setSignup(!signup);
  };
  return (
    <div className="h-screen bg-cover bg-center " style={{ backgroundImage: `url(${BG_URL})` }}
>
      <Header />
      <div className="min-h-screen  flex justify-center  items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/13  h-auto flex flex-col px-14 py-8  bg-black/80 text-white rounded-lg "
        >
          <h2 className="text-3xl font-semibold mb-4 ">
            {signup ? "Sign Up" : "Sign In"}
          </h2>
          {signup && (
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 bg-black/70 px-4 py-4 text-md outline-none outline-2 border border-gray-700 mb-6"
              placeholder="Name"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 bg-black/70 px-4 py-4 text-md outline-none outline-2 border border-gray-700 mb-6"
            placeholder="E-mail"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 bg-black/70 px-4 py-4 text-md outline-none outline-2 border border-gray-700 "
            placeholder="Password"
          />
          <span className="min-h-7 text-red-500 text-sm ml-3 ">{err}</span>
          <button
            className="bg-red-600 text-md  py-2 rounded-sm mb-2 "
            onClick={(e) => handleSubmit(e)}
          >
            Sign {signup ? "Up" : "In"}
          </button>

          <h2 onClick={handleSignUp} className="text-md">
            {signup ? "Already have Account? " : "New to Netflix? "}
            <span className="underline cursor-pointer ">
              {signup ? "Sign In" : "Sign Up"}
            </span>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
