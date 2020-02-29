import React, { Component } from 'react';
import Info from './Info';
import moment from 'moment';
import { ReactAgenda, ReactAgendaCtrl, Modal} from 'react-agenda';

const now = new Date();


const colors={ "color-5":"rgba(170, 59, 123, 1)"}     


const items = [];



export default class Agenda extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      selected:[],
      cellHeight:(60 / 4),
      showModal:false,
      rowsPerHour:1,
      numberOfDays:7,
      startDate: new Date(),
      newItem:[]
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


  callbackFunction = (item) => {
    this.setState({ newItem: item });
     
}

  handleItemEdit = (item, openModal) => {
    if(item && openModal === true){
      this.setState({ selected:[item] })
      return this._openModal();
    }
  }

  handleCellSelection = (item, _openModal) => {
    if(this.state.selected && this.state.selected[0] === item){
      return this._openModal();
    }
      this.setState({ selected:[item] })
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
    this.setState({ selected:selected, showCtrl:true })
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

 
  addNewEvent = (items , newItems) => {
    //console.log('items: ', items);
    //console.log('newItems: ', newItems);
 
    this.setState({ showModal:false, selected:[], items:newItems });
    this._closeModal();
    
    this.handleFetch(this.state.items);
  }

  editEvent = (items , item) => {
    this.setState({ showModal:false, selected:[], items });
    this._closeModal();
  }

  changeView = (days , event ) => {
    this.setState({ numberOfDays:days })
  }


  render() {
    
    var AgendaItem = function(props){
      
      return <div style={{ display: 'block', position: 'absolute', background: '#FFF' }}>
                 {props.item.name}
                    <button onClick={() => props.edit(props.item)}>Edit </button></div>
    }
    return (
      
      <div className="content-expanded ">

        <div className="control-buttons">
          <button  className="button-control" onClick={this.zoomIn}>Zoom +<i className="zoom-plus-icon"></i> </button>
          <button  className="button-control" onClick={this.zoomOut}>Zoom -<i className="zoom-minus-icon"></i> </button>
          <button  className="button-control" onClick={this._openModal}>Schedule<i className="schedule-icon"></i> </button>
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
              {/*<ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}/>*/}
                                 
               <Info items={this.state.items} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent}  ></Info>            
              </div>           
              </Modal>:''
            }
     </div>

    );
  }
}