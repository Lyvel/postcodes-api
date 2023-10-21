"use client";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [postcode, setPostcode] = useState("");
  const [valid, setValid] = useState(false);
  const [formatted, setFormatted] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValid(false);
    setFormatted("");
    const response = await fetch("/api/postcodes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postcode: postcode }),
    });

    if (response.ok) {
      const data = await response.json();
      setValid(data.validatedPostcode);
      if (data.validatedPostcode) {
        setFormatted(data.formattedPostcode);
      } else {
        setFormatted("Invalid Postcode");
      }
    }
  };

  return (
    <div className="flex w-[800px] m-auto p-20">
      <form className="w-full gap-4 flex flex-col" onSubmit={handleSubmit}>
        <TextField
          label="Postcode"
          type="text"
          required
          className="w-full"
          onChange={(e) => setPostcode(e.target.value)}
          value={postcode}
        />
        <TextField
          label="Valid"
          type="text"
          disabled
          className="w-full"
          value={valid}
        />
        <TextField
          label="Formatted"
          type="text"
          disabled
          className="w-full"
          value={formatted}
        />
        <Button className="w-full" variant="outlined" type="submit">
          Validate
        </Button>
      </form>
    </div>
  );
}
