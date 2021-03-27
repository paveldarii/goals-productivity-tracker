import React, { useState, useEffect } from "react";
import DropUpContainer from "../DropUpContainer";
import ActiveTask from "../ActiveTask";
import HomeContext from "../../utils/HomeContext";
import API from "../../utils/API";
import moment from "moment";
import HistoryListItem from '../HistoryList/index.js';

function Home() {
  const [activeTaskStatus, setActiveStatus] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState("");
  const [actions, setActions] = useState({});
  const [timeCount, setTimeCount] = useState("");
  const [containerStyle, setContainerStyle] = useState({
    footer: { height: "30px" },
    footerbuttondown: { visibility: "hidden" },
    footerbuttonup: { visibility: "visible" },
    footercont: { opacity: "0", visibility: "hidden" },
    goBackIconHeight: "88vh",
  });

  const expand = () => {
    if (activeTaskStatus) {
      setContainerStyle({
        footer: { height: "83vh" },
        footerbuttondown: { visibility: "visible" },
        footerbuttonup: { visibility: "hidden" },
        footercont: { opacity: "1", visibility: "visible" },
        goBackIconHeight: "77vh",
      });
    } else {
      setContainerStyle({
        footer: { height: "94vh" },
        footerbuttondown: { visibility: "visible" },
        footerbuttonup: { visibility: "hidden" },
        footercont: { opacity: "1", visibility: "visible" },
        goBackIconHeight: "88vh",
      });
    }
  };
  const shrink = () => {
    setContainerStyle({
      footer: { height: "30px" },
      footerbuttondown: { visibility: "hidden" },
      footerbuttonup: { visibility: "visible" },
      footercont: { opacity: "0", visibility: "hidden" },
    });
  };

  const handleStartAction = (projectId, taskId, name) => {
    API.addAction({
      projectId: projectId,
      taskId: taskId,
      name: name,
      startTime: moment(),
    })
      .then((res) => {
        console.log(res.data);
        setActiveTaskId(res.data._id);
        setTimeCount(res.startTime);
        setActiveStatus(true);
        setContainerStyle({
          footer: { height: "83vh" },
          footerbuttondown: { visibility: "visible" },
          footerbuttonup: { visibility: "hidden" },
          footercont: { opacity: "1", visibility: "visible" },
          goBackIconHeight: "77vh",
        });
      })
      .catch((e) => console.log(e));
  };
  const handleEndAction = (projectId, taskId) => {
    API.endAction({
      projectId: projectId,
      taskId: taskId,
      _id: activeTaskId,
    })
      .then((data) => {
        console.log(data.data);
        setTimeCount(data.startTime);
        setActiveStatus(false);
        setContainerStyle({
          footer: { height: "94vh" },
          footerbuttondown: { visibility: "visible" },
          footerbuttonup: { visibility: "hidden" },
          footercont: { opacity: "1", visibility: "visible" },
          goBackIconHeight: "88vh",
        });
      })
      .catch((e) => console.log(e));
  };

  const displayHome = (active) => {
    if (active) {
      return (
        <div>
          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              isActive: activeTaskStatus,
              activeTaskId: activeTaskId,
            }}
          >
            <ActiveTask />
  

          </HomeContext.Provider>
          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              containerStyle: containerStyle,
              isActive: activeTaskStatus,
            }}
          >
            <DropUpContainer
              shrink={shrink}
              expand={expand}
              containerStyle={containerStyle}
            />
          </HomeContext.Provider>
        </div>
      );
    } else {

    {/* ------------------------------ */}


      useEffect(() =>  {
        

      } , []);

/*  ( For reference:   utils/API: 
  getAction: function (actionId) {
    return axios.get(
      `/api/actions/${localStorage.getItem(
        "userId"
      )}/projects/tasks/${actionId}`,
      {
        headers: { token: `${localStorage.getItem("token")}` },
      }
    );
  },

*/

      const handleHistoryList = (projectId, taskId, name) => {
        API.addAction({
          projectId: projectId,
          taskId: taskId,
          name: name,
          startTime: moment(),
        })
          .then((res) => {
            console.log(res.data);
            setActiveTaskId(res.data._id);
            setTimeCount(res.startTime); 
          })
          .catch((e) => console.log(e));
      };




      return (
        <div>
          
          <h1>History list</h1>
          <HistoryListItem />

          <HomeContext.Provider
            value={{
              handleStartAction: handleStartAction,
              handleEndAction: handleEndAction,
              containerStyle: containerStyle,
              isActive: activeTaskStatus,
            }}
          >

          {/* ------------------------------ */}
            <DropUpContainer
              shrink={shrink}
              expand={expand}
              containerStyle={containerStyle}
            />
          </HomeContext.Provider>
        </div>
      );
    }
  };
  return displayHome(activeTaskStatus);
}

export default Home;
