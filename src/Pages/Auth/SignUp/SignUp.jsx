import React from "react";
import AuthFooter from "../Shared/AuthFooter/AuthFooter";
import Input from "../../../Components/Input/Input";
import LinkLarge from "../../../Components/LinkLarge/LinkLarge";
import LinkSmall from "../../../Components/LinkSmall/LinkSmall";
import AuthTitle from "../Shared/AuthTitle/AuthTitle";
import AuthHeader from "../Shared/AuthHeader/AuthHeader";
import SocialAuth from "../Shared/SocialAuth/SocialAuth";

export default function SignUp() {
  return (
    <>
      <AuthHeader />
      <div className="flex flex-col min-h-screen w-full justify-center items-center">
        <div>
          {/* -------------------------------------Form Header-------------------------------------  */}
          <AuthTitle title="User" subTitle="SignUp" />
          {/* -------------------------------------Form-------------------------------------  */}
          <form className="flex flex-col space-y-5 mt-5">
            <Input name="email" placeholder="Email" type="mail" />
            <Input name="password" placeholder="Password" type="password" />
            <Input
              name="conPass"
              placeholder="Confirm Password"
              type="password"
            />
            <Input type="submit" name="SIGN UP" />
          </form>
          {/* -----------------------------------New User----------------------------------- */}
          <div className="flex justify-center items center mt-2">
            <p className="text-slate-800 text-xs">Already have an account?</p>
            <LinkSmall text="signin" link={"/auth/signin"} />
          </div>
          {/* ---------------------------------Social Login--------------------------------- */}
          <SocialAuth text="Sign Up" />
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
