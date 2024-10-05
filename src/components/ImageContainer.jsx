import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import gif1 from "../assets/gif/video1.mp4"
import gif2 from "../assets/gif/video2.mp4"
import gif3 from "../assets/gif/video3.mp4"
import Image from "./Image";

const data =[
  {
      name:"APEX Tower",
      address:"Tashkent, Uzbekistan",
      type:"Exterior",
      url:{
          bg:gif1,
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },{
      name:"APEX Tower",
      address:"Tashkent, Uzbekistan",
      type:"Exterior",
      url:{
          bg:gif2,
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },
  {
      name:"APEX Tower",
      address:"Tashkent, Uzbekistan",
      type:"Exterior",
      url:{
          bg:gif3,
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },
  {
      name:"APEX Tower",
      address:"Tashkent, Uzbekistan",
      type:"Exterior",
      url:{
          bg:gif3,
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },
  {
      name:"APEX Tower",
      address:"Tashkent, Uzbekistan",
      type:"Exterior",
      url:{
          bg:gif1,
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },{
    name:"APEX Tower",
    address:"Tashkent, Uzbekistan",
    type:"Exterior",
    url:{
        bg:gif2,
        parts:{
            part1:"../img1",
            part2:"../img2",
            part3:"../img3",
            part4:"../img4",
        }
    }
}
]


const ImageContainer = () => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry gutter="25px">

          {data.map((v,i)=><Image img = {v} key={i}/>)}

        
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ImageContainer;
