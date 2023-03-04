
import { useState , useEffect} from "react";
var data = [
      {
        id: 102693,
        sol: 1000,
        camera: {
          id: 20,
          name: "FHAZ",
          rover_id: 5,
          full_name: "Front Hazard Avoidance Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 102694,
        sol: 1000,
        camera: {
          id: 20,
          name: "FHAZ",
          rover_id: 5,
          full_name: "Front Hazard Avoidance Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 102850,
        sol: 1000,
        camera: {
          id: 21,
          name: "RHAZ",
          rover_id: 5,
          full_name: "Rear Hazard Avoidance Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 102851,
        sol: 1000,
        camera: {
          id: 21,
          name: "RHAZ",
          rover_id: 5,
          full_name: "Rear Hazard Avoidance Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      },
      {
        id: 424905,
        sol: 1000,
        camera: {
          id: 22,
          name: "MAST",
          rover_id: 5,
          full_name: "Mast Camera"
        },
        img_src: "http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg",
        earth_date: "2015-05-30",
        rover: {
          id: 5,
          name: "Curiosity",
          landing_date: "2012-08-06",
          launch_date: "2011-11-26",
          status: "active"
        }
      }
    ];
  
export default function DataBindingComponent(){
    const [mars,setMars] = useState([]);

    useEffect(()=>{
        setMars(data);
        
    },[]);
     return(
           <div className="container">
            <h2>Mars photos</h2> 
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>preview</th>
                        
                    </tr>
                </thead>
                {console.log(mars)}
                <tbody>
                    {
                            
                            mars.map(photo=>
                                <tr>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} width="100" height="100"/>
                                </td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
          </div>
          
    )
}
