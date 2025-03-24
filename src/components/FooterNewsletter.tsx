"use client";

import { Input, Button } from "antd";
import { useState } from "react";

export const FooterNewsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) {
      console.log("Zəhmət olmasa email daxil edin");
      return;
    }

    // Placeholder for subscription logic (API call or other logic)
    console.log(`Təşəkkürlər! ${email} uğurla abunə oldu.`);
    setEmail("");
  };

  return (
    <div className="w-full">
      <h3 className="font-semibold mb-4">Xəbər bülleteni</h3>
      <Input
        type="email"
        placeholder="Email adresinizi daxil edin"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size="large"
        className="!mb-2"
      />
      <Button
        type="primary"
        size="large"
        block
        onClick={handleSubscribe}
        className="!w-max"
      >
        Abunə ol
      </Button>
    </div>
  );
};
