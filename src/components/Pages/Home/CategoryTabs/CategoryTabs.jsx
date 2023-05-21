import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marvel from "./Marvel";
import JusticeLeague from "./JusticeLeague";
import StarWars from "./StarWars";
import Transformers from "./Transformers";
import HomePageHeading from "../../../utils/HomePageHeading/HomePageHeading";


const CategoryTabs = () => {
      
  return (
    <div  className="mt-8 mb-8">
      <HomePageHeading>Shop by category</HomePageHeading>
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Justice League</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel>
          <Marvel />
        </TabPanel>
        <TabPanel>
          <JusticeLeague />
        </TabPanel>
        <TabPanel>
          <StarWars />
        </TabPanel>
        <TabPanel>
          <Transformers />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryTabs;
