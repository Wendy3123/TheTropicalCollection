import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUser } from "../contexts/CurrentUser.js";
function HomeScreen() {
  const { currentUser } = useContext(CurrentUser);

  // console.log(`is admin ${currentUser.isAdmin}`)

  return (
    <div className="homepagecontainer">
      <div className="homepageleft">
        <img
          className="homepageimg"
          src="https://thetropicalcollection.com/fruit-dish.jpeg"
          alt="homescreen pic"
        ></img>
      </div>

      <div className="homepageright">
        <h2 className="homepageh2tag">Fresh Fruit is the ONLY ingredient!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          hic fuga similique dicta commodi laborum placeat, at voluptate autem
          id quis magnam distinctio, cumque officia veritatis sunt nostrum quae
          architecto quia? Illum vero in at nobis, dignissimos quod, rem,
          voluptate numquam quaerat autem libero obcaecati eaque modi odio!
          Molestiae dolorem itaque modi consectetur, qui vitae nostrum
          perferendis illum odio ea laudantium exercitationem iusto incidunt
          soluta quasi eos accusamus praesentium nisi hic omnis possimus
          inventore molestias sequi voluptas? Minus, quisquam minima modi
          dolores ullam magnam debitis reprehenderit cupiditate! Odit, incidunt?
          Molestias explicabo voluptates qui doloribus dicta, alias possimus
          voluptatem illum rerum!
        </p>
        <Link to="/products">
          <button className="homepagebutton">See Our Products</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
