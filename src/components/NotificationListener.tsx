"use client";

import { notificationAtom } from "@/lib/atoms/notificationAtom";
import { notification } from "antd";
import { useEffect } from "react";
import { useAtom } from "jotai";

export const NotificationListener = () => {
  const [notifyState, setNotify] = useAtom(notificationAtom);

  useEffect(() => {
    if (notifyState) {
      notification[notifyState.type]({
        message: notifyState.message,
        description: notifyState.description,
        placement: "topRight",
        duration: 3,
      });
      setNotify(null);
    }
  }, [notifyState, setNotify]);

  return null;
};
