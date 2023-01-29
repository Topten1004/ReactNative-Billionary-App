import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 250,
  },
  mainContent: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -50,
    backgroundColor: 'white',
  },
  backAction: {
    position: 'absolute',
    bottom: 62,
    right: 12,
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#aaaaaa',
  },
  logo: {
    maxHeight: 150,
    resizeMode: 'contain',
  },
  profileContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  mainInfo: {
    flexDirection: 'row',
  },
  bio: {
    marginTop: 4,
    fontSize: 12,
  },
  city: {
    marginTop: 10,
    fontSize: 12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  website: {
    marginTop: 2,
  },
  job: {
    marginTop: 2,
    fontSize: 12,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 45,
    width: 90,
    height: 90,
  },
  profileInfo: {
    flexGrow: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  profileTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  handle: {
    fontSize: 12,
    color: 'grey',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileName: {
    fontSize: 15,
    fontWeight: '700',
  },
  settingIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  editProfile: {
    marginTop: 12,
  },
  editProfileBtn: {
    width: 100,
    height: 24,
    resizeMode: 'contain',
  },
  actionContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAction: {
    width: 100,
    height: 24,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  optionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  borderLeft: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: 'grey',
  },
  borderRight: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: 'grey',
  },
  optionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  optionTitle: {
    fontSize: 12,
  },
  followWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: -25,
    paddingHorizontal: '10%',
  },
  topRightButtons: {
    position: 'absolute',
    top: 5,
    right: 20,
    zIndex: 2,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toolButton: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
  },
  sideButton: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#2A2A2AB2',
    justifyContent: 'center',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tabItem: {
    paddingBottom: 4,
    borderBottomColor: '#A2A8B8',
    borderBottomWidth: 3,
    marginHorizontal: 15,
  },
  tabItemText: {
    fontWeight: '400',
    fontSize: 13,
  },

  tile1: {
    width: 200,
    height: 200,
    margin: 5,
  },
  tile2: {
    width: width - 230,
    height: 95,
    margin: 5,
  },
  tile3: {
    width: (width - 40) / 3,
    height: 167,
    margin: 5,
  },
});
