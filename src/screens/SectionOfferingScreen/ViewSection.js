import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ViewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Subject Code', 'Sucject Title', 'Lec', 'Lab', 'Tuition Units', 'Credited Units' , 'Section', 'Professor', 'Slots', 'Day', 'Time', 'Room'],
      tableData: [
        ['OLENGL007', 'TECHNICAL REPORT WRITING', '3', '0', '3', '3', 'BSIT Third Year-OLRS22', 'RIVERA RECHELLE AQUINO', '1', 'M', 'O6:00PM - 07:00PM', 'VRMRS22'],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
          <Row data={state.tableHead} />
          <Rows data={state.tableData} />
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
});

