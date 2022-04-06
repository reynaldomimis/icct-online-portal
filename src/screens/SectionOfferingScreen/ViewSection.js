import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ViewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Subject Code', 'Sucject Title', 'Lec', 'Lab', 'Tuition Units', 'Credited Units' , 'Section', 'Professor', 'Slots', 'Day', 'Time', 'Room'],
      tableData: [
        ['OLENGL007', 'TECHNICAL REPORT WRITING', '3', '0', '3', '3', 'BSIT Third Year-OLRS22', 'RIVERA RECHELLE AQUINO', '1', 'M', 'O6:00PM - 07:00PM', 'VRMRS22'],
        ['OLENGL007', 'TECHNICAL REPORT WRITING', '3', '0', '3', '3', 'BSIT Third Year-OLRS22', 'RIVERA RECHELLE AQUINO', '1', 'M', 'O6:00PM - 07:00PM', 'VRMRS22'],
        ['OLENGL007', 'TECHNICAL REPORT WRITING', '3', '0', '3', '3', 'BSIT Third Year-OLRS22', 'RIVERA RECHELLE AQUINO', '1', 'M', 'O6:00PM - 07:00PM', 'VRMRS22'],
        ['OLENGL007', 'TECHNICAL REPORT WRITING', '3', '0', '3', '3', 'BSIT Third Year-OLRS22', 'RIVERA RECHELLE AQUINO', '1', 'M', 'O6:00PM - 07:00PM', 'VRMRS22'],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
        <View style={styles.container}>
        <Text style={styles.textheader}>SECTION: OLENGL007</Text>
        <View style={styles.tablecontainer}>
        <ScrollView horizontal={true}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#DCDCDC'}}>

          <Row data={state.tableHead} widthArr={[150,500,100,100,120,140,200,300,100,100,200,100]} 
          style={styles.head} 
          textStyle={styles.texthead}
          />

          <Rows data={state.tableData} widthArr={[150,500,100,100,120,140,200,300,100,100,200,100]} 
          style={styles.row}
          textStyle={styles.textrow}
          />

        </Table>
        </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingTop: 50, 
    paddingBottom: 100,
  },
  tablecontainer: {
    paddingLeft: 10,
    paddingRight:10,
    paddingTop: 5,
    paddingBottom: 5,
    width: 350,
    backgroundColor: '#DCDCDC',
  },
  head: { 
    backgroundColor: '#1E90FF',
  },
  row: { 
    backgroundColor: '#FFFFFF',
  },
  textheader: {
  paddingBottom:30,
  fontSize: 18,
  },
  texthead: {
    color: '#FFFFFF',
    paddingBottom: 5,
    paddingTop: 5, 
    textAlign: "center",
    fontSize: 16,
  },
  textrow: { 
    paddingBottom: 1,
    paddingTop: 1, 
    textAlign: "center",
    fontSize: 14,
  },
});

