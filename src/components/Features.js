import { IoNewspaper, IoPeople, IoChatbox, IoFileTrayFull, IoPerson, IoAnalytics, IoTrophy, IoSpeedometer, IoGameController
	} from 'react-icons/io5';


export const UserManagement = () =>{
  return (
  <div className="project-icon tooltip">
		<IoPeople />
		<span className="tooltiptext">User Management</span>
  </div>
  );

};

export const ProfileManagement = () =>{
  return (
  <div className="project-icon tooltip">
		<IoPerson />
		<span className="tooltiptext">Profile Management</span>
  </div>
  );

};


export const SlotReservation = () =>{
  return (
  <div className="project-icon tooltip">
		<IoFileTrayFull />
		<span className="tooltiptext">Slot Reservation</span>
  </div>
  );

};

export const InformationBoard = () =>{
  return (
  <div className="project-icon tooltip">
		<IoNewspaper />
		<span className="tooltiptext">Information Board</span>
  </div>
  );

};

export const SMSNotification = () =>{
  return (
  <div className="project-icon tooltip">
		<IoChatbox />
		<span className="tooltiptext">SMS Notification</span>
  </div>
  );

};

export const ReportGeneration = () =>{
  return (
  <div className="project-icon tooltip">
		<IoAnalytics />
		<span className="tooltiptext">Report Generation</span>
  </div>
  );

};

export const AchievementMonitoring = () =>{
  return (
  <div className="project-icon tooltip">
    <IoTrophy />
    <span className="tooltiptext">Achievement Monitoring</span>
  </div>
  );

};

export const Gameperformance = () =>{
  return (
  <div className="project-icon tooltip">
    <IoSpeedometer />
    <span className="tooltiptext">Game Performance</span>
  </div>
  );

};

export const PlayerManagement = () =>{
  return (
  <div className="project-icon tooltip">
    <IoGameController />
    <span className="tooltiptext">Player Management</span>
  </div>
  );

};



