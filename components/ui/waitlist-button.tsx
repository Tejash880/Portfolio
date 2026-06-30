"use client";
import React, { useState } from "react";
import { CircleNotch, ArrowRight } from "phosphor-react";
import { Toaster, toast } from "react-hot-toast";
import { ButtonProps } from "@/types";

const customToastStyle = {
  background: "rgba(30, 38, 49, 0.9)",
  color: "#ffffff",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "8px",
};

const JoinWaitList: React.FC<ButtonProps> = ({ text, toolTipText }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      // Send email to your API endpoint
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully joined the waitlist!", {
          style: customToastStyle,
        });
        setEmail(""); // Clear the email input
      } else {
        toast.error(
          data.message || "Failed to join the waitlist. Please try again.",
          {
            style: customToastStyle,
          }
        );
      }
    } catch (error) {
      toast.error("Failed to join the waitlist. Please try again.", {
        style: customToastStyle,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center space-y-4 gap-1">
      <Toaster position="top-center" />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="w-full p-4 bg-transparent border border-border-color-primary/55 rounded-xl px-10"
      />
      <button
        className={`relative flex px-10 flex-row gap-1 items-center justify-center py-3 rounded-lg w-full dark:text-black text-white text-foreground-opposite group text-xl font-extrabold ${
          loading ? "btn-loading" : "bg-primary hover:bg-primary-color/90"
        }`}
        onClick={handleClick}
        title={toolTipText}
        disabled={loading}
      >
        {loading ? (
          <CircleNotch
            size={30}
            weight="fill"
            className="dark:bg-white bg-black absolute animate-spin fill-primary-content transition-transform duration-200 ease-in-out"
          />
        ) : (
          <>
            {text}
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </div>
  );
};

export default JoinWaitList;
