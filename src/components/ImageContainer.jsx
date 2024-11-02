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
          bg:'https://picsum.photos/250/300',
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
          bg:'https://picsum.photos/400/400',
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
          bg:'https://picsum.photos/200/400',
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },
  {
    title: "Durmen Villa", address: "Neo Classic Design",
      type:"Exterior",
      url:{
          bg:'https://picsum.photos/400/300',
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },
  {
    title: "APEX Restaurant", address: "Modern Design",
      type:"Exterior",
      url:{
          bg:'https://picsum.photos/300/300',
          parts:{
              part1:"../img1",
              part2:"../img2",
              part3:"../img3",
              part4:"../img4",
          }
      }
  },{
    title: "APEX Bank", address: "Interior",
    type:"Exterior",
    url:{
        bg:'https://picsum.photos/200/300',
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
      <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 1, 900: 2}}>
        <Masonry gutter="25px">

          {data.map((v,i)=><Image img = {v} key={i}/>)}

        
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ImageContainer;
