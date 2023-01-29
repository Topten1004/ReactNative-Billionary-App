import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  chatRoomCounter: {
    flexDirection: 'row',
    padding: 14,
  },
  chatRoomText: {
    fontFamily: 'Raleway',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textDecorationLine: 'underline',
    marginRight: 6,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 8,
    marginVertical: 4,
    alignItems: 'center',
    borderRadius: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  badge: {
    bottom: 0,
    right: 0,
    borderWidth: 2,
    position: 'absolute',
  },
  itemContent: {
    flexGrow: 1,
    flex: 1,
    marginHorizontal: 12,
  },
  itemImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  itemTitle: {
    fontFamily: 'Hind Vadodara',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 4,
  },
  itemMessage: {
    fontFamily: 'Hind Vadodara',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: '#C4C4C4',
  },
})
