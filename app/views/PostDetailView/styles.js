import { StyleSheet } from 'react-native';
import { COLOR_YELLOW } from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  owner: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'grey',
  },
  profileInfo: {
    marginLeft: 20,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  captionText: {
    marginTop: 12,
    fontSize: 14,
  },
  content: {
    position: 'relative',
  },
  titleText: {
    paddingVertical: 12,
    fontSize: 16,
    lineHeight: 24,
  },
  photoImage: {
    flex: 1,
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  likingImage: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    width: 48,
    height: 48,
  },
  video: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  thumbnailContainer: {
    position: 'relative',
    backgroundColor: 'black',
  },
  thumbnail: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  playIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesContent: {
    fontSize: 14,
  },
  actionImage: {
    width: 24,
    height: 24,
    paddingVertical: 4,
    marginHorizontal: 8,
    tintColor: COLOR_YELLOW,
  },
  comment: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flexGrow: 1,
    borderBottomWidth: 0,
    marginLeft: 12,
    marginBottom: 0,
  },
  likesAccounts: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  likeAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'grey',
  },
  commentContents: {
    marginTop: 12,
    paddingLeft: 12,
  },
  commentContainer: {
    marginBottom: 20,
    marginLeft: 10,
  },
  commentMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 40,
  },
  commentContent: {
    flexGrow: 1,
    borderRadius: 8,
    marginLeft: 12,
    padding: 4,
  },
  commentAccountName: {
    fontSize: 14,
  },
  commentText: {
    fontSize: 14,
    color: 'grey',
  },
  commentFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 54,
  },
  commentTime: {
    fontSize: 12,
    color: 'grey',
  },
  commentAvatar: {
    width: 45,
    height: 45,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'grey',
  },
  replyAction: {
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentTimeIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
  },
  commentReplyIcon: {
    width: 12,
    height: 12,
  },
  replyText: {
    marginLeft: 4,
    fontSize: 12,
  },
  separator: {
    width: '100%',
    height: 1,
    marginVertical: 10,
  },
  toolIcon: {
    width: 22,
    height: 22,
    marginRight: 12,
    resizeMode: 'contain',
  },
  more: {
    width: 8,
    height: 24,
    padding: 8,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 13,
    lineHeight: 14,
    flexWrap: 'wrap',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
  },
});
