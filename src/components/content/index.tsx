import { TabView, TabPanel } from 'primereact/tabview';
import "./index.css"
import { Home } from '../../pages/home';
import About from '../../pages/about';
import Branches from '../../pages/branch';
        

export const Content = () => {
    return (
        <>
            <TabView>
                <TabPanel header={"Home"} headerClassName='tabViewHeader'>
                    <Home />
                </TabPanel>
                <TabPanel header={"About Us"} headerClassName='tabViewHeader'>
                    <About/>
                </TabPanel>
                <TabPanel header={"Our Branches"} headerClassName='tabViewHeader'>
                    <Branches/>
                </TabPanel>
            </TabView>
        </>
    )
}