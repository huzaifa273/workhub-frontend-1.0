import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TeamMemberList from "../../Components/TeamMemberList/TeamMemberList";
import TeamProjectList from "../../Components/TeamProjectList/TeamProjectList";
import TeamInvitesList from "../../Components/TeamInvitesList/TeamInvitesList";
import TeamOnboardingStatusList from "../../Components/TeamOnboardingStatusList/TeamOnboardingStatusList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function TeamName() {
  const [showModal, setShowModal] = useState(false);
  const [currentTab, setCurrentTab] = useState("members");
  const [teamDetails, setTeamDetails] = useState();

  const accessToken = useSelector((state) => state.auth.token);
  const { id } = useParams();

  const fetchTeamDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/team/team-id/${id}`,
        {
          headers: {
            token: accessToken,
          },
        }
      );
      setTeamDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTeamDetails();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="main-universal-div">
      <div className="main-universal-content">
        <div className="members-top-section">
          <h2>{teamDetails && teamDetails.teamName}</h2>
          <div className="members-tabs">
            <button
              className={`members-tab ${
                currentTab === "members" ? "active" : ""
              }`}
              onClick={() => handleTabChange("members")}
            >
              MEMBERS
            </button>
            <button
              className={`members-tab ${
                currentTab === "projects" ? "active" : ""
              }`}
              onClick={() => handleTabChange("projects")}
            >
              Projects
            </button>
            <button
              className={`members-tab ${
                currentTab === "invites" ? "active" : ""
              }`}
              onClick={() => handleTabChange("invites")}
            >
              Invites
            </button>
            <button
              className={`members-tab ${
                currentTab === "onboarding" ? "active" : ""
              }`}
              onClick={() => handleTabChange("onboarding")}
            >
              Onboarding Status
            </button>
          </div>
        </div>
        {currentTab === "members" && teamDetails && (
          <TeamMemberList
            showModal={showModal}
            toggleModal={toggleModal}
            teamDetails={teamDetails}
            fetchTeamDetails={fetchTeamDetails}
          />
        )}
        {currentTab === "projects" && teamDetails && (
          <TeamProjectList
            showModal={showModal}
            toggleModal={toggleModal}
            teamDetails={teamDetails}
            fetchTeamDetails={fetchTeamDetails}
          />
        )}
        {currentTab === "invites" && teamDetails && (
          <TeamInvitesList showModal={showModal} toggleModal={toggleModal} />
        )}
        {currentTab === "onboarding" && <TeamOnboardingStatusList />}
      </div>
    </div>
  );
}

export default TeamName;
