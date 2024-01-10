import Cover from '../../sharedPages/Cover/Cover';
import orderPageImage from '../../../assets/shop/banner2.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';
import 'react-tabs/style/react-tabs.css';
import OrderFoodCard from '../../../components/OrderFoodCart/OrderFoodCard';
import { Helmet } from 'react-helmet';
const OurShop = () => {
  const { category } = useParams();
  const items = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
  const index = items.indexOf(category);

  const [tabIndex, setTabIndex] = useState(index);
  const [menus] = useMenu();
  const salads = menus.filter(item => item.category === 'salad');
  const pizzas = menus.filter(item => item.category === 'pizza');
  const soup = menus.filter(item => item.category === 'soup');
  const dessert = menus.filter(item => item.category === 'dessert');
  const drink = menus.filter(item => item.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title className="upparcase">Bistro | Shop</title>
      </Helmet>
      <Cover
        img={orderPageImage}
        details="Would you like to try a dish?"
        title="OUR SHOP"
      ></Cover>
      <div className="px-5 my-12 lg:px-32">
        <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList>
            <Tab>SALADS</Tab>
            <Tab>PIZZAS</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {salads.map(item => (
                <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {pizzas.map(item => (
                <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {soup.map(item => (
                <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {dessert.map(item => (
                <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {drink.map(item => (
                <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
