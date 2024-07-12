"use client";
import Detail from "@/components/Detail/Detail";
import {about} from "@/utils/data";

interface IHome {
  title: string;
  body: string;
}

export default function Home() {

  return (
    <div>
      <Detail {...about} />
    </div>
  );
}
