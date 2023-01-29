import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 29,
    padding: 12,
    justifyContent: 'center',
    position: 'relative',
  },
  selectStyle: {},
  inputStyle: {
    height: 36,
    fontSize: 16,
    paddingVertical: 0,
    backgroundColor: 'white',
  },
  bioStyle: {
    height: 120,
    textAlignVertical: 'top',
  },
  avatar: {
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 16,
    right: 18,
    backgroundColor: 'rgba(125,125,125,0.7)',
    borderRadius: 13,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexGrow: 1,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  submitBtn: {
    marginTop: 8,
    paddingVertical: 2,
    alignSelf: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
});
