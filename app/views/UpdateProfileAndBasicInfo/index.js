import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import {RadioButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";

import styles from './style';
import images from '../../assets/images';
import {COLOR_WHITE, themes} from '../../constants/colors';
import StatusBar from '../../containers/StatusBar';
import {withTheme} from '../../theme';
import scrollPersistTaps from '../../utils/scrollPersistTaps';
import I18n from '../../i18n';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {VectorIcon} from '../../containers/VectorIcon';
import Button from '../../containers/Button';
import {
  checkCameraPermission,
  checkPhotosPermission,
  imagePickerConfig,
} from '../../utils/permissions';
import BasicInfoModal from './BasicInfoModal';
import AddExperienceModal from './AddExperienceModal';

const theme = 'light';

const UpdateProfileAndBasicInfo = () => {
  const [profileImageUpdated, setProfileImageUpdated] = useState(false);
  const [basicInfoUpdated, setBasicInfoUpdated] = useState(false);
  const [radioButtonChecked, setRadioButtonChecked] = useState(false);
  const [experienceAdded, setExperienceAdded] = useState(false);

  // modal states
  const [basicInfoModalOpen, setBasicInfoModalOpen] = useState(true);
  const [experienceModalOpen, setExperienceModalOpen] = useState(false);

  const [image, setImage] = useState({
    image_path: '',
    image_name: 'Image name.png',
  });

  // open camera
  const takePhoto = async () => {
    if (await checkCameraPermission()) {
      ImagePicker.openCamera(imagePickerConfig).then(image => {
        setImage_path(image.path);
      });
    }
  };

  // choose from gallery
  const chooseFromLibrary = async () => {
    if (await checkPhotosPermission()) {
      ImagePicker.openPicker(imagePickerConfig).then(image => {
        setImage_path(image.path);
      });
    }
  };

  const toggleAction = () => {
    Alert.alert('', I18n.t('Upload_profile_photo'), [
      {
        text: I18n.t('Cancel'),
        onPress: () => {},
      },
      {
        text: I18n.t('Take_a_photo'),
        onPress: () => {
          takePhoto();
        },
      },
      {
        text: I18n.t('Choose_a_photo'),
        onPress: () => {
          chooseFromLibrary();
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      style={{flex: 1, flexDirection: 'column', backgroundColor: COLOR_WHITE}}>
      <StatusBar />

      {/* Basic info modal */}
      <BasicInfoModal isVisible={basicInfoModalOpen} onBackdropPress={()=>setBasicInfoModalOpen(!basicInfoModalOpen)} />

      {/* Experience modal */}
      <AddExperienceModal isVisible={experienceModalOpen} onBackdropPress={()=>setExperienceModalOpen(!experienceModalOpen)} />

      <ScrollView
        style={{flex: 1, backgroundColor: COLOR_WHITE, height: '100%'}}
        {...scrollPersistTaps}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Image style={styles.logo} source={images.logo} />
          <Text
            style={[
              styles.welcomeText,
              {color: themes[theme].headerTitleColor},
            ]}>
            {I18n.t('Onboard_text_welcome')}
          </Text>
          <Text style={styles.completeStepsText}>
            {I18n.t('please_complete_these_steps_to_confirm')}
          </Text>
        </View>

        {/* Upload Buttons container */}
        <View style={styles.uploadButtonsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={toggleAction}>
            <VectorIcon
              type="AntDesign"
              name="checkcircleo"
              color={profileImageUpdated ? '#1BA050' : '#858585'}
              size={18}
            />
            <Text style={styles.uploadProfileImageText}>
              Upload profile image
            </Text>
            <Text
              style={[
                styles.uploadNowText,
                {color: themes[theme].actionColor},
              ]}>
              Upload now
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={()=>setBasicInfoModalOpen(!basicInfoModalOpen)}>
            <VectorIcon
              type="AntDesign"
              name="checkcircleo"
                color={basicInfoUpdated ? '#1BA050' : '#858585'}
                size={18}
              />
              <Text style={styles.uploadProfileImageText}>
                Upload Basic information
              </Text>
              <Text
                style={[
                  styles.uploadNowText,
                  {color: themes[theme].actionColor},
                ]}>
                Upload now
              </Text>
            </TouchableOpacity>
        </View>

        {/* Add experience container */}
        <View style={styles.addExperienceContainer}>
          <Text style={styles.updateExperienceTxt}>Update Experience</Text>
          <TouchableOpacity style={styles.addExperienceBtn} onPress={()=>setExperienceModalOpen(!experienceModalOpen)}>
            <Text
              style={[
                styles.addExperienceTxt,
                {color: themes[theme].otherAuxiliaryText},
              ]}>
              Add Experience
            </Text>
          </TouchableOpacity>
        </View>

        {/* Other container */}
        <View style={styles.othersContainer}>
          <Text style={styles.othersText}>Others</Text>
          <TouchableOpacity style={styles.basicSubscriptionBtn}>
            <Image source={images.reward_badge} style={styles.reward_badge} />
            <View style={styles.basicSubscriptionAndUpgradePlanContainer}>
              <Text style={styles.basicSubscriptionText}>
                Basic Supscription
              </Text>
              <Text style={styles.upgradePlanText}>upgrade plan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.inviteNowBtn}>
            <Image
              source={images.fast_email_sending}
              style={styles.fast_email_sending}
            />
            <View style={styles.basicSubscriptionAndUpgradePlanContainer}>
              <Text style={styles.inviteTitle}>
                Invite to engage more people
              </Text>
              <Text style={styles.inviteDescription}>Invite now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom sheet/terms and conditions */}
      <View style={styles.bottomSheet}>
        <View style={styles.radioButtonAndText}>
          <RadioButton.Android
            status={radioButtonChecked ? 'checked' : 'unchecked'}
            onPress={() => setRadioButtonChecked(!radioButtonChecked)}
            style={styles.radioButton}
            color="#DBAA2E"
          />
          <Text style={styles.termsAndConditionsPrivacyPolicy}>
            I agree with the{' '}
            <Text style={styles.termsAndConditions}>Terms and Conditions</Text>{' '}
            and <Text style={styles.privacyPolicy}>Privacy Policy.</Text>
          </Text>
        </View>
        <Button
          title="Confirm & Create an Account"
          theme={theme}
          size="W"
          style={styles.confirmBtn}
          onPress={() => {}}
          testID="confirn_create_account"
        />
      </View>
    </SafeAreaView>
  );
};

export default withTheme(UpdateProfileAndBasicInfo);
