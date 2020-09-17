import React from "react";
import { ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";

class Buttons extends React.Component {
    handleSelect = (evt)=>{
        this.props.gridSize(evt)
    }
  render() {
    return (
      <div className="center">
        <ButtonToolbar className = "btn-box">
          <button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </button>
          <DropdownButton
            title="Grid size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <Dropdown.Item eventKey="1" className = "dropDownItem">25x25</Dropdown.Item>
            <Dropdown.Item eventKey="2" className = "dropDownItem">50x50</Dropdown.Item>
            <Dropdown.Item eventKey="3" className = "dropDownItem">60x60</Dropdown.Item>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons