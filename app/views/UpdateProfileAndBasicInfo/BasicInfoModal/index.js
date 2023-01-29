import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import CsSelectGender from '../../../containers/CsSelectGender';
import CsAutocompleteSelect from '../../../containers/CsAutocompleteSelect';
import FloatingTextInput from '../../../containers/FloatingTextInput';
import I18n from '../../../i18n';

import styles from './style';
import CsDatePicker from '../../../containers/CsDatePicker';
import Button from '../../../containers/Button';
import ExDatePicker from '../../../containers/ExDatePicker';

const theme = 'light';

const BasicInfoModal = ({isVisible, onBackdropPress}) => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {};

  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.title}>Update basic Information</Text>
        <Text style={styles.descriptionText}>
          Thank you for your registration, before we move forward please verify
          your email address
        </Text>
        <FloatingTextInput
          //   inputRef={nameInput}
          value={name}
          returnKeyType="next"
          keyboardType="default"
          textContentType="oneTimeCode"
          label={I18n.t('Name')}
          placeholder={'Enter Your name'}
          onChangeText={name => setName(name)}
          theme={theme}
          onSubmitEditing={() => {
            websiteInput.current.focus();
          }}
        />
        <CsSelectGender
          label="Select Your Gender"
          theme={theme}
          onChange={value => setGender(value)}
          value={gender}
        />
        <CsAutocompleteSelect
          theme={theme}
          placeholder={'Select city'}
          label="City"
        />
        <FloatingTextInput
          //   inputRef={nameInput}
          value={phone}
          returnKeyType="next"
          keyboardType="default"
          textContentType="oneTimeCode"
          label={I18n.t('Phone_number')}
          placeholder={'Type phone number'}
          onChangeText={phone => setPhone(phone)}
          theme={theme}
          onSubmitEditing={() => {
            websiteInput.current.focus();
          }}
        />
        <ExDatePicker
          theme={theme}
          placeholder={'Select Date of birth'}
          value={birthday}
          action={({value}) => {
            if (!value) {
              return;
            }
            setBirthday(value);
          }}
          label="Date of birth"
        />
        <Button
          style={styles.submitBtn}
          title={I18n.t('update')}
          size="W"
          onPress={onSubmit}
          testID="login-submit"
          //   loading={isLoading}
          theme={theme}
          pressingHighlight
        />
      </View>
    </Modal>
  );
};

export default BasicInfoModal;
