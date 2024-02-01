import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllData, FetchSingleData } from '../../store/fdcapi/fdcapi';

const About = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(FetchAllData());
     dispatch(FetchSingleData(10))
  },[])
  const storeData = useSelector((state)=> state.fdcapi.data);
  console.log('storeddata', storeData);

  const singlePost = useSelector((state)=> state.fdcapi.post);
  console.log("single post ", singlePost);
  return (
    <>
 <div className="aboutimg">
 {/* <marquee behavior="" direction="">About Page<img src="https://miro.medium.com/v2/resize:fit:1358/1*X2aUcPKepjkXPPIMRErYFQ.png" alt="" /></marquee> */}
 <>
 
  <section className="content">
    <h2>Welcome to Our Company</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ligula
      sit amet ex ultrices vulputate. Integer nec mauris sit amet odio
      scelerisque gravida non eget libero. Vestibulum viverra posuere justo, nec
      scelerisque ex bibendum ac. Nullam vel suscipit nisi.
    </p>
    <h2>Our Mission</h2>
    <p>
      Our mission is to provide high-quality products/services to our customers.
      We aim to innovate and exceed expectations, ensuring customer satisfaction
      and building long-term relationships.
    </p>
    <h2>Meet Our Team</h2>
    <ul>
      <li>
        <strong>John Doe</strong> - CEO
      </li>
      <li>
        <strong>Jane Smith</strong> - CTO
      </li>
      <li>
        <strong>Bob Johnson</strong> - CFO
      </li>
    </ul>
  </section>
  <footer>
    <p>© 2024 Our Company. All rights reserved.</p>
  </footer>
</>

 </div>

    </>
  )
}

export default About
