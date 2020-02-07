import React, { Component } from 'react';
import moment from 'moment';
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from 'react-agenda';

const now = new Date();


    const colors= {
      'color-1':"rgba(102, 195, 131 , 1)" ,
      "color-2":"rgba(242, 177, 52, 1)" ,
      "color-3":"rgba(235, 85, 59, 1)" ,
      "color-4":"rgba(70, 159, 213, 1)",
      "color-5":"rgba(170, 59, 123, 1)"
    }


const items = [
  {
   _id            :guid(),
    name          : 'Meeting , dev staff!',
    startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
    endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
    classes       : 'color-1 color-4'
  },
  {
    _id            :guid(),
     name          : 'bla bla',
     startDateTime : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
     endDateTime   : new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
     classes       : 'color-1 color-4'
   },
  
];

export default class Agenda extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      selected:[],
      cellHeight:(60 / 4),
      showModal:false,
      rowsPerHour:1,
      numberOfDays:1,
      startDate: new Date()
    }
  }

  componentDidMount(){
    this.setState({ items })
  }

  componentWillReceiveProps(next , last){
    if(next.items){
      this.setState({ items: next.items })
    }
  }


  handlefetch = (items) => {
    fetch('http://localhost:5000/',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state),       
      })
      .then(res => res.json());         
                  
  }

  handleItemEdit = (item, openModal) => {
    if(item && openModal === true){
      this.setState({ selected:[item] })
      return this._openModal();
    }
  }

  handleCellSelection = (item, openModal) => {
    if(this.state.selected && this.state.selected[0] === item){
      return this._openModal();
    }
    this.setState({ selected: [item] })
  }

  zoomIn = () => {
    const num = this.state.cellHeight + 15
    this.setState({ cellHeight:num })
  }

  zoomOut = () => {
    const num = this.state.cellHeight - 15
    this.setState({ cellHeight:num })
  }


  handleDateRangeChange = (startDate, endDate) => {
    this.setState({ startDate })
  }

  handleRangeSelection = (selected) => {
    this.setState({ selected: selected, showCtrl: true })
    this._openModal();
  }

  _openModal = () => {
    this.setState({ showModal:true })
  }
  _closeModal = (e) =>{
    if(e){
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal:false })
  }

  handleItemChange = (items , item) => {
    this.setState({ items })
  }

  handleItemSize = (items , item) => {
    this.setState({ items })   
  }

  removeEvent = (items , item) => {
    this.setState({ items });   
  }

  addNewEvent = (items, newItems) => {
 
    console.log(newItems);
    this.setState({ showModal: false, selected: [], items: items });   
    this.handlefetch(this.state.items);
    this._closeModal();
   

  }

  editEvent = (items , item) => {
    this.setState({ showModal:false, selected:[], items });
    this._closeModal();
  }

  changeView = (days , event ) => {
    this.setState({ numberOfDays:days })
  }


  render() {
    console.log('heloooo',this.state.items);
    var AgendaItem = function(props){
      
      return <div style={{display:'block', position:'absolute' , background:'#FFF'}}>{props.item.name} <button onClick={()=> props.edit(props.item)}>Edit </button></div>
    }
    return (
      
      <div className="content-expanded ">

        <div className="control-buttons">
          <button  className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
          <button  className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
          <button  className="button-control" onClick={this._openModal}> <i className="schedule-icon"></i> </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 7)}> {moment.duration(7, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 5)}> {moment.duration(5, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 3)}> {moment.duration(3, "days").humanize()}  </button>
          <button  className="button-control" onClick={this.changeView.bind(null , 1)}> {moment.duration(1, "day").humanize()} </button>
        </div>

        <ReactAgenda
          minDate={new Date(now.getFullYear(), now.getMonth()-3)}
          maxDate={new Date(now.getFullYear(), now.getMonth()+3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          items={this.props.data}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          itemComponent={AgendaItem}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)} />
        {
          this.state.showModal? <Modal clickOutside={this._closeModal} >
          <div className="modal-content">
             <ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  />

          </div>
   </Modal>:''
}


       </div>

    );
  }
}
