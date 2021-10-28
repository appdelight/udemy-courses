import { Dialog } from '@mui/material';
import React from "react";
import AddNewLesson from '../container/playlists/AddNewLesson';
import AddNewPlaylist from '../container/playlists/AddNewPlaylist';
// import AddLanguage from "../../pages/language/AddLanguage";
import { IDrawerProps } from '../HOC/DrawerHoc';
import { ADD_NEW_LESSON, ADD_NEW_PLAYLIST, IDrawersNames } from '../utils/types';
// import { IDrawersNames } from '../utils/Types';
// import ToasterDrawer from "./ToasterDrawer";

interface ICustomDrawers extends IDrawerProps {
    Open: boolean;
    handleClose: (Name: IDrawersNames)=>any;
    disableBackdropClick: boolean
}
export interface IDialogComponentProps extends IDrawerProps {
  onClose: () => void
}
const CustomDialog = (props:ICustomDrawers) => {
  let drawerInnerContent = () => {
    switch (props.Name) {
      case ADD_NEW_PLAYLIST:
        return (
          <AddNewPlaylist 
            {...props.DrawerData}
            onClose={()=>props.handleClose(props.Name)}
          />
        );
      case ADD_NEW_LESSON:
        return (
          <AddNewLesson 
            {...props.DrawerData}
            onClose={()=>props.handleClose(props.Name)}
          />
        );

      default:
        return <div>No Drawer Content!</div>;
    }
  };
  return (
    <React.Fragment key={props.Name || String(Math.random)}>
      <Dialog
        onBackdropClick={()=>props.disableBackdropClick ? null : props.handleClose(props.Name)}
        disableEscapeKeyDown={props.disableBackdropClick}
        className={"w-100"}
        PaperProps={{
          className: `w-100 paper_drawer ${
            (props.DrawerData && props.DrawerData.paperClass) || ""
          }`,
        }}
        open={props.Open}
        onClose={()=>props.disableBackdropClick ? null : props.handleClose(props.Name)}
      >
        <div className="w-100 h-100">{drawerInnerContent()}</div>
      </Dialog>
    </React.Fragment>
  );
};

export default CustomDialog;
