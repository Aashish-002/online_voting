"use server";
import {  sendMail } from "./sendEmail";
import otpGenerator from 'otp-generator';


 export const send = async () => {
    const generatedOtp = otpGenerator.generate(6, { upperCase: false, specialChars: false });

    await sendMail({
      to: "orarytemp002@gmail.com",
      name: "Admin",
      subject: "OTP",
      body:`your otp is <h1>${generatedOtp} </h1>`,
    });
  }