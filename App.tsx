import PlaneGrid from "./src/pages/planeCards";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return <PlaneGrid />;
};
export default App;
