import ReasturantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
const Body =() => {    // not gonan use mock data reslist
    //State Variable
   let [listOfRes, setListOfRes] = useState(resList);
   
   // useEffect() - Normal Function , useEffect Runs After the first render for eg to make an api call

   useEffect(() => {
    console.log("useEffect is called");
    fetchData();
   }, []);
   
   const fetchData = async function() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.064182016306049&lng=77.74447961587117&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    
    // updating the state with the
    // setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
   }

 

    //Normal Js Variable 
//     let listOfRes = [
//         {
//             "info": {
//                 "id": "651010",
//                 "name": "Pizza Hut",
//                 "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Pizzas"
//                 ],
//                 "avgRating": 3.8,
//                 "sla": {
//                     "deliveryTime": 30
//                 },
                
//             },        
//         },
//         {
//             "info": {
//                 "id": "651011",
//                 "name": "MCD",
//                 "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Burgers"
//                 ],
//                 "avgRating": 4.3,
//                 "sla": {
//                     "deliveryTime": 30
//                 },
                
//             },        
//         },
//         {
//             "info": {
//                 "id": "651012",
//                 "name": "KFC",
//                 "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                 "costForTwo": "₹350 for two",
//                 "cuisines": [
//                     "Pizzas"
//                 ],
//                 "avgRating": 4.0,
//                 "sla": {
//                     "deliveryTime": 30
//                 },
                
//             },        
//         },
//    ];
    return (
      <div className="body">
        <button className="filter-btn" onClick={
            () => {
                // console.log("Button Clicked ❣️")
               let filterRes = listOfRes.filter((res) => res.info.avgRating >= 4);
               setListOfRes(filterRes);
                console.log(filterRes);
            }
        }>Top Rated Restaurants</button>
        <div className="res-conatiner">
          {
            listOfRes.map(resturant => (
              <ReasturantCard key ={resturant.info.id} resData ={resturant}/>
            ))
          }
        </div>
      </div>
    )
  }

  export default Body;