import React from "react";
import { platform } from "../Hooks/useGames";
import { HStack, Icon, Text, list } from "@chakra-ui/react";
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
const PlatFormIcon = ({ platforms }: prop) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    FaPlaystation: FaPlaystation,
    xbox: FaXbox,
    ninetendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    anddroid: FaAndroid,
  };

  return (
    <>
      <HStack>
        {platforms.map(({ platform }) => (
          <Icon as={iconMap[platform.slug]}></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatFormIcon;
