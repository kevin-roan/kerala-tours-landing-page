import React from "react";
import "./DestinationStyles.scss";

import munnar from "../assets/munnar.jpg";
import munnar2 from "../assets/munnar2.jpg";
import thekkady from "../assets/thekkady.jpg";
import thekkady2 from "../assets/thekkady2.jpg";
import kochin from "../assets/kochin.jpg";
import kochin2 from "../assets/kochin2.jpg";
import athirapally from "../assets/athirapally.jpg";
import athirapally2 from "../assets/athirapally2.jpg";
import vagamon from "../assets/vagamon.jpg";
import vagamon2 from "../assets/vagamon2.jpg";
import alleppy from "../assets/allepy.jpg";
import alleppy2 from "../assets/allepy2.jpg";

import DestinationData from "./DestinationData";

export default function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p1>Tours give you the opportunity to see a lot, within a time frame.</p1>
      <DestinationData
        heading="Munnar"
        context="Munnar needs no introduction to the seasoned traveller. The most favoured destination in Kerala, Munnar is situated at a height of 1600mts above sea level. Located in Idukki district, it is a slice of heaven with endless tea gardens, winding narrow lanes between the mist covered mountains and the spice scented fresh air.
This little town attracts tourists from around the globe all through the year. The tea estates, Mattuppetty Dam, Eravilulam national park etc. are just some of its attractions.
Above everything else is the calm and relaxed quality of this land that engulfs you in its arms leaving you with a desire to experience more of Munnar, and that is why one bids adieu to this place with a promise to visit again."
        image1={munnar}
        image2={munnar2}
        classname="first-des"
      />
      <DestinationData
        heading="Thekkady"
        context="Known for being home to the country’s largest Tiger Reserve, Thekkady is one of the most sought after jungle vacation destinations in Kerala. Located near the Kerala – Tamilnadu border in Idukki district, Thekkady is frequented by domestic and international tourists alike.
The sanctuary is the most important attraction in Thekkady. Spread over an area of 777 kilometer square, periyar Wildlife sanctuary was declared a Tiger Reserve in 1978. The reserve is accessed by trekking, boating and Jeep safari. These evergreen jungles house a number of species of plants and animals including more than 60 species of mammals, 265 species of birds, reptiles, amphibians etc.
Bamboo rafting in the catchment area of Mullaperiyar Dam, hiking in the wilderness, night trekking, boating etc. are experiences of a lifetime."
        image1={thekkady}
        image2={thekkady2}
        classname="first-des-reverse"
      />
      <DestinationData
        heading="Alleppy"
        context="
Also known as the Venice of the East, Alleppey is the hub of Kerala’s backwaters. With its picture perfect lagoons, mirror still backwaters, calm beaches, it is a land of watery wonders.
Its intricate grid of canals and how the life here is deeply interlinked with its waterways is just amazing. Home to thousands of house boats, Alleppy is the best location to spend a weekend floating in its waters, witnessing the breath-taking beauty this land is blessed with and enjoying the freshly cooked fish and duck in authentic Kerala style.
If enjoying some down time from the bustle of the city is what you need, Alleppey is just the place for you.
        "
        image1={alleppy}
        image2={alleppy2}
        classname="first-des"
      />
      <DestinationData
        heading="Vagamon"
        context="
Located on the Idukki – Kottayam border,vagamon is an enchanting little hill station complete with religious mysticism and European legacy. The cool mountain air and the green grassy hills everywhere you look will no doubt mesmerize you. Away from the buzzing tourist crowd at 1100 meters above sea level, Vagamon is the perfect offbeat hill station to unwind.
The place not only offers picturesque pine forests, story book meadows and beautiful waterfalls, it is also one of the few paragliding hotspots in the country.
        "
        image1={vagamon}
        image2={vagamon2}
        classname="first-des-reverse"
      />
      <DestinationData
        heading="Athirapally"
        context="
Located near Chalakudy, Athirappilly is a village famous for the Athirappilly waterfalls.
It is situated at 1000 feet above sea level on the Chalakudy river,with the falls itself of a height of 80 feet. Nicknamed the Niagara of India, these are the largest waterfalls in Kerala. Just 5kms away from from Athirappilly waterfalls are the Vazhachal waterfalls.
Popular among tourists, the surrounding Sholayar ranges of Western Ghats are home to a variety of endangered and endemic species of flora and fauna including, Asiatic elephants, bison, tiger, leopard, sambar etc.
        "
        image1={athirapally}
        image2={athirapally2}
        classname="first-des"
      />
      <DestinationData
        heading="Kochi"
        context="
Kochi also known as Cochin is the urban face of Kerala. This coastal cosmopolitan city on the shores of the Arabian and Laccadive Sea is part of Ernakulam district of Kerala. Famously known as the Queen of Arabian Sea, it was once an important spice trading centre on the west coast of India.
Ranking first in the total number of international and domestic tourist arrivals in Kerala, it is a land of an amazing blend of Chinese, Portuguese and British influences.  Visiting the historical towns of Fort Kochi and Mattancherry, relishing the undeniable remnants of the colonial past will be an experience in itself.
The Jewish Synagogue, Santa Cruz Basilica, Vasco House, Dutch Palace, Pallippuram Fort etc are only few of the many places one must not miss in Kochi.
        "
        image1={kochin}
        image2={kochin2}
        classname="first-des-reverse"
      />
    </div>
  );
}
