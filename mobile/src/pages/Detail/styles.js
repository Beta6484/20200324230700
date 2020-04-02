import Constants from 'expo-constants';
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#E5E5E5'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  incident: {
    marginTop: 32,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 2,
    fontSize: 15,
    marginBottom: 16,
    color: '#737380'
  },
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131A',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15.,
    color: '#737380',
    marginTop: 16
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E02041',
    borderRadius: 8,
    width: '48%',
    height: 50,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold'
  }
});