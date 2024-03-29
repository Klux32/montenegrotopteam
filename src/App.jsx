import Header from "./layout/Header";
import LandingScreen from "./screens/LandingScreen";
import AboutScreen from "./screens/AboutScreen";
import ProgramScreen from "./screens/ProgramScreen";
import ContactScreen from "./screens/ContactScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import CoachesScreen from "./screens/CoachesScreen";
import FAQScreen from "./screens/FAQScreen";
import FooterScreen from "./screens/FooterScreen";
import MapScreen from "./screens/MapScreen";
const App = () => {
  return (
    <>
      <Header />
      <LandingScreen />
      <AboutScreen />
      <ProgramScreen />
      <ScheduleScreen />
      <CoachesScreen />
      <FAQScreen />
      <ContactScreen />
      {/* <MapScreen /> */}
      <FooterScreen />
    </>
  );
};

export default App;
