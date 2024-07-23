"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { toast, Toaster, ToastBar } from "react-hot-toast";
import { LiaTimesSolid } from "react-icons/lia";
import style from "./Shared.module.css";
import { BsInfoCircleFill } from "react-icons/bs";

const ToastConfig = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          iconTheme: {
            primary: "#287D3C",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#DA1414",
            secondary: "#fff",
          },
        },
        blank: {
          iconTheme: {
            primary: "#2E5AAC",
            secondary: "#fff",
          },
          icon: <BsInfoCircleFill className="text-info" />,
          duration: 4000,
        },
      }}
      containerClassName={style.toastContainer}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            //...t.style,
            display: "block",
            minWidth: "300px",
            animation: t.visible ? "fade-in-bottom 0.5s ease" : "",
          }}
        >
          {({ icon, message }) => (
            <div className="flex items-start gap-3">
              <span
                className={cn(
                  "grid size-8 place-items-center gap-1.5 rounded-full",
                  {
                    "bg-success-bg": t.type === "success",
                    "bg-error-bg": t.type === "error",
                    "bg-info-bg": t.type === "blank",
                  },
                )}
              >
                {icon}
              </span>
              <div className="flex flex-col items-start">
                <h4>
                  {t.type === "success"
                    ? "Success"
                    : t.type === "error"
                      ? "Error"
                      : "Info"}
                </h4>
                <span className="relative left-[-0.65rem] p-0 font-medium text-shade-200">
                  {message}
                </span>
              </div>
              {t.type !== "loading" && (
                <button
                  className="circle-hover ml-auto"
                  onClick={() => toast.dismiss(t.id)}
                >
                  <LiaTimesSolid classsName="text-shade-300" />
                </button>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default ToastConfig;
