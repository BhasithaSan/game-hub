import { useData } from "./useData";
import { Platform } from "./useData";

const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform;
