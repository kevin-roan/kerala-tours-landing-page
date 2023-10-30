import "./TripStyles.scss";
import TripData from "./TripData";
import trip1 from "../assets/kochin2.jpg";
import trip2 from "../assets/vagamon.jpg";
import trip3 from "../assets/munnar.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations here</p>
      <div className="tripcard">
        <TripData
          image={trip2}
          heading="Vagamon"
          text="
Vagamon, a hidden gem nestled in the verdant hills of Kerala, offers a serene escape into nature's embrace. Our journey through Vagamon unveils breathtaking landscapes and a peaceful atmosphere that rejuvenates the soul. The lush meadows, misty valleys, and cascading waterfalls paint an enchanting panorama, inviting visitors to immerse themselves in tranquility. The thrill of adventure awaits with trekking trails that wind through the hills, providing awe-inspiring views at every turn. The cool mountain air, coupled with the warmth of local hospitality, creates an unforgettable experience. Vagamon, with its natural beauty and serene ambience, is a haven for those seeking solace and adventure amidst the pristine charm of Kerala's hills. Join us in discovering the untouched beauty and tranquility of Vagamon.
          "
        />
        <TripData
          image={trip3}
          heading="Trip to Munnar"
          text="
Munnar, a picturesque paradise nestled in the Western Ghats of Kerala, promises an enchanting sojourn amidst rolling hillsis.celebration of nature's grandeur, where lush tea gardens carpet the terrain, creating a mesmerizing mosaic of greenery. The journey unveils breathtaking vistas of misty mountains, serene valleys, and pristine lakes, offering a haven for nature enthusiasts and tranquility seekers. Explore the aromatic tea estates and discover the art of tea-making at the plantations, offering an immersive experience in the heritage of this region. The crisp mountain air, adorned with the fragrance of tea, coupled with the warmth of local hospitality, ensures a memorable escapade. Munnar, with its scenic splendor and invites all to bask in the beauty and serenity of Kerala's highlands. Join us on this expedition to delve into the untouched charm and tranquility of Munnar.
          "
        />
        <TripData
          image={trip1}
          heading="Trip to Kochi"
          text="
Experience the charm of Kochi through our vivid journey! Kochi, a city steeped in history and natural beauty, offers a tapestry of cultural wonders. From the iconic Chinese fishing nets adorning the coastline to the splendid Mattancherry Palace resonating with regal stories, every step in this city tells a tale. Immerse yourself in the bustling markets filled with the aroma of spices, indulge in delectable local cuisine, and find tranquility amidst the serene backwaters with a soothing boat ride. Wander through vibrant streets adorned with colorful murals, ancient churches, and a blend of tradition and modernity. Our trip encapsulates the essence of Kochi, where the warmth of its locals merges with the captivating allure of Kerala’s heritage. Discover the heart of this vibrant city with us.
          "
        />
      </div>
    </div>
  );
};

export default Trip;
