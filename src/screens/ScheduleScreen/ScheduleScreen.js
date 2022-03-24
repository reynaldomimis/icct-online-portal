import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import styles from './styles'

export default class ScheduleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Subject Code', 'Subject Title', 'Lec', 'Lab', 'Tuition Units','Credited Units', 'Section', 'Room No.', 'Proffessor','Schedule', 'Date'],
      DataTable: [
        ['OLCAPS1', 'CAPSTONE PROJECT AND RESEARCH 1', '3','0', '3', '3', 'BSIT B- Third Year-OL22A18', 'VRM18', '', 'TH 03:00PM-04:00PM VRM18', '01/12/2022'  ],
        ['OLCISCO-02', 'CISCO NETWORKING 2 (3/1)', '3','1', '4', '4', 'BSIT B- Third Year-OL22A18', 'VRM18', '', 'TH 04:00PM-05:00PM VRM18', '01/12/2022' ],
        ['OLIAS1', 'INFORMATION ASSURANCE AND SECURITY', '3','1', '1', '1', 'BSIT B- Third Year-OL22A18', 'VRM18', '', 'TH 05:00PM-06:00PM VRM18', '01/12/2022' ],
        ['OLPT1', 'INTEGRATIVE PROGRAMMING AND TECHNOLOGIES 1 (3/1)', '3','1', '4', '4', 'BSIT B- Third Year-OL22A18', 'VRM18', '', 'F 05:00PM-06:00PM VRM18', '01/12/2022' ],
      ],

      dateHeader: ['Sunday','Monday','Tuesday','wednesday', 'Thursday', 'Friday', 'Saturday'],
      scheduleTable:[
        ['03:00 - 04:00 OLCAPS1 BSIT-B Third Year-OL22A18 VRM18', '', '', '', '', '', ''],
        ['TH 03:00PM-04:00PM VRM18', '', '', '', '', '', ''],
        ['TH 03:00PM-04:00PM VRM18', '', '', '', '', '', ''],
        ['TH 03:00PM-04:00PM VRM18', '', '', '', '', '', '']
      ]
    }
  }

  
  render() {
    const state = this.state;
    return (
     
      
     
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>SCHEDULE </Text>
        </View>

        <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.tables}>
          <Table borderStyle={{borderWidth: 1, borderColor: 'grey'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.ContentTableText}/>
          </Table>
        </ScrollView>
         
        <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.tables}>
          <Table borderStyle={{borderWidth: 1, borderColor: 'grey'}}>
          <Row data={state.dateHeader} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.scheduleTable} textStyle={styles.ContentTableText}/>
          </Table>
        </ScrollView>
      </View>
    )
  }
}
