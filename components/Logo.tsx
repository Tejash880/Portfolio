'use client'
import { siteConfigs } from "@/configs/config";
import { RocketLaunch } from "phosphor-react";

const Logo = () => {
  return (
    <div className="font-bold flex items-center gap-2">
      <RocketLaunch size={22} weight="fill" className="color-white" />
      <span className="font-bold text-lg tracking-tight">
        {siteConfigs.name}
      </span>
    </div>
  );
};

export default Logo;
