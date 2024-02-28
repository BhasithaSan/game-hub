import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface prop {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current?.value) onSearch(ref.current.value);
        else return;
        // console.log(ref.current?.value);
      }}
    >
      <InputGroup color={"white"}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Seach Games"
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
