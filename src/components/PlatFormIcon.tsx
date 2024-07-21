import { platform } from "../Hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface prop {
  platforms: platform[];
}
const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
  android: FaAndroid,
};
const PlatFormIcon = ({ platforms }: prop) => {
  return (
    <>
      <HStack>
        {platforms.map(({ platform }) => {
          return <Icon as={iconMap[platform.slug]} key={platform.id}></Icon>;
        })}
      </HStack>
    </>
  );
};

export default PlatFormIcon;
