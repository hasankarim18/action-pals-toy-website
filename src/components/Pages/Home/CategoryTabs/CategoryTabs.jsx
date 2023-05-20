import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Marvel from "./Marvel";
import JusticeLeague from "./JusticeLeague";
import StarWars from "./StarWars";
import Transformers from "./Transformers";

const CategoryTabs = () => {
    
  return (
    <div className="mt-8 mb-8">
      <h2 className="text-3xl text-center mb-8 ">Shop By Category</h2>
      <hr className="mb-8" />
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
