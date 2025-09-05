import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "../entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformListIcon = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div>
      {platforms.map((p) => {
        const Icon = iconMap[p.slug];
        if (!Icon) return null;
        return (
          <div key={p.id} className="list-inline-item">
            <Icon color="grey" />
          </div>
        );
      })}
    </div>
  );
};

export default PlatformListIcon;
