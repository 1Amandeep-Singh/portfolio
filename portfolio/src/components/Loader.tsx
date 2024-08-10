import { Slugs } from "../../User";
import IconCloud from "./magicui/icon-cloud";
import React from "react";
import { IconHexagon } from '@tabler/icons-react';

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_5s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={Slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={190} color="#64FFDA" stroke={1.25}/>
        <div className="absolute font-mono text-6xl text-zinc-500 font-semibold -z-10">ASR</div>
    </div>
  );
}
